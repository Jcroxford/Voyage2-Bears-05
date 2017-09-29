# Kalios Rest API Server

This is the rest API for the Kalios project. This contains all the endpoints for interacting with the Kalios db as well as serving up the client (as of right now the client is not currently configured to run on this server).

Read our [documentation](./apiReference.md) for the rest API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run this project locally you must have Node, npm, and MogoDB installed on your machine. 

### Installing and Running Locally

1. Clone the repo from the root directory and switch to the server directory `cd Voyage2-Bears-05/server` 
2. run `npm install` to gather the necessary packages.
3. This project requires a local config.json file to provide private `process.env` variables for testing and development. (see below for example). This file should be stored in `server/config/config.json`
4. Make sure the projects is installed correctly by starting the server `npm start` and visiting http://localhost:3000/api/hello If installed correctly, you should receive a welcome message

### scripts
| Scripts              | Use                                           |
|----------------------|-----------------------------------------------|
| `npm start`          | start server locally                          |
| `npm run dev`        | start persistent server locally using nodemon |
| `npm test`           | run mocha test suite                          |
| `npm run test:watch` | run persistent mocha test suite               |
| `npm run lint`       | run eslint across server files                |
| `npm run lint:fix`   | fixes lint errors across files automatically  |

**Example config.json File (you can copy paste this file diretly to get started)**
```json
{
  "test": {
    "PORT": 3001,
    "MONGODB_URI": "mongodb://localhost:27017/KaliosTest",
    "JWT_SECRET": "pw123msiv4j6do1odsakk9d"
  },
  "development": {
    "PORT": 3000,
    "NODE_ENV": "development",
    "MONGODB_URI": "mongodb://localhost:27017/Kalios",
    "JWT_SECRET": "jd5n6pfl2kdfnkl395jasdfn"
  },
  "production": {
    "JWT_SECRET": "akluasd8n2345nakjndsf"
  }
}
```

## Testing
to run test suite, run one of the test commands listed in the table above. 

To add unit tests for future functions, the `tests` folder has been set up to mimic server directory. This means if you create a controller file and need to write tests for that controller, the tests should be in `tests/controller/someController.test.js.`

## Deployment

more to come here eventually but the projects is not currently deployed for production.

## Built With

* [Express](http://expressjs.com/) - Server Library
* [MongoDB](https://www.mongodb.com/) - Database
* [React](https://facebook.github.io/react/) - Front End Framework
* [Mongoose](http://mongoosejs.com/) - MongoDB ODM

## Authors

* **Jesse Croxford** - [Jesse's Profile](https://github.com/Jcroxford)

*add your information here everyone!*
