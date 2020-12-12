// Логические операторы
// https://learn.javascript.ru/logical-operators

// Задача № 1
// let age = 13;
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// if (age >= 14 && age <= 90) {
//   alert('значение находится в диапазоне');
// }

// Задача № 2
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// let age = 13;
// if (!(age >= 14 && age <= 90)) {
//   alert('Works great!');
// }

// if (age < 14 && age > 90);

// Задача № 3
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:

const userLogin = 'Admin';

let userPassword;
let userInput = prompt('Write a Login, please!', '');

if (userInput.toLowerCase() === userLogin.toLowerCase()) {
  userPassword = prompt('Write a password, please', '');
  if (userPassword === null || userPassword === '') {
    alert('Canceled by the user');
  } else if (userPassword === 'boss') {
    alert('Welcome, my chief!');
  } else [alert('Wrong password!!!')];
} else {
  alert('Wrong login! Who are you!?');
}
