import {Router, json} from 'express'
import ListController from '../controllers/listController'

const router = Router()
const jsonParser = json()
const listController = new ListController()

router.get('/list', listController.getList)

router.get('/task/:id', listController.getTask)

router.post('/task', jsonParser, listController.addTask)

router.delete('/task/:id', listController.deleteTask)

router.put('/task', jsonParser, listController.updateTask)

export default router