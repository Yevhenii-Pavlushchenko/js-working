// Написать скрипт для поиска логина
// - Если логина нет вывести сообщение: Пользователь [login] не найден.
// - Если нашли логин вывести сообщение: Пользователь [login] найден.

// - Сначала через for
// - Потом через for of
// - Логика break
// - Метод  includes() с тернанарным оператором.


                 //    Решение
const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

               //    #1 Через for
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
    
//     console.log(logins[i]);
//     console.log(`${login } === ${loginToFind}`,  login === loginToFind);
    
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }

              //    #2 Через for of
// for (const login of logins){
//     console.log(`Login; `, login);
//     console.log(`${login } === ${loginToFind}`,  login === loginToFind);
    
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }



//    #3 Через метод  inCludes() с тернанарным оператором.

const message = logins.includes('poly1scute') ?
    `Пользователь ${loginToFind} найден.` 
    : `Пользователь ${loginToFind} НЕ найден.`;
   





console.log(message);