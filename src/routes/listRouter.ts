import {Router, json} from 'express'
import ListController from '../controllers/listController'

const router = Router()
const jsonParser = json()
const listController = new ListController()

router.get('/list', listController.getList)

router.get('/list/:id', listController.getTask)

router.post('/list', jsonParser, listController.addTask)

router.delete('/list/:id', listController.deleteTask)

router.put('/list', jsonParser, listController.updateTask)

export default router