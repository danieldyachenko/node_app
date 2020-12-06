import { model, Schema } from 'mongoose';
import { ITaskModel } from '../types/listTypes';

const TaskSchema: Schema = new Schema({
  text: { type: String, required: true },
  isPerformed: { type: Boolean, default: false },
  isTagged: { type: Boolean, default: false },
  date: { type: Date, required: true },
});

const TaskModel = model<ITaskModel>('Tasks', TaskSchema);

export default TaskModel;
