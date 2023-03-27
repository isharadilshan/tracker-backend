import { NextFunction, Request, Response } from 'express';
import TodoService from '@/services/todos.service';
import { ToDo } from '@/interfaces/todos.interface';
import { CreateTodoDto } from '@/dtos/todos.dto';

class TodosController {
  public todoService = new TodoService();

  //handles incoming get todo request and map with proper response
  public getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTodosData: ToDo[] = await this.todoService.findAllTodos();

      res.status(200).json({ data: findAllTodosData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming get todo by id request and map with proper response
  public getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const findOneTodoData: ToDo = await this.todoService.findTodoById(todoId);

      res.status(200).json({ data: findOneTodoData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming create todo  request and map with proper response
  public createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoData: CreateTodoDto = req.body;
      const createTodoData: ToDo = await this.todoService.createTodo(todoData);

      res.status(201).json({ data: createTodoData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming update todo request and map with proper response
  public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const todoData: CreateTodoDto = req.body;
      const updateTodoData: ToDo = await this.todoService.updateTodo(todoId, todoData);

      res.status(200).json({ data: updateTodoData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  //handles incoming delete todo request and map with proper response
  public deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const deleteTodoData: ToDo = await this.todoService.deleteTodo(todoId);

      res.status(200).json({ data: deleteTodoData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default TodosController;
