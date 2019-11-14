import { getRandom, makeGame } from '..';

const gameDescription = 'What is the result of the expression?';
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
      return false;
  }
  return result;
};

const generateRound = () => {
  const operand1 = getRandom(1, 50);
  const operand2 = getRandom(1, 50);
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const roundQuestion = `${operand1} ${randomOperator} ${operand2}`;
  const rightAnswer = calc(operand1, operand2, randomOperator);
  return [roundQuestion, rightAnswer.toString()];
};

export default () => makeGame(gameDescription, generateRound);
