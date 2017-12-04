import Sequelize from 'sequelize';
import sequelize from '../db';

export const UserModel = sequelize.define('user', {
  id: {type: Sequelize.DataTypes.UUIDV4, primaryKey: true},

  login: {type: Sequelize.DataTypes.STRING, allowNull: false},

  password: {type: Sequelize.DataTypes.STRING, allowNull: false}
});

const userStub = {
  login: 'andrei',
  password: 'password'
};

export const findByLogin = (login) => {
  return Promise.resolve(userStub)
  // return this.UserModel.findOne({
  //   where: {
  //     login: login
  //   }
  // })
};
export const findById = (id) => {
  return Promise.resolve(userStub)
  // return this.UserModel.findById(id)
};

export const createUser = (user) => {
  // return this.UserModel.create(user);
};