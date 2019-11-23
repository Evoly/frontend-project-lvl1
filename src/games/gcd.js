import getRandom from '../utils';
import makeGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  return findGcd(b, a % b);
};

const generateRound = () => {
  const operand1 = getRandom(1, 50);
  const operand2 = getRandom(1, 50);
  const roundQuestion = `${operand1} ${operand2}`;
  const rightAnswer = findGcd(operand1, operand2);
  return [roundQuestion, rightAnswer.toString()];
};

export default () => makeGame(gameDescription, generateRound);
