node api setup:

cd nodejs-postgres-api

1. npm intall
2. npm install -g knex
3. open postgres -> sudo -u postgres psql
4. run below query in postgres:<br/> 
    create database userform;<br/>
    create role admin with login password 'passwordyouwant';<br/>
    grant all privileges on all tables in schema public to admin;
6. update your knex file add connection details --> postgres://admin:passwordforadmin@localhost/userform
7. knex migrate:latest -> this will run the migration file from your migration folder and create the table in postgres
8. start your server
9. node index.js -> http://localhost:3030

ux setup:

cd ux

1. npm install
2. npm start --> http://localhost:3060

