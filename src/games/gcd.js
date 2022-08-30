import runLogic from '../index.js';
import { getRandomNumber } from '../utils.js';

// функция для определения НОД
// eslint-disable-next-line no-restricted-syntax
const calcGCD = (number1, number2) => {
  let min;
  let max;
  if (number1 > number2) {
    min = number2;
    max = number1;
  } else {
    min = number1;
    max = number2;
  }
  if (min === 0) {
    return max;
  }
  for (let GCD = min; GCD >= 1; GCD -= 1) {
    if (max % GCD === 0 && min % GCD === 0) {
      return GCD;
    }
  }
  return null;
};

// функция получения массива раундов
const getRounds = () => {
  const rounds = [];// задали пустой массив для 3х раундов
  const n = 3;
  for (let i = 1; i <= n; i += 1) {
    const round = [];// свободный массив для одного раунда [question, rightAnswer]
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const rightAnswer = calcGCD(number1, number2);// правильный ответ
    const stringrightAnswer = String(rightAnswer);

    const question = (`${number1} ${number2}`);// ответ

    round[0] = question;
    round[1] = stringrightAnswer;
    rounds.push(round);
  }// end of cycle
  return rounds;
};// end getRounds

const getGreatestCommonDevision = () => {
  const discription = 'Find the greatest common divisor of given numbers';
  runLogic(discription, getRounds());
};
export default getGreatestCommonDevision;
