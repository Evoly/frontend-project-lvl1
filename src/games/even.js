import { getRandom, engine } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => {
  if (num % 2 !== 0) return false;
  return true;
};

const game = () => {
  const number = getRandom(1, 50);
  console.log(`Question: ${number}`);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

export default () => engine(rules, game);
