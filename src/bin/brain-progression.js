import readlineSync from 'readline-sync';
import askForName from './ask-for-name.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const generateProgressionOfTen = () => {
  const array = [];
  const starter = generateRandomNumberInRange(1, 100);
  const difference = generateRandomNumberInRange(1, 11);
  const maximum = starter + (difference * 10);
  for (let i = starter; i < maximum; i += difference) {
    array.push(i);
  }
  return array;
};

const hideDigit = (arr) => {
  let array = [...arr];
  const hiddenDigitIndex = generateRandomNumberInRange(0, 10);
  array[hiddenDigitIndex] = '..';
  return array;
};

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let iteration = 0;
  while (iteration < 3) {
    const progression = generateProgressionOfTen();
    const hiddenProgression = hideDigit(progression);
    const hiddenProgressionToString = hiddenProgression.join(' ');
    const answer = readlineSync.question(`Question: ${hiddenProgressionToString} `);
    const correctAnswer = progression[hiddenProgression.indexOf('..')];
    if (Number(answer) === correctAnswer) {
      iteration += 1;
      console.log(`Your answer is ${answer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${answer} \n${answer} is the wrong answer ;(. Correct answer was ${correctAnswer} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};

export default brainProgression;
