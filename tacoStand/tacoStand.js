function createIngredient(name, price) {
    var ingredient = {
        name: name || 'unknown',
        price: price || 0.00
    }
    return ingredient
}

function createTaco(name, ingredients) {
    var taco = {
        name: name || 'custom',
        ingredients: ingredients || []
    }
    return taco
}

function addIngredientToTaco(tacoObj, ingredientObj) {
    tacoObj.ingredients.push(ingredientObj)
    return tacoObj
}

function calculatePrice(tacoObj) {
    var price = 0
    for (var i = 0; i < tacoObj.ingredients.length; i++) {
        price += tacoObj.ingredients[i].price
    }
    return price
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
