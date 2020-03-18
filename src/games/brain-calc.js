#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetUser,
  askForName,
  sayHello,
  generateRandomEquation as generateEquation,
  solveEquation as findSolution,
} from '../index.js';

const launchBrainGame = (rules, equation = generateEquation(), solution = findSolution(equation)) => {
  console.log(rules);
  let iteration = 0;
  while (iteration < 3) {
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      equation = generateEquation();
      solution = findSolution(equation);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${solution} \nLet's try it again, ${askForName}!\n`);
      break;
    }
  }
};

greetUser;
sayHello(askForName);
launchBrainGame('What is the result of the following expression?');
