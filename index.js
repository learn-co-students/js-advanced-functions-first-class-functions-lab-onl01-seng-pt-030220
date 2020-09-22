// Code your solution in this file!


const returnFirstTwoDrivers = function returnDrivers(array){
const newArray = array.slice(0,2)
return newArray
}

const returnLastTwoDrivers = function returnDrivers(array){
    const newArray = array.slice(-2)
    return newArray
    }


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(argument){
return function scam () {
    return argument * argument
    }
}

const fareDoubler = function createFareMultiplier(fare){
                                    return fare * 2
                                    }   



const fareTripler = function createFareMultiplier(fare){
return fare * 3
}

// const selectDifferentDrivers = function(arrayOfDrivers, fxn){
//     return fxn(arrayOfDrivers)
//   }

const selectDifferentDrivers = function(array, argument) {
    return argument(array)
}