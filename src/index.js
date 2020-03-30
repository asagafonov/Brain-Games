import readlineSync from 'readline-sync';
import greetUser from './utils/greeting.js';

const runEngine = (rules, arr, rounds) => {
  if (arr.length < rounds) {
    console.log('Error. Not enough data to run the game');
    return;
  }
  console.log('Welcome to the Brain Games!');
  const askForName = greetUser();
  console.log(`Hello, ${askForName}!`);
  console.log(rules);
  const array = [...arr];
  for (let i = 0; i < rounds; i += 1) {
    const equation = array[i][0];
    const solution = array[i][1];
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      console.log(`Your answer is "${userAnswer}" \nCorrect!`);
      if (i === rounds - 1) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is "${userAnswer}" \n"${userAnswer}" is the wrong answer ;(. Correct answer was "${solution}" \nLet's try it again, ${askForName}!\n`);
      break;
    }
  }
};

export default runEngine;
