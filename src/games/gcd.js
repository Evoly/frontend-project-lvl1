import { getRandom, engine } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const findDivisor = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  return findDivisor(b, a % b);
};

const game = () => {
  const numberOne = getRandom(1, 50);
  const numberTwo = getRandom(1, 50);
  const roundQuestion = `${numberOne} ${numberTwo}`;
  const rightAnswer = findDivisor(numberOne, numberTwo);
  return [roundQuestion, rightAnswer.toString()];
};

export default () => engine(rules, game);
