#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greetUser, sayHello, askForName, generateRandomNumberInRange, generateProgressionOfTen, hideDigit, launchBrainGame} from '../index.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let iteration = 0;
  while (iteration < 3) {
    const progression = generateProgressionOfTen();
    const hiddenProgression = hideDigit(progression);
    const hiddenProgressionToString = hiddenProgression.join(' ');
    const userAnswer = readlineSync.question(`Question: ${hiddenProgressionToString} `);
    const correctAnswer = progression[hiddenProgression.indexOf('..')];
    if (Number(userAnswer) === correctAnswer) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${correctAnswer} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};

greetUser;
sayHello(askForName);
brainProgression();
