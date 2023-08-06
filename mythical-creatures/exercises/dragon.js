function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true 
  }
  return dragon
}

function greetRider(dragonObj) {
  return `Hi, ${dragonObj.rider}!`
}

function eat(dragonObj) {
  dragonObj.timesEaten++
  if (dragonObj.timesEaten >= 3) {
    dragonObj.hungry = false
  }

  return dragonObj
}

function findFireBreathers(dragonsArr) {
  var fireBreathers = []
  for (var i = 0; i < dragonsArr.length; i++) {
    if(dragonsArr[i].temperment === 'aggressive') {
    fireBreathers.push(dragonsArr[i])
    }
  }
  return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}