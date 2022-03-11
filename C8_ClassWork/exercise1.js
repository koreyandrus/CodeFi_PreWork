// Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.

function makePlusFunction(num1) {
    return function addNum(num2){
        return num1 + num2;
    }
}

const plusFive = makePlusFunction(5);
const plusTen = makePlusFunction(10);

console.log(plusFive(2));
console.log(plusFive(-8));
console.log(plusTen(4));
console.log(plusTen(12));