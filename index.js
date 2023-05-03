function newImage(i, x, y) {
    let newImage = document.createElement('img')
    newImage.src = (i)
    newImage.style.position = 'fixed'
    newImage.style.left = (x)
    newImage.style.bottom = (y)
    document.body.append(newImage)
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

function newItem (i, x, y) {
let newItem = document.createElement('img')
newItem.src = (i)
newItem.position = 'fixed'
newItem.left = (x)
newItem.bottom = (y)
document.body.append(newItem)

newItem.addEventListener('click', function(){
    newItem.remove()
})
}
newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
