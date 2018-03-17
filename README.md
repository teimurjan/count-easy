# Count Easy project.

## Built with
 - React
 - MobX
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
    git clone git@github.com:teimurjan/count-easy.git
```
#### Install dependencies
```
    npm install
```
#### Go to the frontend part
```
    cd ./frontend
```
#### Install frontend dependencies
```
    npm install
```
#### Running
```
    cd ../
    npm start
```
### Docker
#### Install Docker
Visit [this][docker], choose your OC and follow instructions

Run these commands
```
    docker-compose up -d
```

## Database

App uses promise-based [Sequelize ORM][sequelize] to communicate with database.

## Documentation
To see the API endpoints [this][documentation]

[docker]: https://docs.docker.com/
[documentation]: docs/Home.md
[sequelize]: http://docs.sequelizejs.com/