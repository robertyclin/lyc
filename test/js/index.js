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
  //window.requestAnimationFrame(step);
  new Promise().resolve(() => {
    console.log('im step promise');
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
  new Promise().resolve(() => {
    console.log('im worker promise');
  })
  console.log('Received message ' + event.data);
}
