// Parte 1

// Exercicio 1
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu do escopo (else)';
      console.log(elseScope);
    }
}
testingScope(false);

// Exercico 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte 2

// Exercicio 1
const fatorial = (n) => {
  if (n >= 2) {
    let fat = n;
    for (index = 1; index < n; index += 1) {
      fat *= (n - index);
    }
    console.log(`O fatorial de ${n} é ${fat}`);
  } else {
      console.log('Digite um número maior ou igual a 2!');
  }
}   
fatorial(5);

// Exercicio 3
const btnCount = document.getElementById('btn-count');
const labelCount = document.getElementById('label-count');
let clickCount = 0;
btnCount.addEventListener('click', () => {
  clickCount += 1;
  labelCount.innerText = clickCount;
});
