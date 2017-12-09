import {findByUserId, createPayment} from '../models/payment'

export const getByUserId = (userId) => {
  return findByUserId(userId)
};

export const savePayment = (data) => {
  return createPayment(data)
};