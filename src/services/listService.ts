import TaskModel from '../models/taskModel';
import { ITaskModel, Task } from '../types/listTypes';

class ListService {
  getList() {
    return TaskModel.find({});
  }

  getTask(id: string) {
    return TaskModel.findOne({ _id: id });
  }

  addTask(taskDocument: ITaskModel) {
    return taskDocument.save();
  }

  deleteTask(id: string) {
    return TaskModel.findByIdAndDelete(id);
  }

  updateTask(task: Partial<Task>) {
    const { id, ...taskBody } = task;
    return TaskModel.findByIdAndUpdate(id, taskBody, { new: true });
  }
}

const listService = new ListService();

export default listService;
