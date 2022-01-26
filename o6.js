// Øvelse 6 + 7: Grafisk trick for at få det til at ligne bolde
// Sort/Grå baggrund for at få det til at ligne bolde på en sort baggrund.

// Prøv at kopier de her 2 linier ud og se hvad der sker :)
//ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
//ctx.fillRect(0, 0, width, height);

// Dernæst putter vi det der tegner grå baggrund ind i loopet

loop = function () {

  //bolde.forEach(bold => bold.update())

  // Det her er lidt "sort magi", i er velkomne til at spørge
  // men det kan godt være jeg ikke kan finde ud af at forklare det :-)
  requestAnimationFrame(loop)
}
