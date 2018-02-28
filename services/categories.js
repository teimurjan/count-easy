import { findAll, createCategory } from '../models/category';

export const getAll = userId => findAll(userId);

export const saveCategory = data => createCategory(data);
