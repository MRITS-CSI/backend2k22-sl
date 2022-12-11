const fs = require('fs');
const { fibEncrypt } = require('./fiboEncrypt');
const { caesarShift } = require('./caesarCipher');

let fibQuestionArr = [
	'Missiles launched from the north front.',
	'Movement detected within the old forest.',
	'A brown fox has been observed querying a jumping lazy dog.',
	'Testing encryption systems. Do not respond.',
	'Enemy tanker has been captured.',
	'Requesting backup, the front-line has been ambushed.',
	'Thermal signatures have been detected at the east gate.',
	'The mid-field barracks have been infiltrated.',
	'We have been shot, retreat to the base camp.',
	'Requesting arms in the North-Camp...I repeat, requesting arms in the North-Camp',
];

let caesarQuestionArr = [
	'Does anyone have eyes on The Falcon?',
	'There has been a security breach in the far camp.',
	'Alfa-Zulu in the air, ready to strike.',
	'Mission aborted, return back to the airbase.',
	'Radio check...Radio check... loud and clear.',
	'bogey at your left... roger that.',
	'Target confirmed, requesting confirmation to engage.',
	'Eagle-1 Fox-2 do you copy?',
	'The bogey has been eliminated, over and out.',
	'Does any have eyes on the armed bird?',
];

let obj = {
	fibonacci: [],
	caesar: [],
};

for (let i = 0; i < 10; i++) {
	let fib = fibEncrypt(fibQuestionArr[i].toLowerCase());
	let cae = caesarShift(caesarQuestionArr[i].toLowerCase(), 7);
	obj.fibonacci.push({
		answer: fibQuestionArr[i].toLowerCase(),
		question: fib,
	});
	obj.caesar.push({
		answer: caesarQuestionArr[i].toLowerCase(),
		question: cae,
	});
}

fs.writeFileSync('./data.json', JSON.stringify(obj));
