import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import DBMigrate from 'db-migrate';
import c from 'config';
import errorHandler from 'errorhandler';
import passport from 'passport';
import jwtStrategy from './auth';
import autoImport from './utils/auto-import';
import router from './controllers/';
import Paths from './consts/paths';

function initPassport() {
  passport.use(jwtStrategy);
  return passport.initialize();
}

async function migrate() {
  const dbConfig = c.get('db');
  if (dbConfig) {
    const migration = DBMigrate.getInstance(true, {
      config: { dev: dbConfig },
      cwd: '.',
    });
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
  application.use(Paths.Root, router);

  application.use('*', (req, res) => {
    res.sendFile('index.html');
  });

  await autoImport('./models');
  application.use(errorHandler());
}

async function createServer() {
  const app = express();

  return migrate()
    .then(() => config(app))
    .then(() => console.log('application has started'))
    .then(() => app)
    .catch(e => console.error(e));
}

export default createServer;
