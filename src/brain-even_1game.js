import readlineSync from 'readline-sync';
import {Greating} from '../src/cli.js';

//import Math.random from './Math';// нужно ли подключать встроенную библиотеку MAth?

//задание рандомного числа
export let RN = Math.round(Math.random()*100);

//задание вопрос с рандомным числом и ответом да или нет
export const RandomQuestion= (RN) => {
    const Rquestion= readlineSync.question('Question'+':'+RN);
    console.log('Your answer ' +':'+ Rquestion );
    }

// пишу функцию check, которая должна сравнивать ответ и RN и говорить, правда или нет.
export const check = (RN, RandomQuestion) =>{
    let n=2;// кол-во попыток
    for (let i=0 ; i <=n; i++) {
        let RN = Math.round(Math.random()*100);
        console.log (RandomQuestion(RN));
    if (RN % 2 == 0 && RandomQuestion ==='yes' || RN % 2 !== 0 && RandomQuestion ==='no') {
        console.log('Correct!');

    }    else{
            let opposite;
                if (RandomQuestion === 'yes'){
                opposite === 'no';
                } else {
                opposite ==='yes';
                }
    console.log (RandomQuestion +'is wrong answer ;(. Correct answer was'+opposite);
    break ;
    }

}//end cycle
//console.log ('Congratulations,'+ name + '!');
}//end check function