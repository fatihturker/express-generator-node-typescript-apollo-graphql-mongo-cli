
# Express Generator CLI for Node with Typescript, Apollo GraphQL Server and MongoDB with Mongoose

This CLI helps to create new project for Node with Typescript, Apollo GraphQL Server and MongoDB with Mongoose
from a boilerplate.

### Install Package
```sh
npm install -g express-generator-node-typescript-apollo-graphql-mongo-cli
```

### Package Usage
```sh
express-generator-ntagm --name="PROJECT_NAME"
```

### Tech
* [Node.js]
* [Typescript]


### Plugins

**express-generator-ntagm** is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | Usage |
| ------ | ------ |
| [ejs] | to render global parameters like Project Name |
| [inquirer] | to ask questions and parse input |
| [shelljs] | to eliminate your shell script's dependency on Unix |
| [yargs] | to build interactive command line tools |
| [shx] | to wrap around ShellJS Unix commands |
| [ts-node] | to execute TypeScript and REPL for node.js, with source map support |


### Installation (for DEV)
**express-generator-ntagm** requires [Node.js] v10+ to run.

Install the dependencies and devDependencies and start the application.

```sh
$ cd express-generator-node-typescript-apollo-graphql-mongo
$ npm install
$ npm start
```

To install the CLI globally:
```sh
$ npm run-script build
$ npm install -g .
```

And global usage:
```sh
$ express-generator-ntagm --name="PROJECT_NAME"
```


# Boilerplate Features

* Multiple GraphQL Queries with implementations
* Multiple GraphQL Mutations with implementations
* Multiple GraphQL Schemas with implementations
* Multiple Controllers with implementations
* Multiple Mongoose Models with implementations
* MongoDB Connection, Repository Layer implementations
* CRUD operations for Multiple Entities with implementations 


### Boilerplate Tech

* [Node.js]
* [Typescript]
* [GraphQL Apollo Server]
* MongoDB with [Mongoose]


### Boilerplate Installation
Install the dependencies and devDependencies.

```sh
$ cd <Project Name>
$ npm install
```

Set environment parameters on **.env**
```sh
PORT="{{PORT NUMBER WHERE THE APP WILL WORK}}"
MONGO_DB_PATH="{{MONGODB CONNECTION URL STRING}}"
```

Start the server
```sh
$ npm start
```

# Sponsors
No sponsors yet! **Will you be the first?**

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-black.png)](https://www.buymeacoffee.com/RwIpTEd)

# License
----

MIT

[Typescript]: <https://www.typescriptlang.org>
[Node.js]: <http://nodejs.org>
[ts-node]: <https://www.npmjs.com/package/ts-node>
[shx]: <https://www.npmjs.com/package/shx>
[yargs]: <https://www.npmjs.com/package/yargs>
[shelljs]: <https://www.npmjs.com/package/shelljs>
[inquirer]: <https://www.npmjs.com/package/inquirer>
[ejs]: <https://www.npmjs.com/package/ejs>
[GraphQL Apollo Server]: <https://www.apollographql.com/docs/apollo-server/>
[Mongoose]: <https://mongoosejs.com/>