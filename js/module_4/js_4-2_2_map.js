// - Поэлементно перебирает оригинальный массив.
// - Не изменяет оригинальный массив.
// - Результат работа коллбек-функции записывается в новый массив.
// - Возвращает новый массив такой же длины.

// #1
const numbers = [5, 10, 15, 20, 25];

        // обычный вариант
//  const doubleNumbers = numbers.map(function (number) {
        // стрелочный  вариант   
//     const doubleNumbers = numbers.map(number => {
//     console.log(number);
    

//     return number * 2;
// });
// console.log('numbers', numbers);
// console.log('doubleNumbers', doubleNumbers)

// #2
const players = [
  {id: 'player-1', name: "Манго", timePlayed: 310, score: 54, online: false },
  {id: 'player-2', name: "Поли",  timePlayed: 470, score: 92 , online: true},
  {id: 'player-3', name: "Киви",  timePlayed: 230, score: 48 , online: true},
  {id: 'player-4', name: "Аякс",  timePlayed: 150, score: 71 , online: false},
  { id: 'player-5', name: "челси", timePlayed: 80, score: 48, online: true },

];
// получаем массив имен всех игроков
        // Явный возврат!!!
//  const playerNames = players.map(player => { 
//      return player.name;
//  });
            // НЕ Явный возврат!!!    
const playerNames = players.map(player => player.name);
console.log('playerNames', playerNames); 

// В случае если необходимо вернуть сразу несколько значений ключей
// делать необоходимо следующим образом:вернем сразу имя и очки!!!
        // обычная запись 
// const resualt = players.map(player => {
//     return {
//         name: player.name,
//         score: player.score
//     }
// });
        // Короткая запись
const resualt = players.map(({ name, onlaine }) =>({
    name, 
    onlaine,
 }));

console.log('result', resualt);


// #3 Увеличиваем колличество поинтов каждого игрoка на 10%

const upatedPlayers = players.map(player => {
    // console.log(player);

    return {
        ...player,
        score: player.score * 1.1,
    }
});

console.table(upatedPlayers);


// #4 Увеличиваем timePlayed у третьего игрока на 100

     // обычная запись 

const playerIdToUpdate = 'player-3'; 

// const uptedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         console.log('Вот  мы и нашли главного задрота');
        
//         return {
//             ...player,
//             timePlayed: player.timePlayed +100,
//         };
//     }
//     return player;

// });

                // Короткая запись 
                // вариант 1
    const uptedPlayers = players.map(player => {  
        return playerIdToUpdate === player.id ? {
            ...player,
            timePlayed: player.timePlayed + 100,
        }
            : player;
    });

                // вариант 2 без ретёрна (тернарником)
     
    // const uptedPlayers = players.map(player =>   
    //      playerIdToUpdate === player.id
    //          ? { ...player, timePlayed: player.timePlayed + 100, }
    //          : player,
    // );

console.table(uptedPlayers);