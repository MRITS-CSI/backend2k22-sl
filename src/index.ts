import { connect } from 'mongoose';
import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../config.env') });
import app from './app';

let db = process.env.DB_URL;
db = db!.replace('<password>', process.env.DB_PASS as string);
console.log(db);
connect(db)
	.then(() => console.log('Succesfully connected to database'))
	.catch((err) => {
		console.log(err);
	});

app.listen(process.env.PORT, () => {
	console.log(`App is running on port ${process.env.PORT}`);
});
