#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greetUser, askForName, sayHello, generateRandomNumberInRange, getTwoNumbers, getAnswer, launchBrainGame} from '../index.js';

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let iteration = 0;
  while (iteration < 3) {
    const equation = getTwoNumbers();
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (Number(userAnswer) === getAnswer(equation)) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${getAnswer(equation)} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};

greetUser;
sayHello(askForName);
brainGCD();
