#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetUser, askForName, sayHello, generateOperator, generateRandomEquation as generateEquation, solveEquation as findSolution, launchBrainGame,
} from '../index.js';

greetUser;
sayHello(askForName);
launchBrainGame('What is the result of the following expression?');
