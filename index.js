const returnFirstTwoDrivers = (arraysOfDrivers) => {
  let firstDrivers = arraysOfDrivers.slice(0,2)
  return firstDrivers
};


const returnLastTwoDrivers = function(arraysOfDrivers){
  let lastDrivers = arraysOfDrivers.slice(-2)
  return lastDrivers
};


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];


function createFareMultiplier(number){
  return function fairMultiplier(fare){
    return number * fare
  }
  return fairMultiplier()
};


const fareDoubler = fare => createFareMultiplier(1)(fare) * 2

const fareTripler = fare => createFareMultiplier(1)(fare) * 3



function selectDifferentDrivers(arraysOfDrivers, driversFunction){
  return driversFunction(arraysOfDrivers)
}

