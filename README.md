# Node-TypeScript-Restify-Mongoose

This is a demo Node.js application written in TypeScript demonstrating how to build a RESTful API
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

## Test

The test command first lints, then builds the project before running Mocha tests.

```sh
// run tests
$ npm run test

// run tests with logger enabled
$ npm run test:debug

// run tests with instanbul coverage
$ npm run cover
```

## Run

```sh
$ npm start
```

Then visit [http://localhost:5000/](http://localhost:5000/)

## License

MIT
