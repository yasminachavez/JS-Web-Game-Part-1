// function tile(url, left, bottom, width, height){
//     for(let h = 0; h < height; h++){
//         for(let w = 0; w < width; w++){
//             newImage(url, left + w*100, bottom+h*100)
//         }
//     }
// }
// let horizon = window.innerHeight / 1.75
// let heightOfSky = window.innerHeight-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

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


// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })


function newItem(i, x, y) {
let newItem = document.createElement('img')
newItem.src = (i)
newItem.style.position = 'fixed'
newItem.style.left = (x)
newItem.style.bottom = (y)
document.body.append(newItem)

newItem.addEventListener('dblclick', function(){
    newItem.remove()
})
}
newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')



