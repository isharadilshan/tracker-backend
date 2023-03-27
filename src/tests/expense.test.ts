import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateExpenseDto } from '@dtos/expenses.dto';
import ExpensesRoute from '@routes/expenses.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Expenses', () => {
  describe('[GET] /expenses', () => {
    it('response findAll Expenses', async () => {
      const expensesRoute = new ExpensesRoute();
      const expenses = expensesRoute.expensesController.expenseService.expenses;

      expenses.find = jest.fn().mockReturnValue([
        {
          _id: '64183fa953dd30081c6ed238',
          title: 'test title 1',
          description: 'test description 1',
          amount: 1254,
          category: 'food',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
          latitude: 12.2345,
          longitude: 12.2345,
        },
        {
          _id: '641869bf53dd30081c6ed23c',
          title: 'test title 2',
          description: 'test description 2',
          amount: 54,
          category: 'health',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
          latitude: 12.2445,
          longitude: 12.2445,
        },
        {
          _id: '641869bf53dd30081c6ed23c',
          title: 'test title 3',
          description: 'test description 3',
          amount: 254,
          category: 'food',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
          latitude: 11.2345,
          longitude: 12.2345,
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([expensesRoute]);
      return request(app.getServer()).get(`${expensesRoute.path}`).expect(200);
    });
  });

  describe('[GET] /expenses/:id', () => {
    it('response findOne Expense', async () => {
      const expenseId = '641869bf53dd30081c6ed23c';

      const expensesRoute = new ExpensesRoute();
      const expenses = expensesRoute.expensesController.expenseService.expenses;

      expenses.findOne = jest.fn().mockReturnValue({
        _id: '64183fa953dd30081c6ed238',
        title: 'test title 1',
        description: 'test description 1',
        amount: 1254,
        category: 'food',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
        latitude: 12.2345,
        longitude: 12.2345,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([expensesRoute]);
      return request(app.getServer()).get(`${expensesRoute.path}/${expenseId}`).expect(200);
    });
  });

  describe('[POST] /expenses', () => {
    it('response Create Expense', async () => {
      const expenseData: CreateExpenseDto = {
        title: 'test title 1',
        description: 'test description 1',
        amount: 1254,
        category: 'food',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
        latitude: 12.2345,
        longitude: 12.2345,
      };

      const expensesRoute = new ExpensesRoute();
      const expenses = expensesRoute.expensesController.expenseService.expenses;

      expenses.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        title: 'test title 1',
        description: 'test description 1',
        amount: 1254,
        category: 'food',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
        latitude: 12.2345,
        longitude: 12.2345,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([expensesRoute]);
      return request(app.getServer()).post(`${expensesRoute.path}`).send(expenseData).expect(201);
    });
  });

  describe('[PUT] /expenses/:id', () => {
    it('response Update Expense', async () => {
      const expenseId = '60706478aad6c9ad19a31c84';
      const expenseData: CreateExpenseDto = {
        title: 'test title 1',
        description: 'test description 1',
        amount: 1254,
        category: 'food',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
        latitude: 12.2345,
        longitude: 12.2345,
      };

      const expensesRoute = new ExpensesRoute();
      const expenses = expensesRoute.expensesController.expenseService.expenses;

      expenses.findByIdAndUpdate = jest.fn().mockReturnValue({
        _id: expenseId,
        title: expenseData.title,
        description: expenseData.description,
        amount: expenseData.amount,
        category: expenseData.category,
        createdDate: expenseData.createdDate,
        updatedDate: expenseData.updatedDate,
        latitude: expenseData.latitude,
        longitude: expenseData.longitude,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([expensesRoute]);
      return request(app.getServer()).put(`${expensesRoute.path}/${expenseId}`).send(expenseData);
    });
  });

  describe('[DELETE] /expenses/:id', () => {
    it('response Delete Expense', async () => {
      const expenseId = '60706478aad6c9ad19a31c84';

      const expensesRoute = new ExpensesRoute();
      const expenses = expensesRoute.expensesController.expenseService.expenses;

      expenses.findByIdAndDelete = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        title: 'test title 1',
        description: 'test description 1',
        amount: 1254,
        category: 'food',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
        latitude: 12.2345,
        longitude: 12.2345,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([expensesRoute]);
      return request(app.getServer()).delete(`${expensesRoute.path}/${expenseId}`).expect(200);
    });
  });
});
