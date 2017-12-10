# Backend for Count Easy

This project is a backend for the Count Easy project.

## Built with
 - Node
 - Express
 - Sequelize
 - Passport
 - DBMigrate

## Setting up of environment locally

## Prerequisites:
1. Node v8.2.1
2. npm v5.3.0
3. Docker


#### Clone the repository
```
    git clone git@github.com:teimurjan/software-iaau.git
```
#### Go to the backend part
```
    cd ./backend
```
#### Install dependencies
```
    npm install
```
#### Running
```
    npm start
```
### Docker
#### Install Docker
Visit [this][docker], choose your OC and follow instructions
#### Set up PostgreSQL via docker
(for more information visit [this][dockerPostgres])

Run these commands
```
    docker pull postgres
    docker-compose up -d
    docker-compose exec db psql -U postgres
    CREATE DATABASE "count-easy";
```
## Database

App uses promise-based [Sequelize ORM][sequelize] to communicate with database.

## Documentation
To see the API endpoints [this][documentation]

[docker]: https://docs.docker.com/
[dockerPostgres]: https://hub.docker.com/_/postgres/
[documentation]: docs/Home.md
[sequelize]: http://docs.sequelizejs.com/
