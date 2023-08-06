function createEvent(title, month, day) {
    var event = {
        title: title,
        month: month,
        day: day
    }
    if (event.day === 0 || event.day > 31) {
        return `Error: ${day} is not a valid day`
    }
    return event
}

function createCalendar(owner, events) {
    var calendar = {
        owner: owner,
        events: events
    }
    return calendar
}

function reportMonthlyEvents(calendarObj, month) {
    var monthEvents = []
    for (var i = 0; i < calendarObj.events.length; i++) {
        if (calendarObj.events[i].month === month) {
        monthEvents.push(calendarObj.events[i])
        }
    }
    return monthEvents
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};