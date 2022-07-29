import readlineSync from 'readline-sync';
// приветствие
export const Greating= () => {
    console.log ("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}
// вопрос про число