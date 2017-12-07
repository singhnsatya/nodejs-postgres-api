node api setup:

cd nodejs-postgres-api

1. npm intall
2. npm install -g knex
3. open postgres and create a role
4. open postgres and run -> create database userform
5. update your connection in knexfile.js //add your connection -> postgres://postgresrole:password@localhost/userform
6. knex migrate:latest -> this will run the migration file from your migration folder and create the table in postgres
7. node index.js --> http://localhost:3030

ux setup:

cd ux

1. npm install
2. npm start --> http://localhost:3060

