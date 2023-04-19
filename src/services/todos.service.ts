import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import todoModel from '@/models/todos.model';
import { ToDo } from '@/interfaces/todos.interface';
import { CreateTodoDto } from '@/dtos/todos.dto';

class TodoService {
  public todos = todoModel;

  //service call to retrieve all from database
  public async findAllTodos(): Promise<ToDo[]> {
    const todos: ToDo[] = await this.todos.find();
    return todos;
  }

  //service call to retrieve by id from database
  public async findTodoById(todoId: string): Promise<ToDo> {
    if (isEmpty(todoId)) throw new HttpException(400, 'ToDo ID is empty');

    const findToDo: ToDo = await this.todos.findOne({ _id: todoId });
    if (!findToDo) throw new HttpException(409, "ToDo doesn't exist");

    return findToDo;
  }

  //service call to create new on database
  public async createTodo(todoData: CreateTodoDto): Promise<ToDo> {
    if (isEmpty(todoData)) throw new HttpException(400, 'ToDo Data is empty');

    const createTodoData: ToDo = await this.todos.create({ ...todoData });

    return createTodoData;
  }

  //service call to update existing on database
  public async updateTodo(todoId: string, todoData: CreateTodoDto): Promise<ToDo> {
    if (isEmpty(todoData)) throw new HttpException(400, 'ToDo Data is empty');

    const updateTodoById: ToDo = await this.todos.findByIdAndUpdate(todoId, { ...todoData });
    if (!updateTodoById) throw new HttpException(409, "Todo doesn't exist");

    return updateTodoById;
  }

  //service call to delete existing on database
  public async deleteTodo(todoId: string): Promise<ToDo> {
    const deleteTodoById: ToDo = await this.todos.findByIdAndDelete(todoId);
    if (!deleteTodoById) throw new HttpException(409, "ToDo doesn't exist");

    return deleteTodoById;
  }
}

export default TodoService;
