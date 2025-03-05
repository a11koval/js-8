const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000,
    deposit(amount) {
        if (confirm("Поповнити рахунок?")) {
            this.balance += amount;
            console.log(`Ваш баланс: ${this.balance}`);
        }
    },
    withdraw(amount) {
        if (confirm("Зняти гроші?")) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Ваш баланс: ${this.balance}`);
            } else {
                console.log("Недостатньо коштів!");
            }
        }
    }
};


const weather = {
    temperature: parseFloat(prompt("Введіть температуру:")),
    humidity: 80,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};
console.log(weather.isBelowZero() ? "Температура нижче 0 градусів Цельсія" : "Температура вище або рівна 0 градусів Цельсія");


const user = {
    name: "Alice",
    email: "alice@example.com",
    password: "password123",
    login(inputEmail, inputPassword) {
        return inputEmail === this.email && inputPassword === this.password ? "Вхід успішний!" : "Невірний email або пароль!";
    }
};


const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated() {
        return this.rating > 8;
    }
};
console.log(movie.isHighRated() ? "Фільм має високий рейтинг" : "Фільм має середній рейтинг");