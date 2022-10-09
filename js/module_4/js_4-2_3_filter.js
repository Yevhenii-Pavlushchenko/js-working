// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает новый массив.
// - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// - Если коллбек вернул true элемент добавляется в возвращаемый массив.
// - Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// - Если ни один элемент не удовлетворил условию, возвращает пустой массив.

const numbers = [5, 10, 15, 20, 25];
            
        // !!!!Обычный вариант!!!
// const filteredNubers = numbers.filter(number => {
//     console.log(number);

//     return number > 15;
    
// });

         //  !!!!Стрелочный вариант !!!!
const filteredNubers = numbers.filter(number => number > 15);
console.log(filteredNubers);


const players = [
  {id: 'player-1', name: "Манго", timePlayed: 310, score: 54, online: false },
  {id: 'player-2', name: "Поли",  timePlayed: 470, score: 92 , online: true},
  {id: 'player-3', name: "Киви",  timePlayed: 230, score: 48 , online: true},
  {id: 'player-4', name: "Аякс",  timePlayed: 150, score: 71 , online: false},
  { id: 'player-5', name: "челси", timePlayed: 80, score: 48, online: true },

];

// #1 Получаем масссив всех игроков онлайн:

const onlinePlayers = players.filter(players => players.online);
console.table(onlinePlayers);

// #2 Получаем масссив всех игроков НЕ онлайн:

const offlinePlayers = players.filter(players => !players.online);
console.table(offlinePlayers);

// #3 Получаем масссив всех задротов время в игре более 250 часов:

const hardcorePlayers = players.filter(players => players.timePlayed > 250);
console.table(hardcorePlayers);