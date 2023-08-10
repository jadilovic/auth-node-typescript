import axios, { AxiosResponse } from 'axios';

const serverUrl: string = 'http://localhost:4000';

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todos: AxiosResponse<ApiDataType> = await axios.get(
			serverUrl + '/todos'
		);
		return todos;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};

export const addTodo = async (
	formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todo: Omit<ITodo, '_id'> = {
			name: formData.name,
			description: formData.description,
			status: formData.status,
		};
		const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
			serverUrl + '/add-todo',
			todo
		);
		return saveTodo;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};

export const updateTodo = async (
	todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todoUpdate: Pick<ITodo, 'status'> = {
			...todo,
			status: true,
		};
		const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
			serverUrl + '/update-todo/' + todo._id,
			todoUpdate
		);

		return updatedTodo;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};

export const deleteTodo = async (
	_id: string
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
			serverUrl + '/delete-todo/' + _id
		);
		return deletedTodo;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};
