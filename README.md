# backendTemplate
Creating the template for a backend

### npm init -y

### Installation
1. npm i knex sqlite3 express dotenv bcryptjs jsonwebtoken pg
2. npm i -D nodemon supertest jest cross-env

### npx knex init (Knex was not install globally [npm i -g knex ==> knex init])

### File Structure:

#### index.js - 
1. port information with env variable
2. require dotenv config
3. server listen

#### .env - NODE_ENV=development PORT=5000

#### server.js - 
1. Express
2. Server
3. API Requests
4. Export Server

#### package.json - scripts
1. "start":"node index.js"
2. "server":"nodemon index.js"

#### knexfile.js
1. copy and paste stuff

#### Knex wise
1. npx knex migrate:make users-table
2. npx knex seed:make 001-users

#### dbConfig
1. knex
2. config -> knexfile
3. environment
4. export config

#### Database

#### Migration: users-table
1. incrementing id 
2. username unique notNull
3. password notNull
4. name [optional]
5. age integer [optional]
6. subscription bool [optional] - default to false

#### npx knex migrate:latest

#### Seed: users
1. {id: 1, username: "Devin", password: "Devin", age: 14, subscription: false, name: "Devin"}
npx knex seed:run

#### Users
1. Users
2. Users Model
    1. require database from dbConfig
    2. database helper functions
3. Users Router

    
#### Auth
1. Auth Router
    1. router = express("express").router()
    2. import bcrypt
    3. import Users from users-model
    4. Login post
    5. Register post with JSONWEBTOKEN

#### JSONWEBTOKEN
1. Import
2. Generate Token Function
3. ./config/secrets.js file
    1. exported secret


#### General Backend Endpoints
1. User Profile
    1. get information
    2. update information
    3. Included restricted middleware

2. User has an array of something
    1. add item to something
    2. delete item to something
    3. get somethings
    4. update somethings 

#### Deploying
1. Change knexfile stuff (import and production object)
2. Heroku
    1. Resources: heroku prostgres add on
    2. Setting: DB_ENV ==> production
    3. npx heroku run knex migrate:latest -a <app-name>
    4. npx heroku run knex seed:run -a <app-name>
3. Test endpoint in insomonia


#### Testing
1. npx knex migrate:latest --env=testing
2. npx knex seed:run --env=testing


##### Notes
0. Seed Data
3. Depoly on Heroku
1. Tests
2. Implement Cookies for extra security
3. Documentation   !!!!!
