import { getRandom, engine } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => {
  if (num % 2 !== 0) return false;
  return true;
};

const game = () => {
  const questionNumber = getRandom(1, 50);
  console.log(`Question: ${questionNumber}`);
  const even = isEven(questionNumber) ? 'yes' : 'no';
  return even;
};

export default () => engine(rules, game);
