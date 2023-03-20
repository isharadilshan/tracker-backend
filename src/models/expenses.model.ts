import { Expense } from '@/interfaces/expenses.interface';
import { model, Schema, Document } from 'mongoose';

const expenseSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Number,
    required: true,
  },
  updatedDate: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
});

const expenseModel = model<Expense & Document>('Expense', expenseSchema);

export default expenseModel;
