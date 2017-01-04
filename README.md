# Node-TypeScript-Restify-Mongoose

This is a demo node.js application written in TypeScript demonstrating how to build a RESTful API
with Restify and MongoDB for the backend.

Inspired by:
- https://github.com/KunalKapadia/express-mongoose-es6-rest-api
- https://github.com/madhums/node-express-mongoose-demo

## Requirements

* [NodeJs](http://nodejs.org) >= 6.x 
* [mongodb](http://mongodb.org)

## Install

```sh
$ git clone git://github.com/mksarge/node-ts-restify-mongoose-demo.git
$ npm install
```

**NOTE:** Do not forget to set the github `CLIENT_ID`s and `SECRET`s. In `development` env, you can set the env variables by doing

```sh
cp .env.example .env
```

and replace the values there. In `production` env, it is not safe to keep the ids and secrets in a file, so you need to set it up via commandline. If you are using heroku checkout how environment variables are set [here](https://devcenter.heroku.com/articles/config-vars).

then

```sh
$ npm start
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## Tests

The test command first lints, then builds the project before running Mocha tests.

```sh
// run tests
$ npm run test

// run tests with logger enabled
$ npm run test:debug
```

## License

MIT
