import React, { useState, useRef } from 'react';

type Props = {
	saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
	const [formData, setFormData] = useState<ITodo | {}>();
	const nameInput = useRef(null);

	const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.currentTarget.id]: e.currentTarget.value,
			status: false,
		});
	};

	return (
		<form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
			<div>
				<div>
					<label htmlFor="name">Name</label>
					<input
						ref={nameInput}
						onChange={handleForm}
						type="text"
						id="name"
						autoFocus
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input onChange={handleForm} type="text" id="description" />
				</div>
			</div>
			<button disabled={formData === undefined ? true : false}>Add Todo</button>
		</form>
	);
};

export default AddTodo;
