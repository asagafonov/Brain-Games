#!/usr/bin/env node

console.log("Welcome to the Brain Games!");

const readlineSync = require('readline-sync');
const askForName = readlineSync.question('May I have your name? ');
const greetUser = console.log(`Hello, ${askForName}!`)

greetUser;
