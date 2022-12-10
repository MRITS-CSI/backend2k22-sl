import { Request, Response } from 'express';

export const questions = async (req: Request, res: Response) => {
	try {
		res.status(200).json({
			status: 'Success',
			msg: 'Request Succeeded',
		});
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};
