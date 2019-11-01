import * as common from '..';

const checkEven = (num) => {
  if (num % 2 !== 0) return false;
  return true;
};

const game = (n) => {
  if (n < 1) {
    common.endGame();
    return;
  }
  const num = common.getRandom();
  console.log(`Question: ${num}`);
  const answer = common.getAnswer();
  const even = checkEven(num) ? 'yes' : 'no';
  const result = (answer === even) ? 1 : 0;
  if (result < 1) {
    common.wrongAnswer(answer, even);
    return;
  }
  common.rightAnswer();
  /*eslint-disable */
  return game(n - 1); // QUESTION: linter ?
  /* eslint-enable */
};

const startGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  common.sayHello(rules);
  game(common.numberOfTry);
};

export default startGame;
