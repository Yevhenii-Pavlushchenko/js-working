// Напиши скрипт который подсчитывает сумму всех четных чисел

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];


                 //    Решение
                 //    Вариант 1 Через for 
// // 1 Создать переменную total
let total = 0;
// // // 2 Перебрать массив
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);

// //         // 3 На каждой итерации проверить єллемент на четность
// if (numbers[i] % 2 === 0) {
//     console.log(`Четное`);
//     // 4 Если четный плюсуем к total
//     total += numbers[i]; 
// }
// }
//     console.log(`Total:`, total);

            //    Вариант 2 Через for Off
 //  Или  вместо for можем использовать for off;
// for off Используем только в том случае если не нужно
// // использовать счетчик или перезапиывать элементы массива.
for (const number of numbers) {
    console.log(number);
    
    if (number % 2 === 0) {
    console.log(`Четное`);
    // 4 Если четный плюсуем к total
    total += number; 
    }
}

console.log(`Total:`, total);
