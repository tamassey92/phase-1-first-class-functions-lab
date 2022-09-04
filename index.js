const returnFirstTwoDrivers = (drivers) => {
return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = (drivers) => {
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function(fare) {
    return fare * number;
    }}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)