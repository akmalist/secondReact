import { fruits } from './foods';
import { choice, remove } from './helpers';

const myFruits = fruits;
const makeChoice = choice;
const removeFruit = remove;

console.log("I'd like one " + makeChoice(myFruits) + ', please');
console.log('Here you go: ' + makeChoice(myFruits));
console.log('Delicious! May I have another?');
removeFruit(myFruits, makeChoice);
console.log("I'm sorry, we are all out. We have " + myFruits.length + ' left');
