var readlineSync = require('readline-sync');
const askForName = 'Bob';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const isNumberPrime = (num) => {
  const array = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array.length === 2;
};

const generateEquation = () => {
  return generateRandomNumberInRange(1, 100);
};

const eq = generateEquation();

const findSolution = (eq) => {
  const equation = eq;
  if (isNumberPrime(equation)) {
    return 'yes';
  }
  return 'no';
}

const brainPrime = () => {
  console.log('Answer "yes" if the given number is prime. Otherwise answer "no".');
  let iteration = 0;
  while (iteration < 3) {
    const equation = generateEquation();
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === findSolution(equation)) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${findSolution(equation)} \nLet's try it again, ${askForName}!`);
      break;
    }
  }
};

brainPrime();
