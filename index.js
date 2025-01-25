let arr = [5, 3, 8];
arr[1] = 10;  
console.log(arr);  

let strings = ["apple", "banana", "cherry"];
strings.push("date");  
console.log(strings); 

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  

let numArr = [2, 4, 6, 8, 10];
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

let stringsArr = ["apple", "banana", "cherry", "kiwi", "grapefruit"];
for (let i = 0; i < stringsArr.length; i++) {
    if (stringsArr[i].length > 5) {
        console.log(stringsArr[i]);
    }
}

let nums = [12, 34, 23, 9, 56, 89, 23, 78, 45, 67];
let max = Math.max(...nums);
console.log(max); 

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
        console.log(numbersArray[i]);
    }
}






