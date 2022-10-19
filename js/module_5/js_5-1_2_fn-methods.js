
        // МЕТОДЫ функции call и apply
            
// const showThis = function (...args) {
//     console.log(...args);
//   console.log('showThis -> this', this);  
// };
// showThis();

// const odjA = {
//     a: 5,
//     b: 10,
// };
//                             // !!!CALL!!!!!
// showThis.call(odjA, 1, 2, 3, 4, 5); // метод call  берет функцию на котором его
// // вызвали (в нашел случае это showThis ) и принудительно вызывается в контексте этого
// // обьекта (odjA)
//                          // !!!APPLY!!!!!
// showThis.apply(odjA, [1, 2, 3, 4, 5]); //Делает все тоже самое что и call но только 
//  аргументы обязательно передаются массивом[].

const changeColor = function (color) {
    // console.log('changColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};
// console.log(hat);

changeColor.call(hat, 'white'); // пропускаем функцию через колл ,она подтягивает в обьект
// // вместо  this  и  все корректно работает. Сначала цвет черній а потом становиться белый
// console.log(hat);

const sweater = {
    color: 'green',
};


// // МЕТОД функции  bind  - позволяет сдедать копию функции с привязанным контектсом

// const changeHatColor = changeColor.bind(hat);
// console.log(changeHatColor);
// changeHatColor();

//  Продолжение задачи с первой главы.!!!!!!
const counter = {
        value: 0,
        increment(value) {
            console.log('increment -> this', this);
            this.value += value;
        },
        decrement(value) {
            console.log('decrement -> this', this);
            this.value -= value;
        },
    };

    const updateCounter = function (value, operation) {
        operation(value);
    };

    updateCounter(10, counter.increment.bind(counter)); // А вот и решение добавляем метод bind
    updateCounter(5, counter.decrement.bind(counter));  //А вот и решение добавляем метод bind
