/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

const n = 10;
if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 9) {
    console.log("invalid number");
} else {
    console.log (n +  Number(''+ n+ n) + Number('' + n + n + n));
}
