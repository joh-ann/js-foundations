function createFavoriteFood({dish, ingredients, isSpicy}) {
    var food = {
        name: dish,
        ingredients: ingredients,
        isSpicy: isSpicy,
        timesOrdered: 0
    }
    return food
}

function commentOnSpiciness(dishObj) {
    if (dishObj.isSpicy) {
        return `Wow, this ${dishObj.name} is so spicy!`
    }
    return `Phew, this ${dishObj.name} is not very spicy.`
}

function createShoppingList(dishObjArr) {
    var list = []
    for (var i = 0; i < dishObjArr.length; i++) {
        list = list.concat(dishObjArr[i].ingredients)
    }
    return list
}

function orderFood(dishObj) {
    dishObj.timesOrdered++
    return dishObj
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
 };