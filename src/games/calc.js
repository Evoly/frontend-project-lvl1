import { getRandom, engine } from '..';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

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
  const numberOne = getRandom(1, 50);
  const numberTwo = getRandom(1, 50);
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const roundQuestion = `${numberOne} ${randomOperator} ${numberTwo}`;
  const rightAnswer = calc(numberOne, numberTwo, randomOperator);
  return [roundQuestion, rightAnswer.toString()];
};

export default () => engine(rules, game);
