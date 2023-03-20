import { HttpException } from '@exceptions/HttpException';
import expenseModel from '@models/expenses.model';
import { isEmpty } from '@utils/util';
import { Expense } from '@/interfaces/expenses.interface';
import { CreateExpenseDto } from '@/dtos/expenses.dto';

class ExpenseService {
  public expenses = expenseModel;

  public async findAllExpenses(): Promise<Expense[]> {
    const users: Expense[] = await this.expenses.find();
    return users;
  }

  public async findExpenseById(expenseId: string): Promise<Expense> {
    if (isEmpty(expenseId)) throw new HttpException(400, 'Expense ID is empty');

    const findExpense: Expense = await this.expenses.findOne({ _id: expenseId });
    if (!findExpense) throw new HttpException(409, "Expense doesn't exist");

    return findExpense;
  }

  public async createExpense(expenseData: CreateExpenseDto): Promise<Expense> {
    if (isEmpty(expenseData)) throw new HttpException(400, 'Expense Data is empty');

    const createExpenseData: Expense = await this.expenses.create({ ...expenseData });

    return createExpenseData;
  }

  public async updateExpense(expenseId: string, expenseData: CreateExpenseDto): Promise<Expense> {
    if (isEmpty(expenseData)) throw new HttpException(400, 'Expense Data is empty');

    const updateExpenseById: Expense = await this.expenses.findByIdAndUpdate(expenseId, { ...expenseData });
    if (!updateExpenseById) throw new HttpException(409, "Expense doesn't exist");

    return updateExpenseById;
  }

  public async deleteExpense(expenseId: string): Promise<Expense> {
    const deleteExpenseById: Expense = await this.expenses.findByIdAndDelete(expenseId);
    if (!deleteExpenseById) throw new HttpException(409, "Expense doesn't exist");

    return deleteExpenseById;
  }
}

export default ExpenseService;
