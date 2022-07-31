const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
   
   return function fareMultiplier(value) {
     return value * 5;
   };
};

function fareDoubler(num) {
    
        return num * 2;
};

function fareTripler(num) {
    return num * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}