// файл для записи общей логики всех игр

import readlineSync from 'readline-sync';
//import {discription, getrounds} from '../games/calc.js';

// приветствие, имя, приветствие с именем

export const runLogic= (discription, rounds) =>{
    // приветствие
    console.log ("Welcome to the Brain Games!");
    //знакомство
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    // вопрос(описание)  игры 
    console.log (discription);

for (const [question, rightAnswer] of rounds) {
//задать вопрос и получить ответ игрока
console.log('Question'+':'+ question);
const answer = readlineSync.question('Your answer ' +':');

//сравнение ответов
if (rightAnswer != answer) {
    console.log (answer +' is wrong answer ;(. Correct answer was ' + rightAnswer);
    console.log ('Let us try again,' + name+'!');
return;
}
console. log ( 'Correct!');


}// конец цикла 

console.log ('Congratulations,'+ name+ '!');

}
