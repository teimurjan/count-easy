import Sequelize from 'sequelize';
import sequelize from '../db';

export const UserModel = sequelize.define('user', {
  id: {type: Sequelize.DataTypes.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},

  login: {type: Sequelize.DataTypes.STRING, allowNull: false},

  password: {type: Sequelize.DataTypes.STRING, allowNull: false}
});

export const findByLogin = (login) => {
  return UserModel.findOne({
    where: {
      login: login
    }
  })
};
export const findById = (id) => {
  return UserModel.findById(id)
};

export const createUser = (user) => {
  return UserModel.create(user);
};