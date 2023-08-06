function createHobbit(name, age) {
  var hobbit = {
    name: name || 'unknown',
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  return hobbit
}

function celebrateBirthday(hobbitObj) {
  hobbitObj.age += 1
  if (hobbitObj.age >= 33) {
    hobbitObj.isAdult = true;
  }
  if (hobbitObj.age >= 101) {
    hobbitObj.isOld = true;
  }
  return hobbitObj
}

function getRing(hobbitObj) {
  if (hobbitObj.name === 'Frodo') {
    return `Here is the ring!`
  }
  return `You can't have it!`
}

function meetPeople(hobbitObj, people) {
  for (var i = 0; i < people.length; i++) {
  hobbitObj.acquaintances.push(people[i])
  }
  return hobbitObj
}

function findFriends(hobbitObj) {
  var friends = []
  for (var i = 0; i < hobbitObj.acquaintances.length; i++) {
    if (hobbitObj.acquaintances[i].relationship === 'friend') {
      friends.push(hobbitObj.acquaintances[i].name)
    }
  }
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}