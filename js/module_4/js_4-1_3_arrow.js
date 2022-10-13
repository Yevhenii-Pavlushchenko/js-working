
//  !!!СТРЕЛОЧНЫЕ ФУНКЦИИ!!!

//  - Обьявление
//  - Явный и неявный возврат
//  - Аргументы
//  - Неявный возврат обьекта

                    

                //  Переделываем  обычную функцию в стрелочную !
        //   Обычная Функция 
const add = function (a, b, c,) {
    console.log(a, b, c);
    return a + b + c;
}
// console.log(add(5, 10, 15));

        //  Переделана в стрелочную с явным возвратом!
        // Если в функции только один параметр то скобки монжно пропустить: 

        // const addArrow = (a, b, c,) =>    - если неколько параметров 
        // const addArrow = a  =>            - если 1 параметр
        // const addArrow = () =>            - если нет  параметров

const addArrow = (a, b, c,) => {    
    // console.log(a, b, c);
    return a + b + c;
}
// console.log(addArrow(5, 10, 15));



            //   Переделываем  обычную функцию в стрелочную с НЕ явным возвратом!
// Если в функции только одно действие то ее можно сократить сделав не яный возврат

     //   Обычная Функция 
const add1 = function (a, b, c,) {
    
    return a + b + c;  //Только одно действие выполняется в функции
}

//  Переделана в стрелочную с HE явным возвратом!

const add1Arrow = (a, b, c) =>  a + b + c;  //Только одно действие выполняется в функции
//  console.log(add1Arrow(5, 10, 15));



                        

                            // НЕявное возвращение ОБЬЕКТА!!!!
 //   Обычная Функция 
const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());

//  Переделана в стрелочную

const arrowfnA = () => ({ arrowA: 5, });  // просто помещаем обьект в круглые скобки
console.log(arrowfnA());            