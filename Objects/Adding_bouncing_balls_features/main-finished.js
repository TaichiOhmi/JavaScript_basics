// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {

   constructor(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.exists = true;
   }
}

class Ball extends Shape {

   constructor(x, y, velX, velY, color, size) {
      super(x, y, velX, velY);
      this.color = color;
      this.size = size;
   }
   
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball)) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
         }
      }
   }

}

class EvilCircle extends Shape{

   constructor(x, y){
      super(x, y, 20, 20);
      this.color = 'white';
      this.size = 10;
   }

   draw(){
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
   }

   checkBounds(){
      if ((this.x + this.size) >= width) {
         this.x -= this.size;
      }
   
      if ((this.x - this.size) <= 0) {
         this.x += this.size;
      }
   
      if ((this.y + this.size) >= height) {
         this.y -= this.size;
      }
   
      if ((this.y - this.size) <= 0) {
         this.y += this.size;
      }
   }

   setControl(){
      // _をつけると自動でprivate property
      let _this = this; //この行はスコープの関係で必要
      window.onkeydown = function(e) {
         if (e.key === 'ArrowLeft') {
            _this.x -= _this.velX;
         }
         else if (e.key === 'ArrowRight') {
            _this.x += _this.velX;
         }
         else if (e.key === 'ArrowUp') {
            _this.y -= _this.velY;
         }
         else if (e.key === 'ArrowDown') {
            _this.y += _this.velY;
         }
      }
   }

   collisionDetect(){
      for (const ball of balls) {
         if (ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
   
            if (distance < this.size + ball.size) {
              ball.exists = false;
              ballcount--;
              p.textContent = 'Ball count: ' + ballcount;
            }
         }
      }
   }
}


const balls = [];
let ballcount = 25;

while (balls.length < ballcount) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);
   
   for (const ball of balls) {
      if (!(ball.exists === false)){
         ball.draw();
         ball.update();
         ball.collisionDetect();
      }
      evilCircle.draw();
      evilCircle.checkBounds();
      evilCircle.collisionDetect();
   }
   
   requestAnimationFrame(loop);
}

let p = document.querySelector('p')
p.textContent = 'Ball count: ' + ballcount;

const evilCircle = new EvilCircle(random(0 + random(10,20),width - random(10,20)), random(0 + random(10,20),height - random(10,20)));
evilCircle.setControl();

loop();