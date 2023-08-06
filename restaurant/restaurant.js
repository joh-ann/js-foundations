function createMeal(name, specialRequests, tableNumber) {
  var meal = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false
  }
  return meal
}

function getMade(mealObj) {
  mealObj.complete = true
  return mealObj
}

function announceMeal(mealObj) {
  if (mealObj.complete) {
    return `Order up - ${mealObj.name} for table ${mealObj.tableNumber}!`
  }
  return `This ${mealObj.name} is not completed yet`
}

function createOrder(mealObj) {
  var order = {
    tableNumber: mealObj.name,
    meals: mealObj.meals,
    completedMeals: []
  }
  return order
}

function cookMeal(orderObj, mealObj) {
  if (orderObj.tableNumber === mealObj.tableNumber) {
  orderObj.completedMeals.push(mealObj.name)
  }
  return orderObj
}

function listOrders(orderObj) {
  var listOfOrders = []
  for (var i = 0; i < orderObj.meals.length; i++) {
    listOfOrders.push(orderObj.meals[i].name)
  }
  return listOfOrders
}

function listSpecialRequests(orderObj) {
  var specialRequests = []
  for (var i = 0; i < orderObj.meals.length; i++) {
    specialRequests = specialRequests.concat(orderObj.meals[i].specialRequests)
  }
  return specialRequests
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
