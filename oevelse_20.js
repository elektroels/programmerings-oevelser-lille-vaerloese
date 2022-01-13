let balls = [];

while (balls.length < 25) {
  let size = tilfaeldigtNummer(10,20);
  let ball = new Bold(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    tilfaeldigtNummer(0 + size,width - size),
    tilfaeldigtNummer(0 + size,height - size),
    tilfaeldigtNummer(-7,7),
    tilfaeldigtNummer(-7,7),
    'rgb(' + tilfaeldigtNummer(0,255) + ',' + tilfaeldigtNummer(0,255) + ',' + tilfaeldigtNummer(0,255) +')',
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw()
    balls[i].update()
  }

  requestAnimationFrame(loop);
}

loop();
