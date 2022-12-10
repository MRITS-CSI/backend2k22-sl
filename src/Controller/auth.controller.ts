import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import user from '../Model/user.model';

export const login = async (req: Request, res: Response) => {
	try {
		let { teamNo, password } = req.body;
		let teamData = await user.findOne({ teamNo });
		if (teamData && (await teamData.checkPass(password, teamData.password))) {
			let token = jwt.sign(
				{ teamNo: teamData.teamNo },
				process.env.JWT_SECRET as string,
				{
					expiresIn: process.env.JWT_EXPIRY,
				}
			);
			return res.status(200).json({
				status: 'success',
				token,
			});
		}
		return res.status(401).json({
			status: 'failed',
			msg: 'User not found',
		});
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};

export const protect = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let authToken = req.headers.authorization;
		if (authToken && authToken.startsWith('Bearer')) {
			let token = authToken.split(' ')[1];
			let payload = jwt.verify(
				token,
				process.env.JWT_SECRET as string
			) as jwt.JwtPayload;
			let teamData = await user.findOne({ teamNo: payload.teamNo });
			if (teamData && teamData.teamNo) {
				next();
			} else {
				res.status(401).json({
					status: 'failed',
					msg: 'User not found',
				});
			}
		} else {
			res.status(401).json({
				status: 'failed',
				msg: 'Missing authorization headers',
			});
		}
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};
