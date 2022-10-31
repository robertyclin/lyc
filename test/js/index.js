const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const className = btn.className.split(' ');
  if (className[1] === 'content-red') {
    className[1] = 'content-blue';
  } else {
    className[1] = 'content-red';
  }
  btn.className = className.join(' ');
})


let i = 0;
function step () {
  console.log(i)
  i = i + 1;
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step)