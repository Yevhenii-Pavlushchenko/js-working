const players = [
  {id: 'player-1', name: "Манго", timePlayed: 310, score: 54, online: false },
  {id: 'player-2', name: "Поли",  timePlayed: 470, score: 92 , online: true},
  {id: 'player-3', name: "Киви",  timePlayed: 230, score: 48 , online: true},
  {id: 'player-4', name: "Аякс",  timePlayed: 150, score: 71 , online: false},
  { id: 'player-5', name: "челси", timePlayed: 80, score: 48, online: true },

];

// !!!EVERY!!!!
//  - Не изменяет оригинальный массив.
//  - Поэлементно перебирает оригинальный массив.
//  - Возвращает true если все элементы массива удовлетворяют условию.
//  - Возвращает false если хотябы один элемент
//    массив не удовлетворяет условию.
// - Перебор массива прекращается если коллбек возвращает false.

const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// !!!SOME!!!!
// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает true если хотя бы один элемент
//    массива удовлетворяет условию.
// - Возвращает false если ни один элемент массив
//    не удовлетворяет условию.
// - Перебор массива прекращается если коллбек возвращает true.

const isAnyOnline = players.some(player => player.online);
console.log(isAnyOnline);