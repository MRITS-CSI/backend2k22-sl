const fs = require('fs');
const { fibEncrypt } = require('./fiboEncrypt');
const { caesarShift } = require('./caesarCipher');

let fibQuestionArr = [
    'Enemy has been spotted at the west gate, requesting backup.',
    "Requesting backup at North camp, we've been ambushed.",
    "Requesting airlift at north front, 7 survivors.",
    "Critical system failure on Alpha-6, requesting landing.",
    'Enemy tanker has been captured.',
    'Requesting backup, the front-line has been ambushed.',
    'Thermal signatures have been detected at the east gate.',
    'The mid-field barracks have been infiltrated.',
    'We have been shot, retreat to the base camp.',
    'Requesting arms in the North-Camp...I repeat, requesting arms in the North-Camp',
    "Missile launch will occur exactly at noon on the next saturday.",
    "Rations have been shipped to the front lines.",
    "Several incoming planes detected into the western front.",
    "Eastern front cryptographic integrity compromised.",
    "It appears that our enemies have managed to decipher our communications.",
    "New encryption system will be used from midnight. Details will be sent via encrypted post.",
    "The enemy has been spotted at the southern front.",
    "Fighters have been dispatched to enemy position at the southern front.",
    "Reconaissance craft spotted above west camp.",
    "Missile interception system failed on north front."
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
    "Missile interception commencing on the north front.",
    "Enemy craft spotted at the eastern front.",
    "Missile silo access codes regenerated.",
    "Satellite communications disrupted.",
    "North front barricade breached, requesting backup.",
    "Attempt at decrypting enemy communications has failed.",
    "Enemy attempt to decrypt communications. Stay alert.",
    "Central control to Alpha-6, landing granted.",
    "Enemy ship sunk at west beach.",
    "Our generals have been captured. Possible communications breach."
];

let obj = {
    fibonacci: [],
    caesar: [],
};

for (let i = 0; i < 20; i++) {
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