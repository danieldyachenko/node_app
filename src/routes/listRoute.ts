import {Router, json} from 'express'
import ListController from '../controllers/listController'

const router = Router()
const jsonParser = json()
const listController = new ListController()

router.get('/list', listController.getList)

router.post('/task', jsonParser, listController.addTasks)

export default router