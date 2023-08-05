import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const { APP_PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: 'Hello Server!' });
});

app.listen(APP_PORT, () => {
	console.log(`Server is listening at port ${APP_PORT}`);
});
