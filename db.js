import c from 'config';
import Sequelize from 'sequelize';

function initSequelize() {
  if (!c.has('db')) {
    throw new Error('No Database config!')
  }
  return new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialectOptions: {
      ssl: true /* for SSL config since Heroku gives you this out of the box */
    }
  });
}
const sequelize = initSequelize();
export default sequelize;
