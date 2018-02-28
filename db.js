import c from 'config';
import Sequelize from 'sequelize';

function initSequelize() {
  if (!c.has('db')) {
    throw new Error('No Database config!');
  }
  const {
    database, username, password, ...options
  } = c.get('db');
  return new Sequelize(database, username, password, options);
}

const sequelize = initSequelize();
export default sequelize;
