#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greetUser, generateRandomNumberInRange, generateOperator, generateEquation, solveEquation} from './index.js';

const brainCalc = () => {
  console.log('What is the result of the following expression?');
  let iteration = 0;
  while (iteration < 3) {
    const equation = generateEquation();
    const userAnswer = readlineSync.question(`Calculate ${equation} --> `);
    if (Number(userAnswer) === solveEquation(equation)) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${solveEquation(equation)} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};

greetUser()
brainCalc();
