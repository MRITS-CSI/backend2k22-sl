import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let dirs = readdirSync(resolve(__dirname, './Router'));
dirs.forEach(async (dir) => {
	let route = dir.replace('.route.ts', '');
	app.use(`/api/v1/${route}`, (await import(`./Router/${dir}`)).default);
});

export default app;
