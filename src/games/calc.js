import * as common from '..';

const calc = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log('something went wrong');
  }
  return result;
};

const game = (n, name) => {
  if (n < 1) {
    common.endGame();
    return;
  }
  const numOne = common.getRandom(1, 50);
  const numTwo = common.getRandom(1, 50);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[common.getRandom(0, operators.length - 1)];
  const question = `Question: ${numOne} ${randomOperator} ${numTwo}`;
  console.log(question);
  const answer = parseInt(common.getAnswer(), 10);
  const rightAnswer = calc(numOne, numTwo, randomOperator);
  const result = (answer === rightAnswer) ? 1 : 0;
  if (result < 1) {
    common.wrongAnswer(answer, rightAnswer);
    return;
  }
  common.rightAnswer();
  /*eslint-disable */
  return game(n - 1, name); // QUESTION: linter ?
  /* eslint-enable */
};

const startGame = () => {
  const rules = 'What is the result of the expression?\n';
  common.sayHello(rules);
  game(common.numberOfTry);
};

export default startGame;
