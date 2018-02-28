import { findByUserId, createPayment } from '../models/payment';

export const getByUserId = userId => findByUserId(userId);

export const savePayment = data => createPayment(data);