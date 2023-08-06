import { Router, Request, Response } from 'express';
import axios from 'axios';
import IPost from '../data_providers/IPost';
const postsRoute = Router();

const http = axios.create({
	baseURL: 'https://gorest.co.in/public/v2/posts',
});

const simpleBooksUrl = axios.create({
	baseURL: 'https://simple-books-api.glitch.me',
});

const goRestToken = process.env.AUTH_TOKEN_KEY;
const simpleBooksToken = process.env.SIMPLE_BOOKS_KEY;

const sbRequest = async () => {
	// const newOrder = await simpleBooksUrl.post(
	// 	'/orders',
	// 	{ bookId: 1, customerName: 'Boby' },
	// 	{ headers: { Authorization: `Bearer ${simpleBooksToken}` } }
	// );
	// console.log(newOrder.data);
	// const orders = await simpleBooksUrl.get('/orders', {
	// 	headers: { Authorization: `Bearer ${simpleBooksToken}` },
	// });
	// console.log(orders.data);
	// const books = await simpleBooksUrl.get('/books');
	// console.log(books.data);
};

sbRequest();

// GET ALL POSTS
postsRoute.get('/', async (req, res) => {
	const posts = await http.get('/');
	res.status(200).json(posts.data);
});

// GET ONE POST
postsRoute.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const post = await http.get(`/${id}`);
		res.status(200).json(post.data);
	} catch (error) {
		res.status(400).json(error);
	}
});

// CREATE POST
postsRoute.post('/', async (req, res) => {
	// Sample data
	// {
	// 	user_id: 4251628;
	// 	title: 'male@dot1e.com';
	// 	body: 'active eee 123';
	// }
	const { user_id, title, body } = req.body;

	const post: IPost = {
		user_id,
		title,
		body,
	};
	try {
		const newPost = await http.post('/', post, {
			headers: {
				Authorization: `Bearer ${goRestToken}`,
			},
		});
		console.log(newPost.data);

		res.status(200).json(newPost.data);
	} catch (error) {
		// console.log(error);
		res.status(400).json(error);
	}
});

postsRoute.put('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	console.log(req.body);

	try {
		const updatedPost = await http.patch(`/${id}`, req.body, {
			headers: {
				Authorization: `Bearer ${goRestToken}`,
				'Content-Type': 'application/json',
			},
		});
		res.status(200).json(updatedPost.data);
	} catch (error) {
		res.status(500).json(error);
	}
});

postsRoute.delete('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await http.delete(`/${id}`, {
			headers: { Authorization: goRestToken },
		});
		res.status(204).json({ message: 'Post with id ' + id + ' was deleted' });
	} catch (error) {
		res.status(400).json(error);
	}
});

export default postsRoute;
