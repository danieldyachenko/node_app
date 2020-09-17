
import {Model, model, Document} from 'mongoose'
import TasksSchema from '../schemes/taskSchema'
import { TaskModel } from '../types/list'

const tasksModel: Model<TaskModel> = model<TaskModel>('Tasks', TasksSchema)

export default tasksModel