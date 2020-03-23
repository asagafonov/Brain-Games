import generateRandomNumberInRange from '../index.js';

const generatePair = () => {
  const number = generateRandomNumberInRange(1, 100);
  if (number % 2 === 0) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

const launchBrainGame = () => {
  let iteration = 0;
  let pair = generatePair();
  while (iteration < 3) {
    const userAnswer = readlineSync.question(`Question: ${pair[0]} `);
    if (userAnswer === pair[1]) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      pair = generatePair();
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${pair[1]} \nLet's try it again, ${askForName}!\n`);
      break;
    }
  }
};
