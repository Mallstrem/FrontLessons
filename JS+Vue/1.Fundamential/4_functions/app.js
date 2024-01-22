// function declaration
function sayHello(firstName = 'lol', lastName = 'kek') {
    console.log(firstName, lastName);
    console.log('Hello world');
    return `Hello ${firstName} ${lastName}`;
}

let res = sayHello('Sasha', 'Pochkina');
console.log(res); // если функция ничего не возвращает, то вернется undefinid
console.error('Error!');
console.log(sayHello());

let x = 10;
function foo() {
    let x = 20;
    console.log(x);
}
foo();
console.log(x);
// Сначала любая переменная ищется внутри функции, затем в параметрах, а потом глобально

const user = {
    name: 'Sasha',
    age: 27
};
function getObj(obj) {
    console.log(obj);
    obj.name = 'Sashka';
}
getObj(user); // Объекты, массивы и проч передаются по ссылке

// function expression
const square = function(x) {
    return x * x;
};

// самовызывающиеся функции - основной код часто заворачивают, для инкапсуляции глобального пространства
(function (msg) {
    console.log(msg);
})('Hello');

function func(x) {
    console.log(x);
    console.log(arguments); // можно как с массивом работать
}
func(11, 'string', [1,2,3]);

console.clear();

// Массивы
const numArr = [2, 22,1234, 54, 323];

let valueArr;
valueArr = numArr.length;
// numArr.length = 0 - сделает пустой массив, это свойство можно перезаписать
valueArr = Array.isArray(numArr); // Является массивом?
numArr[2] = 2;
valueArr = numArr.indexOf(22); // Поиск номера,где лежит элемент
// Push и Pop
valueArr = numArr.push(100);
valueArr = numArr.pop(); // Удалит последний эл.
valueArr = numArr.unshift(111); // Добавляет в начало
valueArr = numArr.shift(); // Удаляет вначале
valueArr = numArr.slice(0, 2); // Возьмет от такого-то номера столько элементов
valueArr = numArr.splice(1, 1, 'one'); // Из исходного массива удалит с индекса столько элементов. Позволяет также добавить элементы.
valueArr = numArr.reverse(); // Меняет исходный массив
valueArr = numArr.concat(numArr);
valueArr = numArr.join(' ') //  Сливает массив в строку с разделителем
valueArr = 'hello world'.split(''); // Разбивает строку в массив по разделителю

console.log(valueArr, numArr);

console.clear();

// Функции высшего порядка
// Функции - это объекты
function foo() {
    console.log("Hello world");
}

foo();

foo.field = 'Sasha';

console.log(foo.field);

// Функции высшего порядка - функции, которые принимают в качестве параметров другие функции, или возвращают их

const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];
let newArr = [];
for (let i = 0; i < arr.length; i++)
{
    newArr.push(arr[i].length);
}
console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++)
{
    newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2);

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return(res);
}

function nameLength(el) {
    // console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

console.log(mapArray(arr, nameLength));
console.log(mapArray(arr, nameToUpperCase));

// Пример, когда возвращают простые функции
function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    }
}

const testGreeting = greeting('Sasha');
console.log(testGreeting);
console.log(testGreeting('Pochkina'));

const fullName = greeting('Sasha')('Pochkina');
console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'что такое JavaScript?',
        teacher: 'какой предмет вы ведете?'
    }

    return function(name) {
        return `${name}, ${jobDictionary[job]}`;
    }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Sasha'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Sasha'));

console.clear();

// Контекст вызова функции. This
// This - глобально будет окно вызова
function getThis() {
    console.log(this);
}
getThis();
console.log(window.getThis);

function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,//: function() {
    //     console.log(this.price);
    // },
    info: {
        information: ['2.3ghz'],
        getInfo: function() {
            console.log('this');
        },
    },
    getName() {
        console.log(this.name);
    }
};
prod1.getPrice();
prod1.info.getInfo();
prod1.getName();

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice
};

prod2.getPrice();

prod2.getName = prod1.getName;
prod2.getName();

let str = 'Hello world';
const reverseStr = str
    .split('')
    .reverse()
    .join('');
console.log(reverseStr);

const prod3 = {
    name: 'Intel',
    price: 200,
    getName,
    getPrice,
};
prod3
    .getName()
    .getPrice();

const prod4 = {
    name: 'Intel',
    price: 200,    
};
getPrice.call(prod4, '*');
getPrice.apply(prod4, ['*']);

// Потеря контекста
const getPriceBind = prod3.getPrice.bind(prod3, '*')
console.log(getPriceBind);
setTimeout(prod3.getPrice, 1000);
setTimeout(getPriceBind, 1000);

console.clear();

// Стрелочные функции
const plus = (x = 0, y = 0) => x + y;
function plusFoo(x, y) {
    return x + y;
}
console.log(plus(1, 2));

// Вариации
const withoutArgs = () => console.log('Hello world');
const singleArg = x => x * 2; // Для параметра по умолчанию круглые скобки нужны
const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};
console.log(moreActions(2, 2));
const returnObj = (str = '') => ({
        value: str,
        length: str.length
    });
console.log(returnObj('Hello'))

// Отличия:
// Псевдоколлекция Arguments только у стандартных функций
// Стрелочные функции не имеют контекста, они берут его на уровень выше
// К обеим можно применить call и apply
// Можно в стрелочную функцию передать как колбэк таймаут
const obje = {
    age: 27,
    getAgeArrow: null,
    getAge() {
        this.getAgeArrow = () => console.log(this.age);
    }
}
obje.getAge();
obje.getAgeArrow();

console.clear();




