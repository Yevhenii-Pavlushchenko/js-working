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

// // №1 обьявить переменные
// const min = 0;
// const max = 5;
// let total = 0;
// // №2 for от мин до макс с шагом в 1
// for (let i = min; i <= max; i += 1){
//     console.log(i)
// // №3 Проверяем остаток от деления
//     if (i % 2 !== 0) {
//         console.log(`не четное число`, i);
//         continue;
//     }
// //  №4 Пишем в сумму
//     console.log(`четное число`, i);
//     total += i;
// }
// //  №5 Выводим log
// console.log(`Total ` ,  total);


// module 3 (20/41)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//      console.log(products);
//     }
//     return totalPrice;
 
// }
// console.log(calculateTotalPrice('Radar'))


// // module 3 (21/41)
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const  { yesterday, today, tomorrow } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;




// // // module 3 (23/41)
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
//   const {
//   yesterday: highYesterday,
//   today:highToday,
//   tomorrow:highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // module 3 (24/41)

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb} of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }



// // module 3 (25/41)

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const{
//   today: {
//     low:28 ,
//     high:32,
//     icon: todayIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low:27,
//     high:31,
//     tomorrowIcon:"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", },
//   } = forecast;
 

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;


// // // module 3 (28/41)

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,
//                    ...secondGroupScores,
//                    ...thirdGroupScores,
// ];
// console.log(allScores)
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(Math.max([64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]))


// // // module 3 (30/41)

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return { comleted, category, priority, ...data};
//   // Change code above this line
// }

// // // module 3 (32/41)
// // Change code below this line
// function addOverNum(firstArg, ...args ) {
//   let total = 0;

//   for ( let i = 0; i = args.length; i +=1){
//     if( args[i] > args[0]){
//        total += args[i];
//     }
//   }
//    return total;



//   // Change code above this line
// }
// Change code below this line
// function addOverNum(firstNumber, ...args ) {
//   let total = 0;

//   for (const arg of args){
//     if( firstNumber > arg){
//        total += arg;
//     }
//     console.log(firstNumber);
//     console.log(total);
//   }
//    return total;

    

//   // Change code above this line
// }

// addOverNum[15, 23, 67];



// // // module 3 (33/41)

// Change code below this line
// function findMatches(firstArg, ...secondArg) {
//   const matches = []; // Don't change this line
// for (const number of firstArg){
//   if (secondArg.includes(numder)) {
//     matches.push(number);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// function findMatches(firstArg, ...secondArg) {
//   return firstArg.filter((el) => {
//     if (secondArg.includes(el)) return true;
//   } )
// }
function findMatches(firstArg, ...secondArg) {
  const matches = []; // Don't change this line
for (const i of firstArg){
  if (secondArg.includes(i)) {
    matches.push(i);
  }
}
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));