
import {Schema, model} from 'mongoose'

const TasksSchema = new Schema({
    text: {type: String, required: true},
    isPerformed: {type: Boolean, default: false},
    isTagged: {type: Boolean, default: false},
    date: {type: String, required: true}
})

export default model('Tasks', TasksSchema)