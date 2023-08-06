function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire
}

function encounterDeliciousVictim(vampireObj) {
  if (vampireObj.thirsty === true){
    return `I WANT TO SUCK YOUR BLOOD!`
  }
  return `No thanks, I am too full.`
}

function drink(vampireObj) {
  if (vampireObj.thirsty === true) {
    vampireObj.ouncesDrank += 10
  }
  if (vampireObj.ouncesDrank >= 50) {
    vampireObj.thirsty = false
  }
  return vampireObj
}

function inquirePlace(locationsArr, location) {
  for (var i = 0; i < locationsArr.length; i++) {
    if (locationsArr[i] === location) {
      return `Yes, I have spent some time in ${location}.`
    }
  }
  return `No, I have never been to ${location}.`
}

function findBatLovers(vampiresArr) {
  var batLovers = []
  for (var i = 0; i < vampiresArr.length; i++) {
    if (vampiresArr[i].pet === 'bat') {
      batLovers.push(vampiresArr[i].name)
    }
  }
  return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}