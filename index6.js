const processArray = (array, callback) => callback(array);

const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

console.log(processArray([1, 2, 3, 4, 5], getSum)); // 15
console.log(processArray([1, 2, 3, 4, 5], getMin)); // 1
console.log(processArray([1, 2, 3, 4, 5], getMax)); // 5

const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(operate(10, 5, subtract)); // 5
console.log(operate(10, 5, add)); // 15
console.log(operate(10, 5, multiply)); // 50
console.log(operate(10, 5, divide)); // 2

// Task 1: Modify user object
const user = {
    name: "Alice",
    hobby: "reading",
    premium: true
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Task 2: Count properties in an object
const countProps = obj => Object.keys(obj).length;
console.log(countProps(user));

// Task 3: Find the best employee
const findBestEmployee = employees => Object.keys(employees).reduce((a, b) => employees[a] > employees[b] ? a : b);
console.log(findBestEmployee({ John: 10, Alice: 15, Bob: 7 }));

// Task 4: Count total salary
const countTotalSalary = employees => Object.values(employees).reduce((acc, salary) => acc + salary, 0);
console.log(countTotalSalary({ John: 1000, Alice: 1500, Bob: 1200 }));

// Task 5: Get all property values
const getAllPropValues = (arr, prop) => arr.map(obj => obj[prop]).filter(value => value !== undefined);
console.log(getAllPropValues([{ name: "Apple", price: 50 }, { name: "Banana", price: 30 }], "price"));

// Task 6: Calculate total price of a product
const calculateTotalPrice = (allProducts, productName) => {
    const product = allProducts.find(p => p.name === productName);
    return product ? product.price * product.quantity : 0;
};
console.log(calculateTotalPrice([
    { name: "Apple", price: 50, quantity: 2 },
    { name: "Banana", price: 30, quantity: 3 }
], "Apple"));