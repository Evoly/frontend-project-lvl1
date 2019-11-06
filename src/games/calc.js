import { getRandom, engine } from '..';

const rules = 'What is the result of the expression?\n';

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

const game = () => {
  const numOne = getRandom(1, 50);
  const numTwo = getRandom(1, 50);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const question = `Question: ${numOne} ${randomOperator} ${numTwo}`;
  console.log(question);
  const rightAnswer = calc(numOne, numTwo, randomOperator);
  return rightAnswer.toString();
};

export default () => engine(rules, game);
