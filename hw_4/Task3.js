// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert


const minAge = 18;
const maxAge = 60;

const age = +prompt("What's your age?");
if (isNaN(age)){
    alert("Wrong age!");
}
else {
    if (age < minAge) {
        alert("You don't have access cause your age is " + age + ". It's less then " + minAge);
    } else if (age >= minAge && age < maxAge) {
        alert("Welcome!");
    } else if (age > maxAge) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work");
    }
}

