#!/usr/bin/env node
import greetUser from '../utils/greeting.js';
import explainRules from '../utils/game-instructions.js';

console.log('Welcome to the Brain Games!');
const askForName = greetUser();
console.log(`Hello, ${askForName}!`);
explainRules();
