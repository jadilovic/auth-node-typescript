import axios from 'axios';
import { Router, Request, Response } from 'express';

const githubRouter = Router();

const github = axios.create({ baseURL: 'https://api.github.com' });

const gitHubToken: string = process.env.GITHUB_TOKEN_KEY;
const gitHubAuth: object = { Authorization: `Bearer ${gitHubToken}` };

githubRouter
	.get('/users', async (req: Request, res: Response) => {
		try {
			const users = await github.get(
				'/users?since=19991707&per_page=3&page=2',
				{
					headers: { Authorization: `Bearer ${gitHubToken}` },
				}
			);
			res.status(200).json(users.data);
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.get('/users/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const user = await github.get(`/users/${id}`, { headers: gitHubAuth });
			res.status(200).json(user.data);
		} catch (error) {
			res.status(500).json(error);
		}
	});

export default githubRouter;
