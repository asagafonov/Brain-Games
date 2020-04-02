import readlineSync from 'readline-sync';
import { greetUser } from './utils/utils.js';

const runEngine = (description, arr, rounds) => {
  if (arr.length < rounds) {
    console.log('Error. Not enough data to run the game');
    return;
  }
  console.log('Welcome to the Brain Games!');
  const askForName = greetUser();
  console.log(`Hello, ${askForName}!`);
  console.log(description);
  const array = [...arr];
  for (let i = 0; i < rounds; i += 1) {
    const [equation, solution] = array[i];
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      console.log(`Your answer is "${userAnswer}" \nCorrect!`);
      if (i === rounds - 1) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is "${userAnswer}"`);
      console.log(`"${userAnswer}" is the wrong answer ;(. Correct answer was "${solution}"`);
      console.log(`Let's try it again, ${askForName}!`);
      break;
    }
  }
};

export default runEngine;
