function createItemStock(name, quantity, price) {
    var item = {
        name: name || 'unknown',
        quantity: quantity || 0,
        price: price || 1.00
    }
    return item
}

function makePurchase(itemObj, money) {
    if (itemObj.quantity <= 0) {
        return `Sorry, there are none left`
    }
    if (money < itemObj.price) {
        return `Sorry, you need at least $${itemObj.price} to make that purchase`
    }
    return `Here are your ${itemObj.name}`
}

function collectChange(looseChange) {
    total = 0
    for (var i = 0; i < looseChange.length; i++) {
        total += looseChange[i]
    }
    return total
}

module.exports = {
    createItemStock,
    collectChange,
    makePurchase
}
