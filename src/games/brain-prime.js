#!/usr/bin/env node
import {
  greetUser, sayHello, askForName, generateRandomNumberInRange, isNumberPrime, generateNumber as generateEquation, returnPrimeOrNot as findSolution, launchBrainGame,
} from '../index.js';

greetUser;
sayHello(askForName);
launchBrainGame('Answer "yes" if the given number is prime. Otherwise answer "no".');
