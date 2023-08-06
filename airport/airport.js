function createAirport(name, airlines, availableGates) {
  var airport = {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
    message: ''
  }
  return airport
}

function welcomeGuests(airportObj) {
  return `Welcome to ${airportObj.name}!`
}

function landPlanes(airportObj, planes) {
  var updatedGates = airportObj.availableGates -= planes;
  var overflow = Math.abs(airportObj.availableGates)
  if (updatedGates > 0) {
  airportObj.message = `Success! Current availability is ${updatedGates}.`
  } else {
  airportObj.availableGates = 0
  airportObj.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
  return airportObj
}

function checkAirlineLocations(allAirports, airline) {
  carriers = []
  for (var i = 0; i < allAirports.length; i++) {
    console.log(allAirports)
    if (allAirports[i].airlines.includes(airline)) {
      carriers.push(allAirports[i].name)
    }
  }
  return carriers
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
