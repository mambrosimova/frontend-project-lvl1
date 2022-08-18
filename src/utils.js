//задание рандомого числа от 1-100
export const getRandomNumber = ()=>{
    let a = Math.round(Math.random()*100);
    return a;
    }  
    
    //задание рандомого числа nго порядка
    export const getRandomNumberNdimemsion = (n)=>{//задать n=10 числа от 1-10, задать n=100 от 1-100
        let a = Math.round(Math.random()*n);
        return a;
        }  