import readlineSync from 'readline-sync';

const greetUser = console.log('\nWelcome to the Brain Games!');
const askForName = readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!`);

const runEngine = (rules, arr) => {
  greetUser;
  askForName;
  sayHello(askForName);
  console.log(rules);
  const array = [...arr];
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    const equation = array[i][0];
    const solution = array[i][1];
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      console.log(`Your answer is "${userAnswer}" \nCorrect!`);
      if (i === length - 1) {
        return console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      return console.log(`Your answer is "${userAnswer}" \n"${userAnswer}" is the wrong answer ;(. Correct answer was "${solution}" \nLet's try it again, ${askForName}!\n`);
    }
  }
};

export default runEngine;

export {
  greetUser, askForName, sayHello,
}
