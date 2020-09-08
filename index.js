// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers) {
  let firstTwo = arrayOfDrivers.slice(0, 2)
  return firstTwo
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
  let lastTwo = arrayOfDrivers.slice(-2)
  return lastTwo
}

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayOfDrivers, fxn){
  return fxn(arrayOfDrivers)
}