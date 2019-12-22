#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as template from './utils/template';
import chalk from 'chalk';
import * as yargs from 'yargs';

/**
 * @description holds the project generator
 */

 // Questions
const QUESTIONS = [
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    when: () => !yargs.argv['name'],
    validate: (input: string) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

// current directory
const CURR_DIR = process.cwd();

// template config
export interface TemplateConfig {
  files?: string[]
  postMessage?: string
}

// cli options
export interface CliOptions {
  projectName: string
  templatePath: string
  targetPath: string
  config: TemplateConfig
}

// prompts questions to user
inquirer.prompt(QUESTIONS)
  .then(answers => {

    let userAnswers = Object.assign({}, answers, yargs.argv);

    const projectName = userAnswers['name'];
    const templatePath = path.join(__dirname, '../template');
    const targetPath = path.join(CURR_DIR, projectName);
    const templateConfig = getTemplateConfig(templatePath);

    const options: CliOptions = {
      projectName,
      templatePath,
      targetPath,
      config: templateConfig
    }

    if (!createProject(targetPath)) {
      return;
    }

    createDirectoryContents(templatePath, projectName, templateConfig);

    if (!postProcess(options)) {
      return;
    }

    showMessage(options);
  });

/**
 * shows message to user
 * @param options cli options
 */  
const showMessage = (options: CliOptions) => {
  console.log('');
  console.log(chalk.green('Done.'));
  console.log(chalk.green(`Go into the project: cd ${options.projectName}`));

  const message = options.config.postMessage;

  if (message) {
    console.log('');
    console.log(chalk.yellow(message));
    console.log('');
  }
}

/**
 * gets template config
 * @param templatePath template path
 * @returns tempate config
 */
const getTemplateConfig = (templatePath: string): TemplateConfig => {
  const configPath = path.join(templatePath, '.template.json');

  if (!fs.existsSync(configPath)) return {};

  const templateConfigContent = fs.readFileSync(configPath);

  if (templateConfigContent) {
    return JSON.parse(templateConfigContent.toString());
  }

  return {};
}

/**
 * creates project
 * @param projectPath project path
 * @returns true if folder does not already exist
 */
const createProject = (projectPath: string) => {
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
    return false;
  }

  fs.mkdirSync(projectPath);
  return true;
}

/**
 * applies post processes for node
 * @param options cli options
 */
const postProcess = (options: CliOptions) => {
  if (isNode(options)) {
    return postProcessNode(options);
  }
  return true;
}

/**
 * checks if package.json exists
 * @param options cli options
 * @returns true if package.json exists
 */
const isNode = (options: CliOptions) => {
  return fs.existsSync(path.join(options.templatePath, 'package.json'));
}

/**
 * applies post process for node,
 * npm install etc.
 * @param options cli options
 */
const postProcessNode = (options: CliOptions) => {
  shell.cd(options.targetPath);

  let cmd = '';

  if (shell.which('yarn')) {
    cmd = 'yarn';
  } else if (shell.which('npm')) {
    cmd = 'npm install';
  }

  if (cmd) {
    const result = shell.exec(cmd);

    if (result.code !== 0) {
      return false;
    }
  } else {
    console.log(chalk.red('No yarn or npm found. Cannot run installation.'));
  }

  return true;
}

// skip files
const SKIP_FILES = ['node_modules', '.template.json'];

/**
 * creates project directories with contents
 * @param templatePath template path
 * @param projectName project name
 * @param config template config
 */
const createDirectoryContents = (templatePath: string, projectName: string, config: TemplateConfig) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');

      contents = template.render(contents, { projectName });

      const writePath = path.join(CURR_DIR, projectName, file);
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file));

      // recursive call
      createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), config);
    }
  });
}