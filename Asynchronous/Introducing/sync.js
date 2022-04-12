// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   let myDate;
//   for(let i = 0; i < 10000000; i++) {
//     let date = new Date();
//     myDate = date
//   }

//   console.log(myDate);

//   let pElem = document.createElement('p');
//   pElem.textContent = 'This is a newly-added paragraph.';
//   document.body.appendChild(pElem);
// });

const fillBtn = document.getElementById('fill');
const alertBtn = document.getElementById('alert');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function expensiveOperation() {
  for(let i = 0; i < 1000000; i++) {
    ctx.fillStyle = 'rgba(0,0,255, 0.2)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
    ctx.fill()
  }
}

function degToRad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

fillBtn.addEventListener('click', expensiveOperation);

alertBtn.addEventListener('click', () =>
  alert('You clicked me!')
);

// 一つ目のボタン(Fill canvas)を押してすぐに２つ目の(alert)ボタンを押しても1つ目のボタンの処理が終わるまで２つ目の処理はブロックされる。