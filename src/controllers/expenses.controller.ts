import { NextFunction, Request, Response } from 'express';
import { Expense } from '@/interfaces/expenses.interface';
import ExpenseService from '@/services/expenses.service';
import { CreateExpenseDto } from '@/dtos/expenses.dto';

class ExpensesController {
  public expenseService = new ExpenseService();

  //handles incoming get expense request and map with proper response
  public getExpenses = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllExpensesData: Expense[] = await this.expenseService.findAllExpenses();

      res.status(200).json({ data: findAllExpensesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming get expense by id request and map with proper response
  public getExpenseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expenseId: string = req.params.id;
      const findOneExpenseData: Expense = await this.expenseService.findExpenseById(expenseId);

      res.status(200).json({ data: findOneExpenseData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming create expense request and map with proper response
  public createExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expenseData: CreateExpenseDto = req.body;
      const createExpenseData: Expense = await this.expenseService.createExpense(expenseData);

      res.status(201).json({ data: createExpenseData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming update expense request and map with proper response
  public updateExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expenseId: string = req.params.id;
      const expenseData: CreateExpenseDto = req.body;
      const updateExpenseData: Expense = await this.expenseService.updateExpense(expenseId, expenseData);

      res.status(200).json({ data: updateExpenseData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming delete expense request and map with proper response
  public deleteExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expenseId: string = req.params.id;
      const deleteExpenseData: Expense = await this.expenseService.deleteExpense(expenseId);

      res.status(200).json({ data: deleteExpenseData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ExpensesController;
