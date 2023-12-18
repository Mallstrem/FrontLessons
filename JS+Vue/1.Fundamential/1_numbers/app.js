//alert('Hello kek');
console.log(202);
var name = 'Sasha';
console.log(name);

var age;
console.log(age);
age = 27;
console.log(age);

// Используют в особых случаях:
var $name = 'Kiss';
var _name = 'KissKiss';

// camelCase

console.clear();
// var можно несколько раз определить, а let позволяет работать с переменными так, чтобы используемое имя задавалось только один раз
let nickname = 'Malstream';
console.log(nickname);

const firstname = 'Tom';
console.log(firstname);

const user = {
    name: 'Sasha',
    age: 27
};

console.log(user);
user.age = 27.5;
console.log(user);

// Преобразование типов
console.clear();

let value;
value = 10;
console.log(value);
console.log(typeof value);

// Number to String
value = String(10);
console.log(typeof value);

value = String(10 + 40); //50

value = (40).toString();

// Boolean to String
value = String(true);
console.log(value);
console.log(typeof value);

// Array to String
value = String([1, 2, 3])
console.log(value);

// Object to String
value = String({name: 'Sasha'});
console.log(value);

value = 30 + ''; // Конкатенация, неявное преобразование в строку
value = 30 - 'dg';
console.log(value);

value = 30 - '5'; // Неявное преобразование в число
console.log(value);
console.log(typeof value);

value = true + 10; // Неявное преобразование, 11

// String to Number
value = Number('23');
value = Number(true); // 1
value = Number(null); // 0
value = Number([1, 2, 3]); // NaN

value = parseInt('200dfgsh');  // 200
value = parseInt('sfgs200dfgsh'); // Nan

value = parseFloat('200.212gffh'); // 200.212

// String to Boolean
value = Boolean('bbxgf'); // true
value = Boolean(undefined); // false
value = Boolean([]); // true

// Numbers
const num1 = 10;
const num2 = 20;
let value2;
// % - остаток от деления
// ++ и += тоже работают
// 0.6 + 0.7 = 1.2999999999999998
// value.tofixed(1); - округлит до одного знака после запятой и превратит в стринг.)

// Math - объект для работы с математикой
// Math.PI;
// Math.rendom();