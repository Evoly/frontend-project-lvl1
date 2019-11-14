import { getRandom, makeGame } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  return findGcd(b, a % b);
};

const generateRound = () => {
  const numberOne = getRandom(1, 50);
  const numberTwo = getRandom(1, 50);
  const roundQuestion = `${numberOne} ${numberTwo}`;
  const rightAnswer = findGcd(numberOne, numberTwo);
  return [roundQuestion, rightAnswer.toString()];
};

export default () => makeGame(gameDescription, generateRound);
