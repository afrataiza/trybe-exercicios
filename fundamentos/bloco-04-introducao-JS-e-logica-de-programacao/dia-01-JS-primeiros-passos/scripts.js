/* eslint-disable no-console */
const myName = 'Afra Taíza';
const birthCity = 'Aracaju';
let birthYear = 1986;
let birthMonth = 4;
let actualYear = 2022;
let date = new Date();
let actualMonth = date.getMonth() + 1;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
if (birthMonth < actualMonth) {
  console.log('Você tem', actualYear - birthYear, 'anos!');
} else {
  console.log('Você tem', actualYear - birthYear - 1, 'anos!');
}

