# Expense Tracker REST API

This repository contains node express backend for expense tracker sample app

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/isharadilshan/tracker-backend.git
cd tracker-backend
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [CI / CD](#ci-cd)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
# or
npm run dev
```

Running in production:

```bash
# build
npm run build
# start
npm run prod
```

Running Unit Tests:

```bash
# test
npm run test
```

Run with Docker:

```bash
# docker
docker compose up
```

## Environment Variables

The environment variables can be found and modified in the `.env.development.local` file.

```bash
# App runnning port
PORT = # default set to 3001

## Database Configurations
# Database host
HOST = # default set to localhost
# Port
PORT = # default set to 27017
DB_DATABASE = # default set to expensetracker

##Auth
# Token
TOKEN = # auth token

## Logs
# Log format
LOG_FORMAT = # default set to dev
#Log directory
LOG_DIR = # default set to /logs

## Cors configurations
# Cors origin
ORIGIN = # default set to *
# Cors credentials
CREDENTIALS = # default set to true
```

## CI / CD

- App hosted on digital ocean cloud provider [http://143.198.206.156:3001/]
- Static code analyzer [SonarQube] setup with github actions [http://167.71.205.129:9000/dashboard?id=tracker-backend] use credentials [username: `admin`] and [password: `PHpid_75`]

## Project Structure

```
src\                # Source folder
  config\
    |--index.ts     # Configuration file
  databases\
    |--index.ts     # Database configuration file
  dtos\             # All data transfer objects defined this folder
  exceptions\
    |--Exceptions.ts # Exceptions class file
  interfaces\       # All interfaces defined this folder
  middleware\       # All middlewares defined this folder
  modules\          # All modules defined this folder
  routes\           # All routes defined this folder
  services\         # All services defined this folder
  tests\            # All unit tests defined this folder
  utils\
    |--logger.ts    # Logger transform file
    |--utils.ts     # Utility functions file
    |--validateEnv.ts  # Validate Helper file

.dockerignore
Dockerfile
docker-compose.yml
README.md
sonar-project.properties
swagger.yml
package.json          
```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST api/v1/auth/signup` - Signup\
`POST api/v1/auth/signin` - Signin\
`POST api/v1/auth/logout` - Logout

**Expense routes**:\
`POST /expenses` - Create a expense\
`GET /expenses` - Get all expenses\
`GET /expenses/id` - Get expense by id\
`PUT /expenses/id` - Update expense by id\
`DELETE /expenses/id` - Delete expense by id

**ToDo routes**:\
`POST /expenses` - Create a todo\
`GET /expenses` - Get all todos\
`GET /expenses/id` - Get todo by id\
`PUT /expenses/id` - Update todo by id\
`DELETE /expenses/id` - Delete todo by id

**Swagger Documentation**:\
`GET /api-docs` - Swagger documentation

## License

[MIT](LICENSE)