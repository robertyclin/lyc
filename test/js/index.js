const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  worker.postMessage('hello');
  const className = btn.className.split(' ');
  if (className[1] === 'content-red') {
    className[1] = 'content-blue';
  } else {
    className[1] = 'content-red';
  }
  btn.className = className.join(' ');
  window.requestAnimationFrame(step)

  window.requestIdleCallback(step1);
})

let i = 0;
function step () {
  console.log(i)
  i = i + 1;
  window.requestAnimationFrame(step);
  const promise = Promise.resolve('im step promise')
  promise.then((value) => {
    console.log(value);
  })
}

function step1() {
  console.log(2)
}

const worker = new Worker('./js/worker.js');

worker.onmessage = function (event) {
  let b = 0;
  for (let i = 0; i < 100000; i++) {
    b = i;
  }
  const promise = Promise.resolve('im worker promise')
  promise.then((value) => {
    console.log(value);
  })
  console.log('Received message ' + event.data);
}
