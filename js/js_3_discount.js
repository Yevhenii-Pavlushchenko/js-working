// Задача №4
//Условия:
// - Написать скрипт подсчета покупки со скидкой в зависмости
//      от потраченной суммы за все время (партнерская система)
// - Общая сумма потраченного хранится в переменной totalSpent
// - Сумма текущего платежа хранится в переменной payment
// - Скидка хранится в переменной discount

// - Если потрачено от [100 до 1000] Бронзовый партнер 2%
// - Если потрачено от [1000 до 5000] Cеребрянный партнер 5%
// - Если потрачено от [ 5000 ] Золотой партнер  партнер 10%
// - Если потрачено до [100]  Не партнер 0%
// - В конце вывести сообщение
//     " Заказ оформляем на сумму [сумма] со скидкой [скидка]% "
//

// Решение по действиям:
// №1 обьявить переменные

let totalSpent = 10;
let payment = 3000;
let discount = 0;

// №2  Создаем вычесление размера скидки для пратнеров:
//  бронзовый партнер 2%
if (totalSpent > 100 && totalSpent < 1000) {
    console.log(`Бронзовый партнер 2%`);
    discount = 0.02;  
} else if (totalSpent > 1000 && totalSpent < 5000) { //  Cеребрянный партнер 5%
    console.log(`Серебренный партнер 5%`);
    discount = 0.05;  
} else if (totalSpent > 5000 ) { //  Золотой партнер  партнер 10%
    console.log(`Золотой партнер 10%`);
    discount = 0.1;  
} else {
    console.log('Вы не являетесь пантнером ваша скидка 0%');
    discount = 0;
}

// Высчитываем сумму к оплате с учтеом скидки
payment -= payment * discount;
// Выводим консоль с суммой заказа с учетом скидки
console.log(`Заказ оформляем на сумму  ${payment}   со скидкой   ${discount * 100}  %`);
// Выводим общую сумму по накопительной карте 
totalSpent += payment
console.log(`Общая сумма по накопительной карте: ${totalSpent}`);