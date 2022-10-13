// function fn1() {
//  console.log('hello')
// };

// function fn2() {
//      console.log('bye')
// };


// function saySometing(callback) {
//     callback();
// }

// saySometing(fn2);

// // ------map

// const numbers = [1, 2, 3, 4, 5,];

// const x2 = (number) => number * 2;

// const map2X =  ( items ) => {
//     const result = [];

//     for (const item of items) {
//         result.push(callback(item));
//     }
//     return result;
// }

// ---- find

// const users = [
//     { name: 'Bobby', age: 15 },
//     { name: 'mary', age: 20 },
//     { name: 'poly', age: 25},
// ];

// const find = (items, callback) => {
//     for (const item of items) {
//         if (callback(item))
// return item;
//     }

//     return item;
// };
 
// console.log(find (users, (item) => item.name === 'mary'));


// второе заните практики

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
const getModels = cars => {};

console.table(getModels(cars));