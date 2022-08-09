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

//функция получения rightanswer
export const getrightanswer= (n,m) => {
const oper = ['+' , '-', '*'];//задание массива операций
let RO = oper[Math.floor(Math.random() * (oper.length))];
let a;
    if (RO === '+'){
        a=n+m;
    }
    if (RO === '-'){
        a=n-m;
    }
    if (RO === '*'){
       a= n*m;
    }
    return a;
}

// функция получения мат операции для вопроса
export const randomoper =(a,b,rightanswer) => {
    let result;
     if (rightanswer / b === a) {
        result ='*';
     }
     if (rightanswer-b === a) {
       result ='+';
     }
     if (rightanswer+b === a) {
        result='-';
     }
return result;

}
//функция для определения НОД
export const NOK =(a,b) => {
let min;
let max;
    if( a>b){
        min=b;
        max=a;
    } else { 
        min=a ;
        max=b;
    }
for (let i=min; i>=1; i--) {
    if(max%i===0 && min%i===0) {
        return i;
    }
}

}