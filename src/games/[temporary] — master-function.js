var readlineSync = require('readline-sync');

const askForName = 'Bob';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const generateEquation = () => {
  return generateRandomNumberInRange(1, 100);
};

const findSolution = (eq) => {
  const equation = eq;
  if (equation % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

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


launchBrainGame('play');
