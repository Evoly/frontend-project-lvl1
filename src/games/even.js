import getRandom from '../utils';
import makeGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const roundQuestion = getRandom(1, 50);
  const rightAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, rightAnswer];
};

export default () => makeGame(gameDescription, generateRound);
