// файл для записи общей логики всех игр

import readlineSync from 'readline-sync';
// приветствие, имя, приветствие с именем
//
export const greeting= () =>{
    // приветствие
    console.log ("Welcome to the Brain Games!");
    //знакомство
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
}

//задание рандомого числа
export const randomnumber = ()=>{
let a = Math.round(Math.random()*100);
return a;
}  

//задание рандомой мат операции
export const randomoper =() => {
 const oper = ['+' , '-', '*'];//задание массива операций
let RO = oper[Math.floor(Math.random() * (oper.length-0+1))];
return RO;

}

//функция провертки ответа на правильности
export const check= (a, b) =>{
if (a == b) {
    console. log ( 'Correct!');
} else {
console.log (b +' is wrong answer ;(. Correct answer was ' + a);
//console.log ('Let us try again,' + name+'!');
return;
}
}