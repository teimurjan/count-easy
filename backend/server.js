import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import DBMigrate from 'db-migrate';
import c from 'config';
import errorHandler from 'errorhandler';
import passport from 'passport';
import {jwtStrategy} from './auth';
import autoImport from './utils/auto-import'

function initPassport() {
  passport.use(jwtStrategy);
  return passport.initialize();
}

async function createServer() {
  const app = express();

  return migrate()
    .then(() => config(app))
    .then(() => console.log('application has started'))
    .then(() => app)
    .catch(e => console.error(e));
}

async function migrate() {
  const dbConfig = c.get('db');
  if (dbConfig) {
    const migration = DBMigrate.getInstance(true, { config: { dev: dbConfig }, cwd: './backend' });
    await migration.up();
  }
}

async function config(application) {
  application.set('view engine', 'json');

  application.use(initPassport());
  application.use(logger('dev'));
  application.use(bodyParser.json());
  application.use(bodyParser.urlencoded({ extended: false }));
  application.use(cookieParser());
  application.use(express.static(path.join(__dirname, 'public')));

  // catch 404 and forward to error handler
  application.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  await autoImport('./backend/models');
  await autoImport('./backend/', false);
  // error handler
  // eslint-disable-next-line no-unused-vars
  application.use(errorHandler());
}


export default createServer;
