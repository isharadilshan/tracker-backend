import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateTodoDto } from '@dtos/todos.dto';
import TodosRoute from '@routes/todos.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing ToDos', () => {
  describe('[GET] /todos', () => {
    it('response findAll ToDos', async () => {
      const todosRoute = new TodosRoute();
      const todos = todosRoute.todosController.todoService.todos;

      todos.find = jest.fn().mockReturnValue([
        {
          _id: '64183fa953dd30081c6ed238',
          title: 'test title 1',
          description: 'test description 1',
          category: 'food',
          status: 'in-progress',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
        },
        {
          _id: '641869bf53dd30081c6ed23c',
          title: 'test title 2',
          description: 'test description 2',
          category: 'food',
          status: 'in-progress',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
        },
        {
          _id: '641869bf53dd30081c6ed23c',
          title: 'test title 3',
          description: 'test description 3',
          category: 'food',
          status: 'in-progress',
          createdDate: 1679250459526,
          updatedDate: 1679250459526,
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([todosRoute]);
      return request(app.getServer()).get(`${todosRoute.path}`).expect(200);
    });
  });

  describe('[GET] /todos/:id', () => {
    it('response findOne ToDo', async () => {
      const todoId = '641869bf53dd30081c6ed23c';

      const todosRoute = new TodosRoute();
      const todos = todosRoute.todosController.todoService.todos;

      todos.findOne = jest.fn().mockReturnValue({
        _id: '64183fa953dd30081c6ed238',
        title: 'test title 1',
        description: 'test description 1',
        category: 'food',
        status: 'in-progress',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([todosRoute]);
      return request(app.getServer()).get(`${todosRoute.path}/${todoId}`).expect(200);
    });
  });

  describe('[POST] /todos', () => {
    it('response Create toDo', async () => {
      const todoData: CreateTodoDto = {
        title: 'test title 1',
        description: 'test description 1',
        category: 'food',
        status: 'in-progress',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
      };

      const todosRoute = new TodosRoute();
      const todos = todosRoute.todosController.todoService.todos;

      todos.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        title: 'test title 1',
        description: 'test description 1',
        category: 'food',
        status: 'in-progress',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([todosRoute]);
      return request(app.getServer()).post(`${todosRoute.path}`).send(todoData).expect(201);
    });
  });

  describe('[PUT] /todos/:id', () => {
    it('response Update ToDo', async () => {
      const todoId = '60706478aad6c9ad19a31c84';
      const todoData: CreateTodoDto = {
        title: 'test title 1',
        description: 'test description 1',
        category: 'food',
        status: 'in-progress',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
      };

      const todosRoute = new TodosRoute();
      const todos = todosRoute.todosController.todoService.todos;

      todos.findByIdAndUpdate = jest.fn().mockReturnValue({
        _id: todoId,
        title: todoData.title,
        description: todoData.description,
        category: todoData.category,
        createdDate: todoData.createdDate,
        updatedDate: todoData.updatedDate,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([todosRoute]);
      return request(app.getServer()).put(`${todosRoute.path}/${todoId}`).send(todoData);
    });
  });

  describe('[DELETE] /todos/:id', () => {
    it('response Delete ToDo', async () => {
      const todoId = '60706478aad6c9ad19a31c84';

      const todosRoute = new TodosRoute();
      const todos = todosRoute.todosController.todoService.todos;

      todos.findByIdAndDelete = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        title: 'test title 1',
        description: 'test description 1',
        category: 'food',
        status: 'in-progress',
        createdDate: 1679250459526,
        updatedDate: 1679250459526,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([todosRoute]);
      return request(app.getServer()).delete(`${todosRoute.path}/${todoId}`).expect(200);
    });
  });
});
