function createTape(title, readyToPlay) {
    var tape = {
    title: title,
    readyToPlay: readyToPlay || false
    }
    return tape
}

function reset(tapeObj) {
    if (tapeObj.readyToPlay = true) {
        return tapeObj
    }
    tapeObj.readyToPlay = true
    return tapeObj
}

function createCollection(tapeObj1, tapeObj2, tapeObj3) {
    if (tapeObj1 === undefined && tapeObj2 === undefined && tapeObj3 === undefined) {
        return `Your collection is empty.`
    }
    var collection = [tapeObj1, tapeObj2, tapeObj3]
    // var collection = []
    // collection.push(tapeObj1, tapeObj2, tapeObj3)
    return collection
}

function previewCollection(collectionObj) {
    var preview = []
    for (var i = 0; i < collectionObj.length; i++) {
        preview.push(collectionObj[i].title)
    }
    return preview
}

module.exports = {
    createTape,
    reset,
    createCollection,
    previewCollection
}