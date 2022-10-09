// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает ПЕРВЫЙ элемент удовлетворяющий условию,
//       то есть когда коллбек возвращает true.
// - Если ни один элемент не подошёл, то есть для всех элементов
//     коллбек вернул false, метод возвращает undefined.

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
// console.log(number);

const players = [
  {id: 'player-1', name: "Манго", timePlayed: 310, score: 54, online: false },
  {id: 'player-2', name: "Поли",  timePlayed: 470, score: 92 , online: true},
  {id: 'player-3', name: "Киви",  timePlayed: 230, score: 48 , online: true},
  {id: 'player-4', name: "Аякс",  timePlayed: 150, score: 71 , online: false},
  { id: 'player-5', name: "челси", timePlayed: 80, score: 48, online: true },

];

// #1 Найти игрока по id

const playerToFind = 'player-3';

const playerWithId = players.find(players => players.id === 'player-3');
console.log(playerWithId);

// #2 Найти игрока по имени

const playerWithName = players.find(players => players.name === 'Аякс');
console.log(playerWithName);

            // Через функцию
const findPlayerById = (allPlayer, playerId) => {
    return allPlayer.find(({ id }) => id === playerId)
};

console.log(findPlayerById(players, 'player-5'));
console.log(findPlayerById(players, 'player-1'));
