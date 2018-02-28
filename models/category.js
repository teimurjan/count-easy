import Sequelize from 'sequelize';
import sequelize from '../db';

export const CategoryModel = sequelize.define('category', {
  id: { type: Sequelize.DataTypes.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4 },

  name: { type: Sequelize.DataTypes.STRING, allowNull: false },
});

export const findAll = () => CategoryModel.findAll();

export const createCategory = data => CategoryModel.create(data);