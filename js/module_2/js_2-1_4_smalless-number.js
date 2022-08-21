// Напиши скрипт поиска самог маленького числа в массиве. При
// условии что числа уникальные и не повторяются.
 
                     //    Решение
const numbers = [51, 18, 13, 34, 7, 85, 19];
let smallestNumber = numbers[0]; 

for (const number of numbers) {
    

    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log(`Самок маленькое число в массиве `, smallestNumber, `!`);