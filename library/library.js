function issueCard(name, age, numBooksCheckedOut) {
    var card = {
        name: name,
        age: age,
        numBooksCheckedOut: numBooksCheckedOut || 0,
        isChild: false
    }
    if (card.age < 12) {
        card.isChild = true
    }
    return card
}

function searchByAuthor(collection, author) {
    var book = []
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].author === author) {
            // console.log(collection[i])
            book.push(collection[i])
        }
    }
    if (book.length === 0) {
        return `No book found for search criteria`
    }
    return book
}

module.exports = {
    issueCard,
    searchByAuthor
};