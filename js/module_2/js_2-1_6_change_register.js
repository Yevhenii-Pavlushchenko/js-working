// Написать скрипт который заминяте значение каждого регистра на противоположный.
// Напримен если строка 'JavaScript' то на віходе должно получится 'jAVAsCRIPT'
//                         Решение

const string = 'Java Script';
const letters = string.split('');
console.log(letters);
let invertedString = ' ';

for (const letter of letters) {
    console.log(letter)
// Через  if
    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре - ', letter);
    //     invertedString += letter.toLocaleUpperCase();
    // }

    // else {
    //     console.log('Эта буква в верхнем регистре - ', letter);
    //     invertedString += letter.toLocaleLowerCase();
    // }

// Через тернарный оператор
    invertedString +=
        letter === letter.toLocaleLowerCase()
            ? letter.toLocaleUpperCase()
            : letter.toLocaleLowerCase();
}

console.log(invertedString);