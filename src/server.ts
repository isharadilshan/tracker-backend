import App from '@/app';
import IndexRoute from '@routes/index.route';
import ExpensesRoute from '@routes/expenses.route';
import validateEnv from '@utils/validateEnv';
import TodosRoute from './routes/todos.route';

validateEnv();

const app = new App([new IndexRoute(), new ExpensesRoute(), new TodosRoute()]);

app.listen();
