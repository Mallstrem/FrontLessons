// Операторы
// Сравнения: >, <, >=, <=, ==, ===, !=, !==
// Строгое равенство (===) - совпадает вплоть до типа
// Строгое неравенство (!==) - не равны по типу в том числе

let value;
value = 10;

if (value === 10) {
    console.log('lol');
}
else {
    console.log('not lol')
}

// Логические операторы
// || && !

value = [];

if (value.length)
{
    console.log(value);
}
else
{
console.log('');
}

Array.isArray(value);

let user = {
    name: 'Sasha'
};

if(user.name)
{
    console.log(user.name);
}
else
{
    console.log('else');
}

user.hasOwnProperty('name');

// Странное использование или
let serverNickName = 'Sasha';
let nickName = serverNickName || 'Default';

console.log(nickName);

console.clear();

let a = 4;
let b = 0;

// a > 0 ? b = a : b += 1;
b = a > 0 ? a : b + 1;
console.log(b);

let color = 'orange';
switch(color)
{
    case 'yellow':
        console.log('Color is yellow');
        breake;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Color is unknown');
}

console.clear();

// while, do while, for, for of, for in
let i = 0;
while(i < 10)
{
    console.log(i);
    i++;
}

do {
    console.log('action');
    i--;
} while (i < 0);

for (let j = 0; j < 10; j++)
{
    console.log(j);
}

console.clear();

let str = 'Hello';
let res = '';

for (let j = 0; j < str.length; j++)
{
    console.log(str[j]);
}

// break и continue тоже существуют в js

// for in для объектов
const user2 = {
    name: 'Sasha',
    age: 27
};

for (let key in user2)
{
    console.log(key);
    console.log(user2[key]);
}

// for of для массивов
let users = [
 {name: 'Sasha',
age: 27}
];

for (let value of users)
{
    console.log(value);
}