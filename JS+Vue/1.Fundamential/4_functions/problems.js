// Задача 1
function multiply() {
    let res = 1;
    if (arguments[0] == null)
        return 0;
    for (let i = 0; i < arguments.length; i++)
    {
        res *= arguments[i];
    }
    return res;
}
console.log(multiply())

// Задача 2
function reverseString(str) {
    let res = '';
    let subStr = String(str)
    for (let i = subStr.length - 1; i >= 0; i--)
    {
        res += subStr[i];
    }
    console.log(res);
    return res;
}
reverseString('test'); // "tset"
reverseString(''); // ''
reverseString(null); // llun
reverseString(undefined); // denifednu
reverseString(); // denifednu

// Задача 3
function unicodeString(str) {
    let subStr = String(str);
    let res = '';
    for (let i = 0; i < subStr.length; i++)
    {
        res += subStr[i].charCodeAt() + ' ';
    }
    res = res.trim();
    console.log(res);
    return res;
}
unicodeString('Hello');

// Задача 4
function game(num) {
    
    if (typeof(num) != 'number')
    {
        Error("Please provide a valid number");
        return 0;
    }
    let userNum = Number(num);
    if (userNum < 0 || userNum > 10)
    {
        Error("Please provide number in range 0 - 10");
        return 0;
    }
    let myNum = Math.random() * 10;
    myNum = myNum.toFixed();
    if (userNum == myNum)
        console.log('You win!');
    else
        console.log(`You are lose, Your number is ${userNum}, random number is ${myNum}`);
}
game(100);

console.clear();


// Задача 5
function getArray(num) 
{
    let arr = [];
    for (let i = 1; i <= num; i++)
    {
        arr.push(i);
    }
    return arr;
}
console.log(getArray(10))

// Задача 6
function doubleArray(arr) 
{
    let res = [];
    res = arr.concat(arr);
    return res;
}
console.log(doubleArray([1,2,3]));

// Задача 7
function changeCollection()
{
    let res = [];
    let buf;
    for (let i = 0; i < arguments.length; i++)
    {
        if(!(Array.isArray(arguments[i])))
        {
            console.log(arguments[i]);
            continue;
        }
        // buf = arguments[i].shift();
        // console.log(buf)
        arguments[i].shift();
        res.push(arguments[i]);
    }
    return res;
}
console.log(changeCollection([1,2,3], ['a', 'b', 'c']));

// Задача 8
const userArr = 
[
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    },
    {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    },
    {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
];

function filterUsers(arr, field, value)
{
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i][field] == value)
            res.push(arr[i]);
    }
    return res;
}

console.log(filterUsers(userArr, 'gender', 'female'));

console.clear();

// Задача 9
function firstFunc(arr, fn) {
    return `New value: ${fn(arr)}`;
}

// Подсказка: handler должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки
function handler1(arr) {
    let res = '';
    let buf;
    for (let i = 0; i < arr.length; i++)
    {
        buf = arr[i];
        res += buf[0].toUpperCase();
        res += buf.slice(1);
    }
    return res;
}

function handler2(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++)
    {
        res += arr[i];
        if (i != arr.length - 1)
            res += ', ';
    }
    return res;
}

function handler3(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++)
    {
        res += `${arr[i].name} is ${arr[i].age}`
        if (i != arr.length - 1)
            res += ', ';
    }
    return res;
}

function handler4(arr) {
    let res = '';
    let buf = '';
    for (let i = 0; i < arr.length; i++)
    {
        buf = String(arr[i]);
        for (let j = buf.length - 1; j >= 0; j--)
        {
            res += buf[j];
        }
        if (i != arr.length - 1)
            res += ', ';
        buf = '';
    }
    return res;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
console.log(firstFunc([10, 20, 30], handler2));
console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
console.log(firstFunc(['abc', '123'], handler4));

// Задача 10
function every(arr, fn) {
    if (!(Array.isArray(arr)))
        return 'Не массив!';
    if (!(fn instanceof Function))
        return 'Не функция!';
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        res.push(fn(arr[i], i, arr));
        if (!res[i])
            return false;
    }
    return true;
}

function check(el, i, arr) {
    if (el > 5)
        return true;
    else
        return false;
}

console.log(every([6, 7, 8, 9, 10, 0], check));

// Домашнее задание 7
// 1
const rectangle = {
    width: 14, 
    height: 10, 
    getSquare: function() {
        return this.width * this.height;
    }
};
console.log(rectangle.getSquare());

// 2
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        let disc = Number(this.discount.slice(0,this.discount.length - 1));
        console.log(disc);
        return this.price * (100 - disc) / 100; 
    }
};
console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5

// 3
const object = {
    height: 10,
    inc() {
        this.height++;
    }
}
object.inc();
console.log(object.height);

// 4
const numerator = {
    value: 1,
    double: function() {
        this.value *=2;
        return numerator;
    },
    plusOne: function() {
        this.value++;
        return numerator;
    },
    minusOne: function() {
        this.value--;
        return numerator;
    },
}
numerator
    .double()
    .plusOne()
    .plusOne()
    .minusOne();
console.log(numerator.value);

// 5
const product = {
    price: 150,
    count: 10,
    cost: function() {
        return this.price * this.count;
    }
}
console.log(product.cost());

// 6
const product2 = {
    price: 1000,
    count: 5,
    cost: product.cost,
}
console.log(product2.cost());

// 7
let sizes = {
    width: 5, 
    height: 10
},
    getSquare = function () {
        return this.width * this.height
    };
sizes.getSquare = getSquare;
console.log(sizes.getSquare());

// 8
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

// Домашнее задание 8
// 1
const sum = (...args) => {
    return args.reduce((prev, next) => {
        return prev + next; 
    });
}
console.log(sum(1, 2, 3, 4));
// console.log(sum());

// 2
const convertToObject = (num) => {
    return {
        value: num,
        isOdd: Boolean(num % 2)
    }
}
console.log(convertToObject(4));