// Функция проверки на палиндром с разными
function checkPalindrom (str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

checkPalindrom('довОд');


//Функция поиска чисел
function checkNum(str) {
  // поиск совпадений в строке на число где \d+/ границы диапалона чисел /g -глобальный
  const numArr = str?.match(/\d+/g);

  if (!numArr) {
    return NaN;
  }

  return numArr.map((elem) => parseInt(elem, 10)).join('');
}

checkNum('fdgdfgd456fgdfg');

//Функция, которая принимает три параметра: исходную строку, минимальную длину
//и строку с добавочными символами — и возвращает исходную строку, дополненную
//указанными символами до заданной длины. Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.

// Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

function  sumString (str, minLength, strAdd){

let canAdd = Number(str.Length) - Number(strAdd.Length);
console.log(canAdd);
for(let i = minLength; i > 1 ; i--){
    str = strAdd + str;
//console.log(str);
}
return str;
};
// Добавочный символ использован один раз
sumString('q', 4, 'werty');      // '01'
// Добавочный символ использован три раза
sumString('1', 4, '0');      // '0001'

// // Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'

// // Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'
