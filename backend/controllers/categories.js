import {Router} from 'express'
import {getAll, saveCategory} from '../services/categories'
import {response, error} from '../utils/controller'
import {checkForRequiredFields} from '../utils/validators'

const categoriesRouter = Router()

categoriesRouter.get('/', async (req, res) => {
  try {
    const data = await getAll()
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
})

categoriesRouter.post('/', async (req, res) => {
  try {
    checkForRequiredFields(data, ['name'])
    const data = await saveCategory(req.body)
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
})

export default categoriesRouter