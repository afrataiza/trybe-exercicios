let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 3
let numMult = [];
let multNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    numMult.push(multNumber * numbers[index]);
    multNumber = numbers[index];
}
console.log(numMult);

// exercicio 1
let numOrdenate = numbers.sort((x, y) => x - y);
console.log(numOrdenate);

// exercicio 2
numOrdenate = numbers.reverse();
console.log(numOrdenate);
