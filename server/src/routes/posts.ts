import { Router } from 'express';
import axios from 'axios';
const postsRoute = Router();

const http = axios.create({
	baseURL: 'https://gorest.co.in/public/v2/posts',
});

postsRoute.get('/', async (req, res) => {
	const posts = await http.get('/');
	res.status(200).json(posts.data);
});

postsRoute.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const post = await http.get(`/${id}`);
		res.status(200).json(post.data);
	} catch (error) {
		console.log(error);
	}
});

postsRoute.post('/', async (req, res) => {
	const post = {
		user_id: 4240581,
		title: 'hellow world',
		body: 'active123 hellow world',
	};
	try {
		const newPost = await http.post('/', post, {
			headers: {
				Authorization:
					'Bearer 58f253318e7bf1e57a6c82cae6ce5968acc7247e2777273e2e1c81bb40520d14',
			},
		});
		res.status(200).json(newPost.data);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
});

export default postsRoute;
