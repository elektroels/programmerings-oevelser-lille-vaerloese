// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// TODO: Lav det her dynamisk så det følger hvis man re-sizer vinduet =)
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function til at generere et tilfaeldigt tal/nummer
function random(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

/* Definer hvad en bold er */
function Bold(x, y, velX, velY, color, size) {
  this.x = x;       // Random ? > nej koordinat system
  this.y = y;       // Random ? > nej koordinat system
  this.velX = velX; // Random mellem 2 tal > nej bevægelses-visning
  this.velY = velY; // Random mellem 2 tal > nej bevægelses-visning
  this.color = color; // Rando
  this.size = size;
}

Bold.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Bold.prototype.update = function() {
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

  this.draw()
}

/* ØVELSE 1 */
//let testBold = new Bold(50, 100, 4, 4, 'blue', 10);
//testBold.draw()


/* ØVELSE SIDST */
let balls = [];

while (balls.length < 5) {
  let size = random(10,20);
  let ball = new Bold(
    // ball position always draw at least one ball width
    // away from the edge of the canvas, to avoid tegning errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    //balls[i].draw()
    balls[i].update()
  }

  requestAnimationFrame(loop);
}

//loop();
