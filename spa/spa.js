function createCustomer(name, bill, bookings) {
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings || []
  }
  return customer
}

function greeting(customerObj) {
  if (customerObj.bookings.length > 0) {
  return `${customerObj.name}! Welcome back to Happy Spa`
  }
  return `${customerObj.name}! Welcome to Happy Spa`
}

function createService(name, cost) {
  if (name === undefined || cost === undefined) {
    return `Please provide service name and cost.`
  }
  var service = {
    name: name,
    cost: cost
  }
  return service
}

function bookServices(customerObj, serviceObj) {
  customerObj.bookings.push(serviceObj.name)
  customerObj.bill += serviceObj.cost
  return customerObj
}

function applyGiftCard(allServicesArr, giftCard) {
  var affordableServices = []
  for (var i = 0; i < allServicesArr.length; i++) {
    if (allServicesArr[i].price <= giftCard) {
      affordableServices.push(allServicesArr[i].name)
    }
  }
  return affordableServices
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
