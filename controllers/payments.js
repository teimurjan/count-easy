import {Router} from 'express'
import {getByUserId, savePayment} from '../services/payments'
import {response, error} from '../utils/controller'
import {checkForRequiredFields} from '../utils/validators'

const paymentsRouter = Router()

paymentsRouter.get('/', async (req, res) => {
  try {
    const userId = req.user.id
    const data = await getByUserId(userId)
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
})

paymentsRouter.post('/', async (req, res) => {
  try {
    checkForRequiredFields(req.body, ['amount', 'categoryId'])
    const {amount, categoryId} = req.body
    const {id} = req.user
    const data = await savePayment({amount, categoryId, userId: id})
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
})

export default paymentsRouter