#!/usr/bin/env node
import { greetUser, explainRules } from '../utils/utils.js';

console.log('Welcome to the Brain Games!');
const askForName = greetUser();
console.log(`Hello, ${askForName}!`);
explainRules();
