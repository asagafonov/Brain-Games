#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetUser, askForName, sayHello, getTwoNumbers as generateEquation, getAnswer as findSolution, launchBrainGame,
} from '../index.js';

greetUser;
sayHello(askForName);
launchBrainGame('Find the greatest common divisor of the given numbers.')
