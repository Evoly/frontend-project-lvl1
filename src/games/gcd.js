import { getRandom, engine } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const findDivisor = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  const c = (a > b) ? b : a;
  const d = (a > b) ? (a % b) : (b % a);
  return findDivisor(c, d);
};

const game = () => {
  const numberOne = getRandom(1, 50);
  const numberTwo = getRandom(1, 50);
  const roundQuestion = `Question: ${numberOne} ${numberTwo}`;
  console.log(roundQuestion);
  const rightAnswer = findDivisor(numberOne, numberTwo);
  return rightAnswer.toString();
};

export default () => engine(rules, game);
