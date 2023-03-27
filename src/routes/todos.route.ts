import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import TodosController from '@/controllers/todos.controller';
import { CreateTodoDto } from '@/dtos/todos.dto';

//all todo routes
class TodosRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todosController = new TodosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todosController.getTodos);
    this.router.get(`${this.path}/:id`, this.todosController.getTodoById);
    this.router.post(`${this.path}`, validationMiddleware(CreateTodoDto, 'body'), this.todosController.createTodo);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateTodoDto, 'body', true), this.todosController.updateTodo);
    this.router.delete(`${this.path}/:id`, this.todosController.deleteTodo);
  }
}

export default TodosRoute;
