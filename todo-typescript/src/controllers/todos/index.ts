import { Request, Response } from 'express';
import Todo from '../../models/todo';
import { ITodo } from '../../types/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
	console.log('TEST GIT');
	console.log('TEST GIT 2');

	try {
		const todos: ITodo[] = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Failed to get todos' });
	}
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>;
		const todo: ITodo = new Todo({
			name: body.name,
			description: body.description,
			status: body.status,
		});

		const newTodo: ITodo = await todo.save();
		const todos: ITodo[] = await Todo.find();
		res.status(201).json({ message: 'New todo was created', newTodo, todos });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Failed to create new todo' });
	}
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const body = req.body;

		const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
			{ _id: id },
			body
		);
		const todos: ITodo[] = await Todo.find();
		res.status(202).json({ message: 'Todo was updated', updatedTodo, todos });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Failed to update todo' });
	}
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const deletedTodo: ITodo | null = await Todo.findByIdAndRemove({ _id: id });
		const todos: ITodo[] = await Todo.find();
		res.status(202).json({ message: 'Todo was updated', deletedTodo, todos });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Failed to delete todo' });
	}
};

export { getTodos, addTodo, updateTodo, deleteTodo };
