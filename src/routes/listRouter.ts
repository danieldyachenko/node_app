import { Router, json } from 'express';
import listController from '../controllers/listController';

const listRouter = Router();
const jsonParser = json();

listRouter.get('/list', listController.getList);

listRouter.get('/task/:id', listController.getTask);

listRouter.post('/task', jsonParser, listController.addTask);

listRouter.delete('/task/:id', listController.deleteTask);

listRouter.put('/task', jsonParser, listController.updateTask);

export default listRouter;
