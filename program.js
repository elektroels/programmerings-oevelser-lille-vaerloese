// setup canvas

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// TODO: Lav det her dynamisk så det følger hvis man re-sizer vinduet =)
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

// function til at generere et tilfaeldigt tal/nummer
function random(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

/* Definer hvad en bold er */
function Bold(color) {
  // Størrelse
  this.size = random(5, 20)

  // Placering
  // ball position always draw at least one ball width
  // away from the edge of the canvas, to avoid tegning errors
  this.x = random(0 + this.size, width - this.size),
  this.y = random(0 + this.size, height - this.size),

  // Hastighed
  this.velX = random(2, 8)  // Random mellem 2 tal > nej bevægelses-visning
  this.velY = random(2, 8)  // Random mellem 2 tal > nej bevægelses-visning

  // Farve
  this.color = color
}

Bold.prototype.draw = function() {
  ctx.beginPath()
  ctx.fillStyle = this.color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.fill()
}

Bold.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX)
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX)
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY)
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY)
  }

  this.x += this.velX
  this.y += this.velY

  this.draw()
}

let balls = []

while (balls.length < 5) {
  let size = random(10,20)
  let ball = new Bold('rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')')

  balls.push(ball)
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
  ctx.fillRect(0, 0, width, height)

  for (let i = 0; i < balls.length; i++) {
    balls[i].update()
  }

  requestAnimationFrame(loop)
}

//loop()
