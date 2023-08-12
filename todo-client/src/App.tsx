import React, { useEffect, useState } from 'react';
import './App.css';
import { addTodo, deleteTodo, getTodos, updateTodo } from './API';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async (): Promise<void> => {
		// getTodos()
		// 	.then(({ data: { todos } }): ITodo[] | any => {
		// 		setTodos(todos);
		// 		console.log(todos);
		// 	})
		// 	.catch((err: Error) => console.log(err));
		const response = await getTodos();
		const todos: ITodo[] | any = response.data;
		setTodos(todos);
	};

	const handleSaveTodo = async (
		e: React.FormEvent,
		formData: ITodo
	): Promise<void> => {
		// e.preventDefault();
		const response = await addTodo(formData);
		if (response.status !== 201) {
			throw new Error('Failed to create new todo');
		}
		setTodos(response.data.todos);
	};

	const handleUpdateTodo = async (todo: ITodo): Promise<void> => {
		const response = await updateTodo(todo);
		if (response.status !== 202) {
			throw new Error('Failed to update todo');
		}
		setTodos(response.data.todos);
	};

	const handleDeleteTodo = async (_id: string): Promise<void> => {
		const response = await deleteTodo(_id);
		if (response.status !== 202) {
			throw new Error('Failed to delete todo');
		}
		setTodos(response.data.todos);
	};

	return (
		<div className="App">
			<h1>My Todos</h1>
			<AddTodo saveTodo={handleSaveTodo} />
			{todos.map((todo: ITodo) => (
				<TodoItem
					key={todo._id}
					updateTodo={handleUpdateTodo}
					deleteTodo={handleDeleteTodo}
					todo={todo}
				/>
			))}
		</div>
	);
}

export default App;
