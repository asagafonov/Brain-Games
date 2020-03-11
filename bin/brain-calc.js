import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomNumberInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const operatorIndex = () => generateRandomNumberInRange(1, 4);

const generateOperator = () => {
  const operatorInd = operatorIndex();
  if (operatorInd === 1) {
    return '+';
  } if (operatorInd === 2) {
    return '-';
  } else {
    return '*';
  }
};

const generateEquation = () => {
  const firstOperand = generateRandomNumber();
  const secondOperand = generateRandomNumber();
  const operator = generateOperator();
  return `${firstOperand} ${operator} ${secondOperand}`;
};

const solveEquation = () => {
  const equation = generateEquation();
  const eqArray = equation.split(' ');
  if (eqArray[1] === '+') {
    return eqArray[0] + eqArray[2];
  } if (eqArray[1] === '-') {
    return eqArray[0] - eqArray[2];
  } if (eqArray[1] === '*') {
    return eqArray[0] * eqArray[2];
  }
};

const brainCalc = () => {
  console.log('What is the result of the following expression?');
  let iteration = 0;
  while (iteration < 3) {
    const equationFormula = generateEquation();


  }
};

export default brainCalc;
