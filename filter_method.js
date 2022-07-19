const numbers = [1,3,2,6,4,8];

function isEven(number){
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);    // filter k jo call back function hoga wo hmesha boolean value hi return krega

console.log(evenNumbers);

function isOdd(number){
    return number % 2 !==0;
}

const oddNumbers = numbers.filter(isOdd);    // filter k jo call back function hoga wo hmesha boolean value hi return krega

console.log(oddNumbers);