

//                      !!!ЗАМЫКАНИЕ!!!!
// - Функция результатом своей работы может вызывать другую функцию
//
//  - Возврощаемая функция будет иметь доступ ко всем локальным переменным
// (области видимости) родительской функции (той из которой её вернули),
//  это называется замыкание.


// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней функции fnA';
    
//     const innerFunction = function () {
//         console.log(parameter);
//         console.log('Это вызов innerFunction');
//          console.log(innerVariable);
//     }
//     return innerFunction;
// };

// const fnB = fnA(555);
// console.log(fnB);

// Поварёнок

const makeDish = function (sheffName, dish) {
    console.log(` ${sheffName} готовит ${dish}`);

};


// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', ' котлеты');
// makeDish('Poly', 'супчик');
// makeDish('Poly', 'КоФЕ');

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(` ${name} готовит ${dish}`);
    };
    return makeDish;
};

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');
// poly('чай');

// console.dir(mango);



// !!! Округлятор !!!
 
            // вариант без замыкания
// const floatPoint = 3.456789;
// const someInt = Math.round(floatPoint);  // 3
// const withDecimals = Number(floatPoint.toFixed(2)); //3.46


// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(3.4567, 0));
// console.log(rounder(3.4522267, 5));

            // C замыканием 

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));
console.log(rounder2(3.413567));
console.log(rounder3(3.4522267));
// rounder2(floatPoint);  // 3.46
// rounder3(floatPoint);  // 3.457