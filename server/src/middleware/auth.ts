import jwt, { JwtPayload } from 'jsonwebtoken';
const { AUTH_TOKEN_KEY } = process.env;

// Project dependencies
import userRepository from '../repositories/UserRepository';

export const checkAuthToken = async (req: any, res: any, next: any) => {
	const auth_token = req.headers['x-access-token'] as string;

	try {
		if (!auth_token) {
			throw new Error('Unauthorized');
		}

		const decodedUserInfo = jwt.verify(
			auth_token,
			AUTH_TOKEN_KEY!
		) as JwtPayload;
		// Check if user actually exist in db
		const user = await userRepository.getUserBy({
			id: decodedUserInfo.email,
			matchField: 'email',
		});
		if (!user) {
			throw new Error('Unauthorized');
		}

		req.user = { ...user.data, ...decodedUserInfo };
	} catch (error) {
		return res.status(403).json({ error: 'Unauthorized' });
	}

	return next();
};
