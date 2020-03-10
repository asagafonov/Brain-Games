import readlineSync from 'readline-sync';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const askWhetherIsEven = () => {
  let randomNumber = generateRandomNumber();
  if (randomNumber % 2 === 0) {
    if (readlineSync.keyInYN(`Question: ${randomNumber}`)) {
      console.log('Your answer is "yes" \nCorrect!');
      return true;
    } else {
      console.log(`Your answer is "no" \n"no" is the wrong answer ;(. Correct answer was "yes" \nLet's try it again, ${askForName}!`);
      return false;
    }
  } else if (randomNumber % 2 !== 0) {
    if (readlineSync.keyInYN(`Question: ${randomNumber}`)) {
      console.log(`Your answer is "yes" \n"yes" is the wrong answer ;(. Correct answer was "no" \nLet's try it again, ${askForName}!`);
      return false;
    } else {
      console.log('Your answer is "no" \nCorrect!');
      return true;
    }
  }
};

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let iteration = 0;
  while (iteration < 3) {
    const question = askWhetherIsEven();
    if (question === true) {
      iteration += 1;
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}!`);
      }
    } else if (question === false) {
      break;
    }
  }
};

export default brainEven;
