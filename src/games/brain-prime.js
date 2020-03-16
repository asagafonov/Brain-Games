#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greetUser, sayHello, askForName, generateRandomNumberInRange, isNumberPrime, askWhetherIsPrime, launchBrainGame} from '../index.js';

const brainPrime = () => {
  console.log('Answer "yes" if the given number is prime. Otherwise answer "no".');
  let iteration = 0;
  while (iteration < 3) {
    const question = askWhetherIsPrime();
    if (question === true) {
      iteration += 1;
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else if (question === false) {
      break;
    }
  }
};

greetUser;
sayHello(askForName);
brainPrime();
