import generateRandomNumberInRange from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const generateProgression = (starter, difference, length) => {
  const progression = [];
  const maximum = starter + (difference * length);
  for (let i = starter; i < maximum; i += difference) {
    progression.push(i);
  }
  return progression;
};

const getQuestion = (progression, length) => {
  const newProgression = [...progression];
  const hiddenDigitIndex = generateRandomNumberInRange(0, length);
  newProgression[hiddenDigitIndex] = '..';
  return newProgression;
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const starter = generateRandomNumberInRange(1, 100);
    const difference = generateRandomNumberInRange(1, 21);
    const length = 10;
    const progression = generateProgression(starter, difference, length);
    const question = getQuestion(progression, length);
    const questionAsString = question.join(' ');
    const answer = String(progression[question.indexOf('..')]);
    data.push([questionAsString, answer]);
  }
  return data;
};

const description = 'What number is missing in the progression?';
const gameData = generateGameData(numberOfRounds);

const brainProgression = () => runEngine(description, gameData);
export default brainProgression;
