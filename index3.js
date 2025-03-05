// Завдання 1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

// Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

// Завдання 3
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Завдання 4
function formatString(string) {
    return string.length > 40 ? string.slice(0, 40) + '...' : string;
}

// Завдання 5
function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}

// Завдання 6
function sumInputNumbers() {
    let input;
    const numbers = [];
    let total = 0;

    while (true) {
        input = prompt('Введіть число');
        if (input === null) break;
        
        const num = Number(input);
        if (isNaN(num)) {
            alert('Було введено не число, попробуйте ще раз');
            continue;
        }
        numbers.push(num);
    }
    
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}

// Завдання 7
const logins = ['user123', 'admin', 'guest', 'testUser'];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}
