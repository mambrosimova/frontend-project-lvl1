import readlineSync from 'readline-sync';
import {greeting, randomnumber,randomoper, check} from '../src/index.js';

export const calc =() => {

//запустили функцию приветствия
let name=greeting(); 

// вопрос игры 
console.log ( 'What is the result of the expression?');

//цикл игры:    
// получить вопрос и ответ правильный ( 2 перемнных)
//задать вопрос и получить ответ игрока
//сравнение ответов 

let n=2; // 
for (let i=0; i<=n ; i++) {
// получить вопрос и ответ правильный ( 2 перемнных)
let RN1= randomnumber();
let RN2=randomnumber();
let RO = randomoper();//переменная, в которой лежит рандомный знак
let rightanswer=RN1+RO+RN2;
console.log (RN1, RN2, rightanswer, RO);

//задать вопрос и получить ответ игрока
console.log('Question'+':'+RN1+ RO+RN2);
const answer = readlineSync.question('Your answer ' +':');

//сравнение ответов
if (rightanswer == answer) {
    console. log ( 'Correct!');
} else {
console.log (answer +' is wrong answer ;(. Correct answer was ' + rightanswer);
console.log ('Let us try again,' + name+'!');
return;
}


}// конец цикла 

console.log ('Congratulations,'+ name+ '!');


}// конец основной функции calc