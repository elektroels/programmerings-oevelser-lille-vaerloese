// Øvelse 5: loop/gentag vores opdatering "uendeligt"
// Her en funktion der kører i cirkler (uendeligt), og inde i den
// Bliver vores bolde opdateret. Nu skal vi bruge den for at starte loop'et.

function loop() {
  //bolde.forEach(bold => bold.update())

  // Det her er lidt "sort magi", i er velkomne til at spørge
  // men det kan godt være jeg ikke kan finde ud af at forklare det :-)
  requestAnimationFrame(loop)
}

loop()
