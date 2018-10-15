import c from 'config';
import Sequelize from 'sequelize';

function initSequelize() {
  if (!c.has('db')) {
    throw new Error('No Database config!');
  }
  const {
    database, username, password, url, ...options
  } = c.get('db');
  if (!url) {
    return new Sequelize(database, username, password, options);
  }
  return new Sequelize(url);
}

const sequelize = initSequelize();
export default sequelize;
