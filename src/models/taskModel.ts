
import {Model, model, Document, Schema} from 'mongoose'
import { Task, TaskModel } from '../types/list'

//Schema
const TasksSchema: Schema = new Schema({
    text: {type: String, required: true},
    isPerformed: {type: Boolean, default: false},
    isTagged: {type: Boolean, default: false},
    date: {type: String, required: true}
})

//Methods
TasksSchema.methods.getDate = function() {
    return this.date
}

//Virtual
TasksSchema.virtual('universalDateFormat').get(function(this: Task) {
    return this.date.split(".").reverse().join("-")
})

//Model
const tasksModel: Model<TaskModel> = model<TaskModel>('Tasks', TasksSchema)

export default tasksModel