![BTC](https://img.shields.io/badge/Donate-BTC-red?logo=bitcoin)
**`3B2R9u6dpJyWB4U6iDWC14y9yejnF5hsSN`**
[![Buy me a coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-orange?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/RwIpTEd) 
[![Ko-fi](https://img.shields.io/badge/Donate-Ko--fi-blue?logo=ko-fi)](https://ko-fi.com/fatihturker)

# `Express Generator CLI for Node with Typescript, Apollo GraphQL Server and MongoDB with Mongoose`

This CLI helps to create new implemented API demo for Node with Typescript, Apollo GraphQL Server and MongoDB with Mongoose from a boilerplate.

## `About the NPM Package`
### Package Installation
```sh
npm install -g express-generator-node-typescript-apollo-graphql-mongo-cli
```

### Package Usage
Go to the directory on terminal where you want to generate the project.
```sh
$ cd PATH
```
and run the generator command with specifying the project name.
```sh
$ express-generator-ntagm --name="PROJECT_NAME"
```

For more information you can check this article:
https://www.linkedin.com/pulse/create-graphql-api-2-minutes-using-node-typescript-apollo-t%C3%BCrker/

## `Documentation for the Boilerplate`
When you generate the project, you will have;

### Tech Stack

* [Node.js]
* [Typescript]
* [GraphQL Apollo Server]
* MongoDB with [Mongoose]

### Features

* Multiple GraphQL Queries with implementations in Typescript
* Multiple GraphQL Mutations with implementations in Typescript
* Multiple GraphQL Schemas with implementations in Typescript
* Multiple Controllers with implementations in Typescript
* Multiple Mongoose Models with implementations in Typescript
* MongoDB Connection, Repository Layer implementations in Typescript
* CRUD operations for Multiple Entities with implementations in Typescript

### Architecture
This boilerplate has common graphql api design architecture. 
**Layers:**
* ***Controllers*** holds implementation for the business logic, like retrieving data from repositories, 
returning those data to queries and mutations, saving data etc.
* ***Database*** holds MongoDB connection provider
* ***Models*** holds document interfaces, schema definitions and models for MongoDB & Mongoose
* ***Mutations*** holds basic mutation implementation; create, update, delete
* ***Queries*** holds basic query implementation; retrieve
* ***Resolvers*** holds resolver definitions for Apollo Server
* ***Schemas*** holds schema definitions for Apollo Server

### Installation
Install the dependencies and devDependencies:

```sh
$ cd <Project Name>
$ npm install
```

Set environment parameters on **.env**:
```sh
PORT="{{PORT NUMBER WHERE THE APP WILL WORK}}"
MONGO_DB_PATH="{{MONGODB CONNECTION URL STRING}}"
```

And that's all, start the server
```sh
$ npm start
```

## `Documentation for the Generator Project`
### Tech Stack
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


### Installation
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

# `Authors`
 * **Fatih Türker**
# `Sponsors`
No sponsors yet! **Will you be the first?**

# `Contributors`
No contributers yet! **Will you be the first?**

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