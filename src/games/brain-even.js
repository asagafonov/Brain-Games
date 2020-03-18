#!/usr/bin/env node
import {
  greetUser, askForName, sayHello, generateRandomNumberInRange, generateNumber as generateEquation, isEven as findSolution, launchBrainGame,
} from '../index.js';

greetUser;
sayHello(askForName);
launchBrainGame('Answer "yes" if the number is even, otherwise answer "no".');
