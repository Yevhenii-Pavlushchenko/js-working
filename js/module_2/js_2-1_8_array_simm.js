// Написать Скрипт который считает сумму эллементов двух массивов;

const array1 = [15, 20, 35, 5];

const array2 = [10, 20, 30, 50];

let Total = 0;

// Перебераем через for(говно вариант)

// for (let i = 0; i < array1.length; i += 1){
//     Total += array1[i];
// }
// for (let i = 0; i < array2.length; i += 1) {
//     Total += array2[i];
// }


// Второй вариант сшиваем два массива;

// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     Total += number;
// }

console.log(Total);