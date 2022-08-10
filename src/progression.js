import readlineSync from 'readline-sync';
import {greeting,getprogression, randplacearray } from '../src/index.js';

export const progression = () => {
//запустили функцию приветствия
let name=greeting(); 
// вопрос игры 
console.log ('What number is missing in the progression?');

//цикл игры:    
let n=2; 
for (let i=0; i<=n ; i++) {

// получить правильный ответ
const progression=getprogression();//наша прогрессия в массиве
const randplace= randplacearray (progression);//рандомное i в этой прогрессии
//console.log (progression);
//console.log (randplace);
 let rightanswer=progression[randplace];//правильный ответ
 //console.log (rightanswer);

 const question = progression;
 question[randplace]='...';//ряд с пропусками


//задать вопрос и получить ответ игрока
console.log('Question'+':'+question);
const answer = readlineSync.question('Your answer ' +':');

//сравнение ответов
if (rightanswer == answer) {
    console. log ( 'Correct!');
} else {
console.log (answer +' is wrong answer ;(. Correct answer was ' + rightanswer);
console.log ('Let us try again,' + name+'!');
return;
}

}//end of cycle 

console.log ('Congratulations,'+ name+ '!');
}// end of main function 