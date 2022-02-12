/* eslint-disable no-restricted-syntax */
// exercicio 1
let fat = 10;
for (let index = 9; index >= 1; index -= 1) {
  fat *= index;
}
console.log(fat);

// exrcico 2
let word = 'afra taíza';
let invertWord = word.split('').reverse().join('');
console.log(invertWord);

// exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maxWord = '';
let minWord = array[0];
for (let item of array) {
  if (maxWord.length < item.length) {
    maxWord = item;
  } else if (minWord.length > item.length) {
    minWord = item;
  }
}
console.log(maxWord);
console.log(minWord);

// exercicio 4
let cousinNumber = 0;
for (let index = 1; index <= 100; index += 1) {
  if (index > 3 && index % 2 > 0 && index % 3 > 0 && index % 5 > 0 && index % 7 > 0) {
    if (cousinNumber < index) {
      cousinNumber = index;
    }
  }
}console.log(cousinNumber);
