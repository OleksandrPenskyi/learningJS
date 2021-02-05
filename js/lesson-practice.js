// !Пример 1
// Для трех массивов целых чисел верните сумму элементов, общих для всех трех массивов.

// common([1, 2, 3], [5, 3, 2], [7, 3, 2]) = 5;
// common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) = 7;

// const newFn = function (arr1, arr2, arr3) {
//   let temporaryArr = [];

//   arr1.forEach(item => {
//     if (arr2.includes(item) && arr3.includes(item)) {
//       temporaryArr.push(item);
//     }
//   });

//   let total = temporaryArr.reduce((accum, item) => {
//     return accum + item;
//   }, 0);

//   return total;
// };

// console.log(newFn([1, 2, 3], [5, 3, 2], [7, 3, 2]));
// console.log(newFn([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

// !Пример 2
// Напишите алгоритм, который берет массив
// и перемещает все нули в конец, сохраняя порядок других элементов.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// const moveZeros = function (arr) {
//   let temorarryArr = [];
//   let arrForNull = [];
//   arr.forEach(item => {
//     if (item === 0) {
//       arrForNull.push(item);
//     } else {
//       temorarryArr.push(item);
//     }
//   });
//   //   console.log(temorarryArr);
//   //   console.log(arrForNull);

//   let resultArr = [...temorarryArr, ...arrForNull];
//   return resultArr;
// };

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

// // !Пример 3
// // Напишите код, который сделает из массива объект

// var arr = [
//   { name: 'width', value: 10 },
//   { name: 'height', value: 20 },
// ];

// const toObject = function (arr) {
//   let newObj = {};

//   arr.forEach(item => {
//     newObj[item.name] = item.value;
//   });

//   return newObj;
// };

// console.log(toObject(arr));
// // Результат: {width: 10, height: 20}

// !Пример 4
// // Напишите функцию, которая принимает массив объектов
// // Функция должна возвращать объект, который содержит
// // два свойства male и female.
// // Результат выполнения функции sortByGender(students):
// const students = [
//   { name: 'Olha', gender: 'female' },
//   { name: 'Oleh', gender: 'male' },
//   { name: 'Kristi', gender: 'female' },
// ];

// const sortByGender = function (students) {
//   let result = {};
//   let maleArr = [];
//   let femaleArr = [];
//   students.forEach(item => {
//     if (item.gender === 'male') {
//       maleArr.push(item);
//     } else {
//       femaleArr.push(item);
//     }
//   });

//   //   console.log(maleArr);
//   //   console.log(femaleArr);
//   result.male = maleArr;
//   result.female = femaleArr;
//   return result;
// };

// console.dir(sortByGender(students));

// !Пример 5
// class Component {
//   style = {
//     display: 'block',
//   };

//   constructor(tag) {
//     this.tag = tag;
//   }

//   hide() {
//     this.style.display = 'none';
//   }
//   show() {
//     this.style.display = 'block';
//   }
// }

// class Box extends Component {
//   constructor({ tag, size, color }) {
//     super(tag);
//     this.size = size;
//     this.backgroung = color;
//   }

//   getProps() {
//     console.log(
//       `Tag: ${this.tag}; Width: ${this.size}; Height: ${this.size}; Background: ${this.backgroung}; Display: ${this.style.display}`,
//     );
//   }
// }

// const box1 = new Box({
//   tag: '<div></div>',
//   size: 100,
//   color: 'green',
// });
// box1.hide();
// box1.getProps();

// const box2 = new Box({
//   tag: '<div></div>',
//   size: 50,
//   color: 'red',
// });

// box2.getProps();

// !Пример 6
// Есть несколько слов, определить состоят
// ли они из одних и тех же букв('кот', 'ток', 'окт')

// const newFn = function (str1, str2, str3) {
//   const arr1 = str1.split('');
//   const arr2 = str2.split('');
//   const arr3 = str3.split('');

//   const result = arr1.every(item => arr2.includes(item) && arr3.includes(item));
//   return result;
// };

// console.log(newFn('кот', 'ток', 'окт'));
