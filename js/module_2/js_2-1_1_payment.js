// Почстиать общуюю сумму покупок:

const cart = [52, 28, 105, 78, 92, 17, 120];
// console.table(cart);
// // 1 Создать переменнyю тотал "До цикла"!!!
let total = 0;

// // 2 Перебрать массив
for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);
    
// // 3 Каждый єлемент приплюсовать к Total.
    total += cart[i];

}

console.log(`Total`, total);

// Или  вместо for можем использовать for off;
// for off Используем только в том случае если не нужно
// использовать счетчик или перезапиывать элементы массива.
// for (const value of cart) {
//     total += value;
// }
// console.log(`Total`, total);

//4 Добавим 20% налога на каждую покупку;

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);

//     total += cart[i];

// }
// console.log(`Total +20%`  , total)
