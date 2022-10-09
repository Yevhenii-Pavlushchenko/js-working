
// №1 образец колбека!!!!
// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);

// };

// const fnB = function (number) {
// console.log( 'это лог при вызове фнБ', number);

// };
// fnA(`bro`, fnB );

// №2  Функция doMath(a, b, callback)

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}
//         // сложение
// const add = function (x, y) {
//     return x + y;
// }
// doMath(3, 2, add);

        // вычитание
// const sub = function (x, y) {
//     return x - y;
// }
// doMath(11, 4, sub);

// //  ебаная магия  вычитание (тоже самое что и чуть выше) инлайн функция!!
// doMath(11, 4, function (x, y) {
//     return x - y;
// })



// №3 Отложенный вызов: регистрация события(считает колличесвто кликов по кнопке )
 
// const buttonRef = document.querySelector(`.js-button`);
// const handelButtonClick = function () {
//     console.log('click button');
// }
// buttonRef.addEventListener('click', handelButtonClick);

// №4 Отложенный вызов: геолокация

// const onGetPositionSucssess = function (position) {
//     console.log('Это вызов onGetPositionSucssess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log(error);

// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSucssess,
//     onGetPositionError);
    
    

//     // №5 Отложенный вызов: Интерваллы
// const callback = function(){
// console.log("Через три секунды после получения коллбека");
// };


// console.log(' в коде перед таймаутом');
// setTimeout(callback, 3000);

// console.log("в коде полсе таймаута");

         // №6 filter

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);
        if (passed) {
            filteredArray.push(el);
        }
    }
    
    return filteredArray;
};
// 1.Нужно передать функцию
// 2. функция получает эллемент массива
// 3. если эллемент массива удовлетворяет условию то функция вернет true
// 4. если эллемент массива HE удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

// р2 сделан также как и р1 но только инлайново
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
});
console.log(r2);

const fruits = [
    { name: 'appels', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuqantity = function (fruit) {
    return fruit.quantity >= 120;
 };
const r3 = filter(fruits, getFruitsWithQuqantity);
console.log(r3);