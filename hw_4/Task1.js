"use strict"
// Task 1. Работа с оператором if:

// 1. Создать переменную "minAge" и присвоить ей значение 18

const minAge = 18;

// 2. Создать переменную "maxAge" и присвоить ей значение 60

const maxAge = 60;

// 3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы

const age = 0;

// 4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//   - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
//   - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//   - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//   - Иначе выводите "Technical work".

if (age < minAge) {
    console.log("You don't have access cause your age is " + age + ". It's less then " + minAge);
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome!");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}

// 5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

console.log("If age = 10, then we have result: You don't have access cause your age is " + age + ". It's less then " + minAge);
console.log("If age = 17, then we have result: You don't have access cause your age is " + age + ". It's less then " + minAge);
console.log("If age = 18, then we have result: Welcome!");
console.log("If age = 19, then we have result: Welcome!");
console.log("If age = 59, then we have result: Welcome!");
console.log("If age = 60, then we have result: Technical work");
console.log("If age = 61, then we have result: Keep calm and look Culture channel");