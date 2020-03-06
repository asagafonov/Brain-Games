#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");
const askForName = readlineSync.question('May I have your name? ');
const greetUser = console.log(`Hello, ${askForName}!`)

greetUser;
