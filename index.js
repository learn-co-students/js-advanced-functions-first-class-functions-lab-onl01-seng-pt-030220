const returnFirstTwoDrivers = function(array){
    let first = array.slice(0, 2);
    return first; 
}

const returnLastTwoDrivers = function(array){
    let last = array.slice(-2); 
    return last; 
}

let selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

function createFareMultiplier(multipler){
    return function(fare){
        return fare * multipler; 
    }
}

const fareDoubler= function(fare){
    return createFareMultiplier(2)(fare); 
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare); 
}

function selectDifferentDrivers(array, fn){
    return fn(array); 
}