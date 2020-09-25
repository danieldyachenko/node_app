
import {Model, model, Schema} from 'mongoose'
import { TaskModel } from '../types/list'

//Schema
const TasksSchema: Schema = new Schema({
    text: {
        type: String, 
        required: true,
        validate: {
            validator: (value: string): boolean => value !== 'ошибка',
            message: props => `${props.value} is not a valid text!`
        }
    },
    isPerformed: {type: Boolean, default: false},
    isTagged: {type: Boolean, default: false},
    date: {type: Date, required: true}
})

//Methods
TasksSchema.methods.getDate = function() {
    return this.date
}

//Model
const tasksModel: Model<TaskModel> = model<TaskModel>('Tasks', TasksSchema)

//Change Streams
tasksModel.watch().on('change', data => console.log(data))

export default tasksModel