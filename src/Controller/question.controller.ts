import { Request, Response } from 'express';
import * as _ from 'lodash';
import data from '../questions.json';

export const questions = async (req: Request, res: Response) => {
	try {
		let fiboQuestions = _.sampleSize(data.fibonacci, 2);
		let cipherQuestions = _.sampleSize(data.caesar, 4);

		res.status(200).json({
			status: 'Success',
			data: {
				fibonacci: fiboQuestions,
				cipher: cipherQuestions,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'failed',
			msg: err,
		});
	}
};
