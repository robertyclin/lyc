const p = document.querySelector('p');
// p.style.color = 'blue'
// p.className += ' p-blue';
document.styleSheets[0].insertRule('.blue { color: gray }', 0);