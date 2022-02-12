// exercicio 1 - arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// exercicio 2 - arrays
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// exercicio 3 - arrays
menu.push('Contato');

console.log(menu);

// exercicio 1 - for
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

// exercicio 1 - for/of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}
