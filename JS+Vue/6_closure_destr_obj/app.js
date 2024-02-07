// Замыкание - это функция, которая ссылается на свободные переменные
// Функция имеет доступ к окружению, в котором она была создана и выше.
function getFullName(firstName, lastName) {
    // console.log(firstName, lastName);
    return function() {
        return `${firstName} ${lastName}`;
    }
}

const getName = getFullName('Sasha', 'Pochkina');
console.log(getName());

function updateValue(val = 0) {
    let x = val;
    return function(num = 0) {
        return x += num;
    }
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);
console.log(updtVal(1));
console.log(updtVal(3)); // Контекст x запоминается
console.log(updtVal2(10)); // Другой контекст

// Хотим скрыть переменный и вернуть только набор методов
function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    }
}

const check = checkCred();
console.log(check.checkLogin('test')); // Нет прямого доступа к логину и паролю

function closureExample() {
    const arrOfFunc = [];
    let value = '';
    for (let i = 0; i < 10; i++) { // Если let заменить на var, то i будет выводиться как 10
        value += i;
        arrOfFunc.push(function() {
            console.log(value, i);
        });
    }
    return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();

console.clear();

// Методы объектов
let obj1 = {
    name: 'Sasha',
    info: {
        skills: ['html', 'css'],
    }
};

let obj2 = {
    name: 'Ivan',
    age: 28,
};

let newObj = obj1; // Ссылка на объект1
let newObj_ = Object.assign({}, obj1, obj2); // Переопределяет первый элемент
console.log(newObj_);

newObj = JSON.parse(JSON.stringify(obj1)); // Глубокое копирование, даже если есть вложенность объектов
console.log(newObj);

let keys = Object.keys(obj2);
console.log(keys);

let values = Object.values(obj2);
console.log(values);

let entries = Object.entries(obj2);
console.log(entries);

let fromEntries = Object.fromEntries([['a','value']]);
console.log(fromEntries);

console.clear();

// Деструктуризация
// Нуж ны для упрощения структур
const user = {
    firstName: 'Sasha',
    lastName: 'Pochkina',
    info: {
        skills: ['sql', 'html', 'css'],
        work: 'VTT'
    }
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// Проще
//const {firstName: name, lastName, age = 28} = user; // Age присвоится по умолчанию, если объекта нет

//console.log(name, lastName, age);

// const {info: {wokr}} = user;

const colors = ['white', 'black', 'red'];
const [w, b, rd, gr = 'green'] = colors;
console.log(w, b, rd, gr);

const names = ['Sasha', 'Vera', 'Oleg'];
const [, name2, name3] = names;
console.log(name2, name3);

const nestedArr = ['Hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
console.log(key, value);

const [name1, ...otherNames] = names; // otherNames - массив
// const [...newNames] = names;
const newNames = [...names];
console.log(...newNames);

const colorNames = ['some value', ...colors, ...names];
console.log(colorNames);

const newUser = {...user, age: 30};
console.log(newUser);

// Смешанная деструктуризация
const { info: {
    skills: [html, css],
}} = newUser;

function myPerson({lastName = '', firstName = ''} = {}) {
    console.log(lastName);
}

myPerson(newUser); // Без переменной будет андефайнд, если нет значений по умолчанию

function foo(x, y, ...others) {
    // console.log([].slice.call(arguments));
    const [...args] = arguments;
    console.log(args);
}

foo(1, 2, 5, 6);

const numbers = [2, 3];
function foo2(x, y) {
    console.log(x, y);
}

foo2(...numbers);

console.clear();
