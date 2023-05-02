function newImage() {
    let newImage = document.createElement('img')
    newImage.src = 'assets/img'
    newImage.style.position = 'fixed';
    newImage.style.left = '300px';
    newImage.style.bottom = '300px';
    document.body.append(newImage);
}

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

newImage()