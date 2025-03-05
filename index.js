// const players = ["Poly", "Mango", "Ajax"];

// for (let i = 0; i < players.length; i++) {
//   players[i] = players[i]  + (i + 1);
// }




// const add = function(a, b, c) {

//   let row = "Результат:";
//   return  (a + b + c) /3; 
// };

// console.log(add(1, 2, 3)); 
// console.log(add(10, 20, 30)); 
// const newValue = add(5, 20, -10); 
// console.log(newValue);

// const calculateAverage = function(array) {
//   let sum = 0;

//   for (let num of array) {
//       sum += num;
//   }

//   return sum / array.length;
// };

// console.log('Середнє значення ' + calculateAverage([1, 2, 3, 4, 5]));
// function myAverageScore(scores) {

//   let sum = scores.reduce((acc, score) => acc + score, 0);
//   let average = sum / scores.length;


//   let grade;
//   if (average >= 91 && average <= 100) {
//     grade = 'A';
//   } if (average >= 81 && average <= 90) {
//     grade = 'B';
//   } if (average >= 71 && average <= 80) {
//     grade = 'C';
//   } else {
//     grade = 'D';
//   }

//   return `My average score: ${grade}`;
// }

// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// findLogin(login, loginToFind);

// function findLogin(login, loginToFind) {
//   if (logins.includes(loginToFind)) {
//     console.log(` ${loginToFind} знайдено.`);
//   } else {
//     console.log(` ${loginToFind} не знайдено.`);
//   }
// }








// const hello = () => {
//   return "Hello JavaScript";
// };

// console.log(hello());

// const hello2 = (name) => {
//   return `Привіт, ${name}`;
// };

// console.log(hello2("Василь"));

// const arr = [1, 2, 3, 4, 5];

// function sumArray(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) sum += arr[i];
//     callback(sum);
// }

// sumArray(arr, (result) => console.log("Сума:", resul
// const myArray = {
//     name: "Anton",
//     age: 17,
//     city: "Kharkov",
//     position: "Student",
//     hobby: "Football"
// };
// console.log(myArray)













// const car = {
//     brand: "BMW",
//     model: "M5 F90",
//     year: 2024,
//     color: "Black",

//     showInfo: function() {
//         console.log(`Авто: ${this.brand} ${this.model}, рік: ${this.year}, колір: ${this.color}.`);
//     }
// };


// car.showInfo()

// const restaurant = {
//     name: "la pasion",
//     cuisine: "spanish",
//     address: "wroclaw poland",
//     rating: 3.5
// };
// restaurant.updateInfo = function(newAddress, newRating) {
//     this.address = newAddress;
//     this.rating = newRating;
// };
// getInfo: function() {
//     console.log(`Restaurant: ${this.name}, Cuisine: ${this.cuisine}, Address: ${this.address}, Rating: ${this.rating}`);
// }

// // Приклад використання:
// restaurant.updateInfo("456 Elm Street, Los Angeles, CA", 4.8);
// restaurant.getInfo();


// console.log("🔹 Цикли");

// // for - виконує блок коду задану кількість разів
// for (let i = 1; i <= 5; i++) {
//     console.log(`Крок: ${i}`);
// }

// // for...of - перебирає всі елементи масиву
// const fruits = ["🍎", "🍌", "🍊"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// console.log("\n🔹 Логічні оператори");

// // ✅ 2. Логічні оператори: && (І), || (АБО), ! (НЕ)
// let age = 18;
// if (age >= 18 && age < 65) {
//     console.log("Ви дорослий і можете працювати");
// }

// let isWeekend = true;
// if (age >= 18 || isWeekend) {
//     console.log("Ви або дорослий, або сьогодні вихідний!");
// }

// console.log(!isWeekend); // Оператор НЕ (!) змінює значення на протилежне

// console.log("\n🔹 Умови if...else");

// // ✅ 3. Умови if...else
// let number = 10;
// if (number > 0) {
//     console.log("Число додатнє");
// } else if (number < 0) {
//     console.log("Число від’ємне");
// } else {
//     console.log("Число дорівнює нулю");
// }

// console.log("\n🔹 Масиви");

// // ✅ 4. Масиви: створення, доступ до елементів, методи
// const numbers = [10, 20, 30, 40];
// console.log(numbers[0]); // Доступ до першого елемента

// numbers.push(50); // Додає елемент у кінець
// console.log(numbers);

// numbers.pop(); // Видаляє останній елемент
// console.log(numbers);

// console.log(numbers.length); // Довжина масиву

// console.log("\n🔹 Об'єкти");

// // ✅ 5. Об'єкти: створення, доступ до властивостей, зміна значень
// const person = {
//     name: "Олег",
//     age: 25,
//     job: "Розробник"
// };
// console.log(person.name);
// person.age = 26; // Змінюємо значення
// console.log(person);

// console.log("\n🔹 Функції");

// // ✅ 6. Функції: створення, параметри, повернення значення
// function greet(name) {
//     return `Привіт, ${name}!`;
// }
// console.log(greet("Анна"));

// // Функція, що знаходить максимальне число
// function findMax(a, b) {
//     return a > b ? a : b;
// }
// console.log(findMax(10, 5));

// console.log("\n🔹 Колбеки");

// // ✅ 7. Колбеки (callback functions)
// function doMath(a, b, callback) {
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// console.log(doMath(5, 3, add));      // Використання функції додавання
// console.log(doMath(5, 3, multiply)); // Використання функції множення

// console.log("\n🔹 Методи об'єктів");

// // ✅ 8. Методи об'єктів
// const user = {
//     name: "Марія",
//     age: 30,
//     greet() {
//         console.log(`Привіт, мене звуть ${this.name}`);
//     }
// };
// user.greet(); 




