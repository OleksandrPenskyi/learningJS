// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         const indexOfArr = this.potions.indexOf(this.potions[i]);
//         this.potions.splice(indexOfArr, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//       if (item.name === oldName) {
//         item.name = newName;
//       }
//     }
//   },
//   // Пиши код выше этой строки
// };

// // console.log(atTheOldToad.getPotions());
// // // Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает
// // // [{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].

// // atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// // console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// // atTheOldToad.removePotion('Дыхание дракона');
// console.log(atTheOldToad.getPotions());

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   blacklistedEmails = [];
//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// console.log(mango);

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter(e => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// person

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let newArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }

//   return newArr;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

const allCategories = document.querySelectorAll('.item');
const quantityOfCategories = `В списке ${allCategories.length} категории.`;
console.log(quantityOfCategories);

const titleElement = document.querySelectorAll('li.item');
const result = titleElement.forEach((item, idx) => {
  console.log(`Для категории №${idx + 1}:`);
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
