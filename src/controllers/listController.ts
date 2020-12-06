import TaskModel from '../models/taskModel';
import { Handler, ITaskModel, Task } from '../types/listTypes';
import listService from '../services/listService';

class ListController {
  getList: Handler = async (req, res) => {
    const list = await listService.getList();
    return res.type('json').send(list);
  };

  getTask: Handler = async (req, res) => {
    const task = await listService.getTask(req.params.id);
    return res.type('json').send(task);
  };

  addTask: Handler = async (req, res) => {
    const task: Task = req.body;
    const taskDocument: ITaskModel = new TaskModel(task);
    const addedTask = await listService.addTask(taskDocument);
    res.type('json').send(addedTask);
  };

  deleteTask: Handler = async (req, res) => {
    const deletedTask = await listService.deleteTask(req.params.id);
    res.send(deletedTask);
  };

  updateTask: Handler = async (req, res) => {
    const task: Partial<Task> = req.body;
    const updatedTask = await listService.updateTask(task);
    res.send(updatedTask);
  };
}

const listController = new ListController();

export default listController;
