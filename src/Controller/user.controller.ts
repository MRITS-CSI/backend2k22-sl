import user from '../Model/user.model';
import * as nanoid from 'nanoid';
import { generateSlug } from 'random-word-slugs';
import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
	try {
		let teamNo = nanoid.customAlphabet('123456789', 3)();
		let { players } = req.body;
		let password = generateSlug(1);
		let data = await user.create({
			players,
			teamNo: +teamNo,
			password,
		});
		res.status(200).json({
			status: 'success',
			password,
			msg: data,
		});
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};

export const updateUser = async (req: Request, res: Response) => {
	try {
		let updatedUser = await user.findOneAndUpdate(
			{ teamNo: req.params.teamNo },
			req.body
		);
		if (updatedUser) {
			res.status(200).json({
				status: 'success',
				msg: 'User updated successfully',
			});
		} else {
			res.status(400).json({
				status: 'failed',
				msg: 'User not found',
			});
		}
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};
