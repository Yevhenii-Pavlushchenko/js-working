// switch!!!!
// const options = prompt('хуй');
// let message= " ";

// switch (options) {
//     case 1:
//         message = "Вы можете забрать завтра в офисе";
//         break;
        
//      case 2:
//         message = "Курьер доставит заказ с 09:00 до 18:00";
//         break;
//      case 3:
//         message = "Посылка будет отправлена сегодня";
//         break;
//     default:
//         message = "Менеджер с вами свяжется"
// }
// console.log(message);


//for!!!
// for (let i = 0; i <= 5; i += 1 ) {
//     console.log(i)
// }
// console.log('победа')


// ЗАдача №1:

// Условие:
// - Написать скрипт который подсчитывает общую сумму
// зп работников
// - Колличество работников хранится в переменной emplyees
// - ЗП каждого работника это случайное число от 500 до 5000
// - Записать сумму в переменную totalSalary и вывести в консоль

// Решение по действиям:
// №1 Сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const emplyees = 3;
// let totalSalary = 0;
// // №2 Перебрать работников в цикле
// for (let i = 0; i <= emplyees; i += 1) {
// // №3 Сгенерировать случайную ЗП
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
// // №4 Прибавить к тоталу 
//     console.log(`ЗП работника номер ${i} - ${salary}`)

//     totalSalary += salary;
// }
// //№5 Вывести лог
// console.log('totalSalary: ', totalSalary)


// Задача №2

// Условие:
// - Напиши скрипт который подсчитывает сумму всех четных чисел
// - Которые входят в диапазон чисел в переменных от min до max
// - Например если min = 0 и мах = 5, то диапазог от 0-5, и в нем
// 2 четных числа 2 и 4, и их сумма 6

// Решение по действиям:

// №1 обьявить переменные 
const min = 0;
const max = 5;
let total = 0;
// №2 for от мин до макс с шагом в 1 
for (let i = min; i <= max; i += 1){
    console.log(i)
// №3 Проверяем остаток от деления 
    if (i % 2 !== 0) {
        console.log(`не четное число`, i);
        continue;
    }
//  №4 Пишем в сумму
    console.log(`четное число`, i);
    total += i;
}
//  №5 Выводим log
console.log(`Total ` ,  total);

