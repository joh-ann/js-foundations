function createElevator(building, floors, currentFloor, passengers) {
    var elevator = {
        building: building,
        floors: floors,
        currentFloor: currentFloor,
        passengers: passengers
    }
    return elevator
}

function changeFloors(elevatorObj, floor) {
    if (elevatorObj.currentFloor === floor) {
        return `You're already on floor ${floor}!`
    }
    if (elevatorObj.floors < floor) {
        return `Floor ${floor} does not exist!`
    }
    elevatorObj.currentFloor = floor
    return `Taking you to floor ${floor}!`
}

function dropOffPassenger(elevatorObj, passenger) {
    var remainingPassengers = []
    for (var i = 0; i < elevatorObj.passengers.length; i++) {
        if (elevatorObj.passengers[i] !== passenger) {
            remainingPassengers.push(elevatorObj.passengers[i])
        }
    }
    return remainingPassengers
}

module.exports = {
    createElevator,
    changeFloors,
    dropOffPassenger
};
