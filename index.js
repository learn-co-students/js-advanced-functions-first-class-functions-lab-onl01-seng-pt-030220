// Code your solution in this file!

function returnFirstTwoDrivers(array){

  return array.slice(0, 2);
}


function returnLastTwoDrivers(array){
  return array.slice(-2)
}


let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]


 function createFareMultiplier(){

  return function multiplayer(number){  return number * number}

 }


 function  fareDoubler(fare){

   return fare * 2
 }

 function  fareTripler(fare){

   return fare * 3
 }

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers)

}
