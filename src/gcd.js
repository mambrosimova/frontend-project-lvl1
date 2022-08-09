import readlineSync from 'readline-sync';
import {greeting,randomnumber,NOK } from '../src/index.js';

export const getGreatestCommonDevision = () => {

//запустили функцию приветствия
let name=greeting(); 
// вопрос игры 
console.log ('Find the greatest common divisor of given numbers');

//цикл игры:    
let n=2; 
for (let i=0; i<=n ; i++) {

let RN1= randomnumber();
let RN2=randomnumber();

// получить правильный ответ
let rightanswer= NOK(RN1, RN2);
//console.log( RN1, RN2, rightanswer);

//задать вопрос и получить ответ игрока
console.log('Question'+':'+ RN1+' '+RN2);
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
