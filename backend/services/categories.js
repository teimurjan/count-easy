import {findAll, createCategory} from '../models/category'

export const getAll = (userId) => {
  return findAll(userId)
};

export const saveCategory = (data) => {
  return createCategory(data)
};