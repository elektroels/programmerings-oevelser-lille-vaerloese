// øvelse 3

// Her har jeg defineret 2 funktioner, den ene hedder sleep() og den anden hedder move()
// move skal flytte vores bold, og sleep skal vente lidt mellem hvert flyt
// så vores øjne kan nå at opfatte bevægelsen

function sleep(s) {
  const ms = s * 1000
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function move() {
  // Ligesom før, prøv nu at skrive følgende 2 linier
  // en 10-100 gange :D
  // det er vigtigt at i skriver det inde i move() { her inde }

  // Her inde!
  //bold.update()
  //await sleep(1)


  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)
  bold.update()
  await sleep(1)

}

move()
