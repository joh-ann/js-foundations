function createMeal(type, calorieGoal) {
    var meal = {
        type: type,
        calorieGoal,
        dishes: []
    }
    return meal
}

function addDish(mealObj, dish) {
    if (dish.calories < mealObj.calorieGoal) {
    mealObj.dishes.push(dish)
    mealObj.calorieGoal -= dish.calories
    }
    return mealObj
}

function calculateCalories(mealObj) {
    var totalCalories = 0
    for (var i = 0; i < mealObj.dishes.length; i++) {
        totalCalories += mealObj.dishes[i].calories
    }
    return `${mealObj.type} has a total of ${totalCalories} calories.`
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories
}