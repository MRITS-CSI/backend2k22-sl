import { Schema, model } from 'mongoose';
import { compare, hash } from 'bcryptjs';
enum branch {
	'CSE',
	'IT',
	'ECE',
	'AIML',
	'CS',
	'IOT',
	'NW',
	'DS',
	'CIVIL',
}
interface player {
	name: string;
	branch: string;
	yearOfStudy: number;
	section: string;
	rollNo: string;
	phoneNo: string;
	email: string;
}
interface user {
	teamNo: number | string;
	players: player[];
	password: string;
	checkPass: (inputPass: string, originalPass: string) => Promise<boolean>;
}
const playerSchema = new Schema<player>({
	name: {
		type: String,
		required: true,
	},
	branch: {
		type: String,
		enum: branch,
		required: true,
	},
	yearOfStudy: {
		type: Number,
		required: true,
	},
	section: {
		type: String,
		required: true,
	},
	rollNo: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNo: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

const userSchema = new Schema<user>({
	teamNo: {
		type: Number,
		required: true,
		unique: true,
	},
	players: {
		type: [playerSchema],
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', async function () {
	let hashedPass = await hash(this.password, 8);
	this.password = hashedPass;
});

userSchema.methods.checkPass = async (
	inputPass: string,
	originalPass: string
) => {
	return await compare(inputPass, originalPass);
};

const user = model<user>('users', userSchema);

export default user;
