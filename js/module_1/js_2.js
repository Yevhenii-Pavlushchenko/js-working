// Задача №3
//Условия:
// - Напиши скрипт обработки покупки в магазине
// - Баланс потребителя хранится в переменной balance
// - Сумма покупки хранится в переменнной payment
// - Перед проверкой вывести сообщение:
//      "Общая стоимость заказа [число] кредитов.
//       Проверяем колличество доступных средств на счету!"
// - Если сумма покупки НЕ превышает балланс:
//        - Вычесть из балланса сумму покупки
//        - Вывести сообщение "на счету осталось [число] кредитов."
// - Если сумма покупки превышает балланс:
//        - Вывести сообщение "на счету недостаточно средств для провидения операции!"
// - В конце вывести сообщение "Oперация заершена"

// Решение по действиям:

// №1 обьявить переменные 
let balance = 10000;
const payment = 200;
// №2 Выводим сообщение перед проверкой;
console.log(
    `Общая стоимость заказа ${payment} кредитов.
Проверяем колличество доступных средств на счету!`
);
// №3 Условие если сумма покупки <=  балланс;
if (balance >= payment) {
    console.log(`ok`);

    balance -= payment;
    console.log(`на счету осталось ${balance} кредитов.`)
}
// №4 Условие если сумма покупки >  балланс;
else {
    console.log(`на счету недостаточно средств для провидения операции!`);
}
// №5 Выводим сообщение после проверки;
console.log(`Операция завершена`)
    





