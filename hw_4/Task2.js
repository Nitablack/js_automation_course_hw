// 1.
// Реализовать Task 1 через switch

const minAge = 18;
const maxAge = 60;
const age = 18;

switch (true) {
    case (age < minAge): {
        console.log("You don't have access cause your age is " + age + ". It's less then " + minAge);
        break; 
    }
    case (age >= minAge && age < maxAge): {
        console.log("Welcome!");
        break; 
    }
    case (age > maxAge): {
        console.log("Keep calm and look Culture channel!");
        break; 
    }
    default: {
        console.log("Technical work"); 
    }
}

// 2. 
// Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

const minAge = 18;
const maxAge = 60;
const age = "18";

if (typeof +age !== "number"){
    throw new Error("Wrong age!");
}
else {
    if (age < minAge) {
        console.log("You don't have access cause your age is " + age + ". It's less then " + minAge);
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

// 3.
// Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number

const minAge = 18;
const maxAge = 60;
const age = 18;

if (isNaN(Number(age))){
    throw new Error("Wrong age!");
}
else {
    if (age < minAge) {
        console.log("You don't have access cause your age is " + age + ". It's less then " + minAge);
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}