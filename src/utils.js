// задание рандомого числа от 1-100
export const getRandomNumber = () => {
  const a = Math.round(Math.random() * 100);
  return a;
};

// задание рандомого числа nго порядка
// задать n=10 числа от 1-10, задать n=100 от 1-100
export const getRandomNumberNdimemsion = (n) => {
  const a = Math.round(Math.random() * n);
  return a;
};

// ф-я , которая возвращает рандомный номер элемента массива
export const randomPlaceArray = (array) => {
  const p = Math.floor(Math.random() * (array.length));
  return p;
};
