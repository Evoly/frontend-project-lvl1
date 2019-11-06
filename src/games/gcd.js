import { getRandom, engine } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const divisor = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  const c = (a > b) ? b : a;
  const d = (a > b) ? (a % b) : (b % a);
  return divisor(c, d);
};

const game = () => {
  const questionNumberOne = getRandom(1, 50);
  const questionNumberTwo = getRandom(1, 50);
  const question = `Question: ${questionNumberOne} ${questionNumberTwo}`;
  console.log(question);
  const div = divisor(questionNumberOne, questionNumberTwo);
  return div.toString();
};

export default () => engine(rules, game);
