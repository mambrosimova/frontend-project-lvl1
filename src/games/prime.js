import readlineSync from 'readline-sync';
import {greeting,checkprime } from '../index.js';
import {getRandomNumberNdimemsion} from '../utils.js';

export const runPrime = () => {

//запустили функцию приветствия
let name=greeting(); 
// вопрос игры 
console.log ('Answer "yes" if given number is prime. Otherwise answer "no".');

//цикл игры:    
let n=2; 
for (let i=0; i<=n ; i++) {

// получить правильный ответ
let RN=getRandomNumberNdimemsion(100);//задали рандомное число от 1-100
let rightanswer=checkprime(RN);// получили правильный ответ
//console.log(RN, rightanswer);

//задать вопрос и получить ответ игрока
console.log('Question'+':'+RN);
const answer = readlineSync.question('Your answer ' +':');

//сравнение ответов
if (rightanswer == answer) {
    console. log ( 'Correct!');
} else {
console.log (answer +' is wrong answer ;(. Correct answer was ' + rightanswer);
console.log ('Let us try again,' + name+'!');
return;
}

}// end of cycle
console.log ('Congratulations,'+ name+ '!');
}// end of main function
