import Sequelize from 'sequelize';
import sequelize from '../db';
import { CategoryModel } from './category';
import { UserModel } from './user';

export const PaymentModel = sequelize.define('payment', {
  id: { type: Sequelize.DataTypes.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4 },

  amount: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
  date: { type: Sequelize.DataTypes.DATE, allowNull: false },
});

PaymentModel.belongsTo(CategoryModel, { foreignKey: 'categoryId' });
PaymentModel.belongsTo(UserModel, { foreignKey: 'userId' });

export const findByUserId = userId => PaymentModel.findAll({
  where: { userId },
  include: [{ model: CategoryModel, as: 'category' }],
});


export const createPayment = data => PaymentModel.create(data);