// Делаем slag в URL из названия строки;
// Заголовок сттьи состоит только из букв и пробелов;
//  - Нормализируем строку
//  - Разбиваем по буквам
//  - Сшиваем строку с разделителями

// Должно получится top-10-benefits-of-react-framework  ;

const tittle = 'Top 10 benefits of React framework';

//  - Нормализируем строку
const normalizedTittle = tittle.toLocaleLowerCase();
console.log(normalizedTittle);
//  - Разбиваем по буквам
const words = normalizedTittle.split(' ');
console.log(words);
//  - Сшиваем строку с разделителями
const slug = words.join('-');
console.log(slug);



// Теперь сделаем все действия в одну строку
const slug1 = tittle.toLocaleLowerCase().split(' ').join('-');
console.log(slug1);


