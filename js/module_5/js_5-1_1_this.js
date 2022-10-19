
// Функция это частный случай обьекта -> ССЫЛОЧНЫЙ ТИП
// просто примеры!!

// console.log(' [] === [] :', [] === []);
// console.log(' {} === {} :', {} === {});
// console.log(
//     'function () {} === function () {} : ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log(' fnB === fnA: ', fnB === fnA);

// Контекст (this)
//   - Где и как была обьявлена фунция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
//   - Контекст определяеться В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не приявязан явно.


// 1. Как етод обьекта. В контексте обьекта

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     }
// };
// user.showTag();


// // 2. Вызов без контекста
// //  - В строгом режиме = undefined
// //  - Не в строгом режиме = window

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

// 3. Как метод обьекта но обьявленна как внешняя функция
// В контексте обьекта


// const showTag = function () {
//     console.log('showTag -> this', this);
//      console.log('showTag -> this.tag', this.tag);
// }
 
// // showTag();

// const user = {
//     tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log(user);
// user.showUserTag();


// 4. Вызов без контекста, но обьявлена как метод обьекта.

// const user = {
//     tag: "Mango",
//     showTag() {
//     console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// };
// user.showTag();

// const outerShowTag = user.showTag;
// outerShowTag();// так работать не будет!!!!


// 5. Контекст в сallback  функциях

//  const user = {
//     tag: "Mango",
//     showTag() {
//     console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// };

// user.showTag();


// const invokeAction = function (action) {
//     console.log(action);
//     action();
// };

// invokeAction(user.showTag);


// Тренируемся 1

// const fn = function () {
//     console.log('fn -> this', this)
// };
// fn(); //какой this?


// Тренируемся 2
// const book = {
//     title: 'react for beginner',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this', this.title);
//     },
// };

// // book.showThis(); // какой тут будет this??

// // const outerShowThis = book.showThis;
// // outerShowThis()   // какой тут будет this?? undefined!!!

// const outerShowTitle = book.showTitle;
// outerShowTitle()   // какой тут будет this?? Error


// Тренируемся 3
// const makeChangeColor = function () {
//     const changeColor = function (color){
//         console.log('changColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor();  // какой тут будет this?? undefined  потому что перед ней  нет обьекта!

//     const sweater = {
//         color: 'teal',
//     };
//     sweater.updateColor = changeColor;
    
//     // sweater.updateColor('red'); // какой тут будет this?? есть обьект значит топ все работает

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue');



// Тренируемся 4
// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changColor -> this', this);

//     };
//     return changeColor;

// };

// const updateColor = makeChangeColor();
// updateColor('yellow')   //какой тут будет this??  undefined

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange');  //какой тут будет this??


// // Тренируемся 5 (Рабочее решение будет дальше в главе 2 методы!!!)
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// // updateCounter(10, counter.increment);
// // updateCounter(5, counter.decrement);

