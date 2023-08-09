import { Router } from 'express';
import {
	getTodos,
	addTodo,
	updateTodo,
	deleteTodo,
} from '../controllers/todos';

const router: Router = Router();

router
	.get('/todos', getTodos)
	.post('/add-todo', addTodo)
	.put('/update-todo/:id', updateTodo)
	.delete('/delete-todo/:id', deleteTodo);

export default router;
