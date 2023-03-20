import { ToDo } from '@/interfaces/todos.interface';
import { model, Schema, Document } from 'mongoose';

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  updatedDate: {
    type: Date,
    required: true,
  },
});

const todoModel = model<ToDo & Document>('ToDo', todoSchema);

export default todoModel;
