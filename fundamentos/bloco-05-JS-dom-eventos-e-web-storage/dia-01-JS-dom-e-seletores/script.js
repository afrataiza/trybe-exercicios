let title = (document.getElementById('page-title'));
title.innerText = '10 Coisas Que Odeio Em Você';
title.style.color = 'red';

// let paragraph = document.getElementById('second-paragraph');
//paragraph.innerText = 'Ano do Filme: 1999';

// let subtitle = document.getElementById('subtitle');
// subtitle.innerText = 'informações do filme';

let paragraphClass = document.getElementsByClassName('paragraph');

paragraphClass[1].innerText = 'Ano do Filme: 1999';

let colorSubtitle = document.getElementsByTagName('h4');
colorSubtitle[0].style.color = 'green';