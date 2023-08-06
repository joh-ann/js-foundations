function createBirthday(name, month, day) {
    var birthday = {
        name: name,
        month: month,
        day: day
    }
    return birthday
}

function celebrateBirthday(birthdayObj) {
    return `Today is ${birthdayObj.month}/${birthdayObj.day}! Happy birthday, ${birthdayObj.name}!`
}

function countBirthdays(birthdayArr, count) {
    var monthCount = 0
    for (var i = 0; i < birthdayArr.length; i++) {
        if (birthdayArr[i].month === count) {
            monthCount++
        }
    }
    return monthCount
}

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays
};