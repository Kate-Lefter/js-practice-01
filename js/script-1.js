// const min = 6;
// const max = 20;
// let price = 0;

// for (let i =min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('Не четное число', i);
//        continue;
//     }
//     console.log('четное число', i);
//     price += i;
// }
// console.log('price', price);

// switch (star) {

//     case 1:
//     price = 20;
//      break ;

//      case 2:
//      price = 30;
//      break ;

//     case 3:
//      price = 40;
//      break;
    
// } console.log(price);

// if (star === 1 || star === 2) {
//     price = 20;
// } else if (star === 3 || star === 4) {
//     price = 50;
// } else if (star === 5 || star === 6) {
//     price = 70;
// } else if (star === 7 || star === 8) {
//     price = 200;
// } else {
//  console.log("Нет резельтата ");
// }console.log(price);

// const fnA = function (massage, callback) {
//  console.log(massage);

// //  console.log(callback);
//  callback(100);
// };

// const fnB = function (number) {
//  console.log('Это лог при вызосе fnB', number);
// };

// fnA ('fsdsjf', fnB);



// const doMath = function (a, b , callback) {
//     const result = callback(a, b);

//     console.log(result);
// };
 
// const att = function (x, y) {
//     return x + y;
// };
// const add = function (x, y) {
//     return x * y;
// };

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(2, 3, add);
// doMath(745, 345, function (x, y) {
//     return x - y;
//     });




// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const abb = function (x, y) {
//     return x * y;
// };
// doMath(45, 5, abb);
// doMath(75, 12, function (x, y) {
//     return x - y;
// });

// doMath.addEventListener 


// const callback = function () {
//     console.log('Перезапуска через 3 секунды');
// };
// console.log('Нет запуска, ожидаем');
// setTimeout(callback,3000);
// console.log('Отложен запуск');

//----------------------------------------------------------callbeck-----------------------------

// const filter = (arrey, callback) =>{
//  const filterArrey = [];
//  for (const el of arrey) {
//      console.log(el);
//      const passed = (callback(el));
//      if (passed) {
//         filterArrey.push(el);
//      }
//  }
//  return filterArrey;
// };

// const callback1 = value => value >= 3;

// const callback2 = value => value >= 5;
// console.log(filter([1,2,3,4,5,6], callback1));
// console.log(filter([1,2,3,4,5,6,7,8,9], callback2));
//--------------------------------------------------------возврат--callback--------------

// const fnA = function (parameter) {
//  const innerVareable = 'Что пишем сюда parameter';

//  const innerFunction = function () {
//      console.log(innerVareable);
//      console.log('Это текст какойто для чегото innerFunction ');
//  };
//  return innerFunction;
// };

// const fnB = fnA ();
// fnB();
// console.log(fnB);


// const fnAdd = function (shefName, diner) {
//  console.log(`Шеф ${shefName} приготовил ${diner}`);
// };

// fnAdd ('Mango', 'блинчики');
// fnAdd ('Mango', 'омлет');
// fnAdd ('Mango', 'пельмени');
// fnAdd ('Mark', 'суп');
// fnAdd ('Mark', 'бургер');
// fnAdd ('Mark', 'торт');

// const makeShef = function (name) {
//     const fnAdd = function (add) {
//         console.log(`Шеф ${name} приготовил ${add}`);
//     };
//  return fnAdd;
// };

// const mango = makeShef ('Mango');
// console.dir(mango);

// mango('торт');
// mango('бургер');

// const mark = makeShef ('Mark');

// mark('пельмени');
// mark('омлет');


// const bookShelf = {
//     authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };
  
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
//   bookShelf.addAuthor("Ли Танит");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// function foo() {
//     console.log(this);
//   }
  
//   foo(); // window без "use strict" и undefined с "use strict"

// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis(); // this in showThis: Window
  
//   const user = {
//     username: "Mango",
//   };
  
//   // Записываем ссылку на функцию в свойство объекта
//   // Обратите внимание, что это не вызов - нет ()
//   user.showContext = showThis;
  
//   // Вызываем функцию в контексте объекта
//   // this будет указывать на текущий объект, в контексте
//   // которого осуществляется вызов, а не на глобальный объект.
//   user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


// function foo() {
//     console.log(this);
//   }
  
//   foo(); // window без "use strict" и undefined с "use strict"
// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//   showThis(); // this in showThis: window
  
//   const user = {
//     username: "Mango",
//   };
//   user.showContext = showThis;
  
//   user.showContext(); // this in showThis: window

// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//       const foo = () => {
//         // Стрелки запоминают контекст во время объявления,
//         // из родительской области видимости
//         console.log("this in foo: ", this);
//       };
  
//       foo();
//       console.log("this in showThis: ", this);
//     },
//   };
  
//   hotel.showThis();
//   // this in foo: {username: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Поли",
//   };
  
//   greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
//   greetGuest.call(poly, "С приездом"); // С приездом, Поли.

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage);

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };
  
//   employee.getWage();
//   console.log(employee);

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // { name: 'Манго', __proto__: animal }
//   console.log(animal.isPrototypeOf(dog)); // true

// const animal = {
//     eats: true,
//   };
//   const dog = Object.create(animal);
//   dog.barks = true;
  
//   const dogKeys = Object.keys(dog);
  
//   console.log(dogKeys); // ['barks']

// class User {
//     // Необязательное объявление публичных свойств
//     name;
//     // Обязательное объявление приватных свойств
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
//   });
//   mango.changeEmail("mango@supermail.com");
//   console.log(mango.getEmail()); // mango@supermail.com
//   console.log(mango.#email); // Будет ошибка, это приватное свойство

// let processed = 0;

// function processedArg(num) {
//     return (num + 3) / 5;
// };

// processed = processedArg(7);

// function nextInLine(arr, item) {
  //   // Змініть код лише під цим рядком
  // arr.push(6);
  // arr.shift()
  //   return item;
  //   // Змініть код лише над цим рядком
  // }
  
  // // Налаштування
  // const testArr = [1, 2, 3, 4, 5];
  
  // // Відобразити код
  // console.log("Before: " + JSON.stringify(testArr));
  // console.log(nextInLine(testArr, 6));
  // console.log("After: " + JSON.stringify(testArr));
  
  const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}]
 products.forEach(function(num, i, nums) {
  console.log( );
});
