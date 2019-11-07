import { getRandom, engine } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = () => {
  const number = getRandom(1, 50);
  console.log(`Question: ${number}`);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return rightAnswer;
};

export default () => engine(rules, game);
