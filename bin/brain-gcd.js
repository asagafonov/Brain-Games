import readlineSync from 'readline-sync';
import askForName from './ask-for-name.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const getTwoNumbers = () => {
  const firstNumber = generateRandomNumberInRange(1, 100);
  const secondNumber = generateRandomNumberInRange(1, 100);
  const result = `${firstNumber} ${secondNumber}`;
  return result;
};


const getAnswer = (string) => {
  const numArray = string.split(' ');
  let firstNumber = Number(numArray[0]);
  let secondNumber = Number(numArray[1]);
  if (secondNumber > firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  let result;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let iteration = 0;
  while (iteration < 3) {
    const equation = getTwoNumbers();
    const answer = readlineSync.question(`Question: ${equation} `);
    if (Number(answer) === getAnswer(equation)) {
      iteration += 1;
      console.log(`Your answer is ${answer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${answer} \n${answer} is the wrong answer ;(. Correct answer was ${getAnswer(equation)} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};
