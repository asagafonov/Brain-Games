#!/usr/bin/env node
import {
  greetUser, askForName, sayHello, askWhetherIsEven, launchBrainGame,
} from '../index.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let iteration = 0;
  while (iteration < 3) {
    const question = askWhetherIsEven();
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
brainEven();
