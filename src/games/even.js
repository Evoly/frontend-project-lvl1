import { getRandom, engine } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const game = () => {
  const roundQuestion = getRandom(1, 50);
  const rightAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, rightAnswer];
};

export default () => engine(rules, game);
