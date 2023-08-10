interface ITodo {
	_id: string;
	name: string;
	description: string;
	status: boolean;
	createdAt?: string;
	updatedAt?: string;
}

interface TodoProps {
	todo: ITodo;
}

type ApiDataType = {
	message: string;
	todo?: ITodo;
	todos: ITodo[];
	status: string;
};
