function createMaterial(name, unit, costPerUnit) {
  var material = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit
  }
  return material
}

function calculateMaterialCost(material, quantity) {
  return `${quantity} ${material.unit}s of ${material.name} costs $${material.costPerUnit * quantity}.`
}

function createSupplyCloset(closetArr) {
  if (closetArr === undefined) {
    var supplyCloset = {
      supplies: []
    }
    return supplyCloset
  }
  var suppliesName = []
  for (var i = 0; i < closetArr.length; i++) {
    suppliesName.push(closetArr[i].name)
  }
  var supplyCloset = {
    supplies: suppliesName
  }
  return supplyCloset
}

function addSupply(supplyClosetObj, materialObj) {
  if (supplyClosetObj.supplies.includes(materialObj.name)) {
    return `You already have fabric in your closet!`
  }
  supplyClosetObj.supplies.push(materialObj.name)
  return supplyClosetObj.supplies
}

function createNewProject(materialsArr, status) {
  var newProject = {
    materialsNeeded: materialsArr,
    status: status || 'not started'
  }
  return newProject
}

function compareMaterials(paintProject, supplyClosetObj) {
  for (var i = 0; i < paintProject.materialsNeeded.length; i++) {
  if (supplyClosetObj.supplies.includes(paintProject.materialsNeeded[i].name)) {
    return `Yay! You can start this project!`
  } else {
    return `Oh no! You need to go shopping before you can start this project!`
    }
  }
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}