
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here

document.addEventListener(`keydown`, e => {

	if (e.code == `KeyW` || e.code == `ArrowUp`) {
		y -=10 ;
drawCircle(x, y, size);
	} else if (e.code == `KeyS` || e.code == `ArrowDown`) {
		y+=10;
drawCircle(x, y, size);
	} else if (e.code == `KeyA` || e.code == `ArrowLeft`) {
		x -= 10;
drawCircle(x, y, size);
	} else if (e.code == `KeyD` || e.code == `ArrowRight`) {
		x += 10;
drawCircle(x, y, size);
	}

});

    



const buttonBar = document.querySelector('.button-bar');

// Add your code here
function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

buttonBar.addEventListener('click', event => event.target.style.backgroundColor = bgChange());
