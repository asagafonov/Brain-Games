#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetUser,
  askForName,
  sayHello,
  generateNumber as generateEquation,
  isEven as findSolution,
} from '../index.js';



greetUser;
sayHello(askForName);
launchBrainGame('Answer "yes" if the number is even, otherwise answer "no".');
