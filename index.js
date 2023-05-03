function newImage(x, a, b) {
    let newImage = document.createElement('img')
    newImage.src = (x)
    newImage.style.position = 'fixed';
    newImage.style.left = (a);
    newImage.style.bottom = (b);
    document.body.append(newImage);
}
newImage('assets/crate.png', '150px','200px')
newImage('assets/well.png', '500px', '425px')
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)


