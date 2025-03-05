const processArray = (array, callback) => callback(array);

const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

console.log(processArray([1, 2, 3, 4, 5], getSum)); 
console.log(processArray([1, 2, 3, 4, 5], getMin)); 
console.log(processArray([1, 2, 3, 4, 5], getMax));

const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(operate(10, 5, subtract)); 
console.log(operate(10, 5, add)); 
console.log(operate(10, 5, multiply)); 
console.log(operate(10, 5, divide));2
