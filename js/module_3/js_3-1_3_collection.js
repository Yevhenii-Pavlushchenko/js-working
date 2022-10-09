// Работаем с коллекцией (массивом обьектов)

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);

for ( friend of friends) {
    console.log(friend)
    // Добавляем еще одно свойство в массив сложных обьектов
    friend.Property = 555;
}

console.table(friends);

// Задача №1 Ищем друга по имени

const findFriendByName = function (allFriends, friendName) {
    for (friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === friendName) {
            return 'Нашли имя друга  !!!';
        }

    }
    return'Нет у тебя друзей с таким иминем';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));



// Задача №2 Ищем Получить имена всех друзей

const getAllNames = function (allFriends) {
    //    Создаем массив в который будут записываться имена
    const names = [];
   
    for (const friend of allFriends) {
        console.log(friend);
        // Пушим имена в массив
        names.push(friend.name);
    }
    return names;
};
console.log(getAllNames(friends));



// Задача №3  Получить имена всех друзей которые находяться онлайн

const getOnlineFriends = function (allFriends) {
    // создаем переменную onlineFriends
    // в которую будем записвать друзей онлайн
    const onlineFriends = [];
    // Делаем перебор массива и если свойство онлайн 
    // True  то пушим его в переменную onlineFriends;
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.onlaine);
        
        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
};
console.log(getOnlineFriends(friends));


// Задача №4  Получить имена всех друзей которые находяться онлайн

const getOflineFriends = function (allFriends) {
    const oflineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.onlaine);
 //  по сути все тоже самое только в if  ставим отрицание через "!";
        if (!friend.online) {
            oflineFriends.push(friend);
        }
    }
    return oflineFriends;
};
console.log(getOflineFriends(friends));


// Задача №5 Сразу разбить всех друзей на два обьекта онлайн и оффлайн

const getFriendsByOnlineStatus = function (allFriends) {
    // создаем переменную FriendsByOnlineStatus 
    // c двумя свойствами онлайн и оффлайн
    const friendsByOnlineStatus = {
        online: [],
        offline: [],
    };
    // Делаем перебор массива и если свойство онлайн 
    // True  то пушим его в свойство online а если false все остальные в оффлайн ;
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);
        //В if незабіваем поставить  так как цикл должен продолжаться
        //  и после нахождения первого онлайн
        if (friend.online) {
            friendsByOnlineStatus.online.push(friend);
            continue;
        }
         friendsByOnlineStatus.offline.push(friend);
    }
    return friendsByOnlineStatus;
};
console.log(getFriendsByOnlineStatus(friends));

 