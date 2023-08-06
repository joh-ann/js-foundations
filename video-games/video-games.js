function createPlayer(name, age, moveset) {
    var player = {
        name: name,
        age: age,
        moveset: moveset
    }
    return player
}

function createLevel(name, players) {
    var level = {
        name: name,
        players: players,
        coins: 0,
        lives: 3
    }
    return level
}

function findCoins(levelObj, coins) {
    levelObj.coins += coins
    if (levelObj.coins >= 100) {
        levelObj.lives += 1
    }
    return levelObj
}

function defeatPlayer(levelObj) {
    levelObj.lives -= 1
    if (levelObj.lives === 0) {
        return `GAME OVER`
    }
    return levelObj
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };