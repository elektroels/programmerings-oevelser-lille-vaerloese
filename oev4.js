// øvelse 4

// Forrige: Loop en bold så det ligner bevægelse

// Den her: En liste af bolde
// Næste: Dernæst loop + requestAnimationFrame sådan at vi kan lave flere streger
// Næste næste: Dernæst den sorte baggrund sådan at det ligner bolde

let bolde = []

bolde.push(new Bold('red'))
bolde.push(new Bold('blue'))
bolde.push(new Bold('green'))
bolde.push(new Bold('yellow'))
bolde.push(new Bold('black'))


bolde.forEach(bold => bold.update())
bolde.forEach(bold => bold.update())
bolde.forEach(bold => bold.update())
bolde.forEach(bold => bold.update())
