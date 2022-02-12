let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercicio 1
for (let number of numbers) {
    console.log(number);
}

// exercicio 2
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);

// exercicio 3
let med = 0;
med = sum / numbers.length;
console.log(med);

// exercicio 4
if (med > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

// exercicio 5
let numberMax = 0;
for (let number of numbers) {
   if (numberMax < number) {
       numberMax = number;
   }
}
console.log(numberMax);

// exercicio 6
let count = 0;
for (let number of numbers) {
    if (number % 2 > 0) {
       count +=1;
    }
 }
 if (count > 0) {
     console.log(count);
 } else {
     console.log('nenhum valor impar encontrado');
 }

 // exercicio 7
 let numberMin = numbers[0];
for (let number of numbers) {
   if (numberMin > number) {
       numberMin = number;
   }
}
console.log(numberMin);

 // exercicio 8
 let numbersLimit = [];
 for (let index = 1; index <= 25; index += 1) {
     numbersLimit.push(index);
 }
 console.log(numbersLimit);

 // exercicio 8
for (let division of numbersLimit) {
    console.log(division / 2);
}