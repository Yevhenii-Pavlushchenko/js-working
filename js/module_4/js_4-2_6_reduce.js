// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает что угодно.
// - Делает что угодно.


const numbers = [5, 10, 15, 20, 25];
            //обычный вариант  
const total = numbers.reduce((acc, number) => {
    // console.log('acc', acc);
    // console.log('number', number);
    return acc + number;
});

        // стрелочный вариант
// const total = numbers.reduce((acc, number) => acc + number);

// console.log(total);

// Прицип работы редюса
// Итерация 1 -> асс = 0 -> number = 5 -> return 0 + 5 -> return 5
// Итерация 2 -> асс = 5 -> number = 10 -> return 5 + 10 -> return 15
// Итерация 3 -> асс = 15 -> number = 15 -> return 15 + 15 -> return 30
// Итерация 4 -> асс = 30 -> number = 20 -> return 30 + 20 -> return 50
// Итерация 5 -> асс = 50 -> number = 25 -> return 50 + 25 -> return 75


// # 1 Посчитать зарплату

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value;
});

// console.log(totalSalary);

// # 2 Посчитать общее кол-во часов у задротов

const players = [
  {id: 'player-1', name: "Манго", timePlayed: 310, score: 54, online: false },
  {id: 'player-2', name: "Поли",  timePlayed: 470, score: 92 , online: true},
  {id: 'player-3', name: "Киви",  timePlayed: 230, score: 48 , online: true},
  {id: 'player-4', name: "Аякс",  timePlayed: 150, score: 71 , online: false},
  { id: 'player-5', name: "челси", timePlayed: 80, score: 48, online: true },

];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//     return totalTime + player.timePlayed;
// }, 0);

// без ретерна 
const totalTimePlayed = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed
    , 0
);

// console.log(totalTimePlayed);


// # 3 Посчитать сумму в корзине товаров

const cart = [
    { label: 'appels', price: 100, qantity: 2 },
    { label: 'bananas', price: 120, qantity: 3 },
    { label: 'lemon', price: 70, qantity: 4 },
];

const totalAmount = cart.reduce(
    (total, fruit) => total + fruit.price * fruit.qantity
    ,0
);
// console.log(totalAmount);


// # 4 Собираем все теги

const tweets = [
    { id: '001', likes: 5, tags: ['js', 'node js']},
    { id: '002', likes: 2, tags: ['html', 'css']},
    { id: '003', likes: 17, tags: ['html', 'css', 'node js']},
    { id: '004', likes: 8, tags: ['css', 'react']},
    { id: '005', likes: 0, tags: ['js', 'node js', 'react']},
]


const allTags = tweets.reduce( (allTags, tweet) => { 
        allTags.push(tweet, tags);
        
        return allTags;
    }
    , []
);

 console.log(allTags);