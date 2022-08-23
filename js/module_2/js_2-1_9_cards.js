// Работаем с карточками в трелло:
// - Метод splice()
// - Удалить
// - Добавить
// - Обновить
const cards = [
    "Карточка 1",
    "Карточка 2",
    "Карточка 3",
    "Карточка 4",
    "Карточка 5",
];
console.table(cards);
                        //Решение

// Удаление (по индексу), метод IndexOf();
    // const cardToRemowe = "Карточка 3";
    // const index = cards.indexOf(cardToRemowe);
    // console.log(index);
    // cards.splice(index, 1);
    // console.table(cards);


// Добавление по индексу
    // const cardToInsert = "Карточка 6";
    // const index = 5;
    // cards.splice(index, 0, cardToInsert);

    // console.table(cards);

// Обновление карточки по индексу

    const cardToUpdet = "Карточка 4";
    const index = cards.indexOf(cardToUpdet);
    cards.splice(index, 1, "Обновленная карточка 4");

    console.table(cards);





                        