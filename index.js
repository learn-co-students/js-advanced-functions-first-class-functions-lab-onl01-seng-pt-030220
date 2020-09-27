// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);

};

const returnLastTwoDrivers = function(arr) {
    return arr.slice (-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply){
    return function(value){
        return multiply * value 
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr, returnLastTwoDrivers){
    return returnLastTwoDrivers(arr)
}
