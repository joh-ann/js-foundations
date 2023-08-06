function createBarber(name, earnings, haircuts) {
    var barber = {
        name: name,
        earnings: earnings || 0,
        haircuts: haircuts || [],
    }
    return barber
}

function giveCompliment(haircutObj) {
    return `This ${haircutObj.style} looks great!`
}

function cutHair(barberObj, haircutObj) {
    barberObj.haircuts.push(haircutObj)
    var earnings = 0;
    for (var i = 0; i < barberObj.haircuts.length; i++) {
        earnings += barberObj.haircuts[i].price
    }
    barberObj.earnings = earnings
    return barberObj
}

function listStyles(barberObj, length) {
    var stylesArr = []
    for (var i = 0; i < barberObj.haircuts.length; i++) {
        if (barberObj.haircuts[i].hairLength === length) {
            stylesArr.push(barberObj.haircuts[i].style)
        }
    }
    return stylesArr
}

module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};