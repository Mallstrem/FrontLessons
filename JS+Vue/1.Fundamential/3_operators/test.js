let a = 0 || 'string';
console.log(a);

a = 1 && 'string';
console.log(a);

a = null || 25;
console.log(a);

a = null && 25;
console.log(a);

a = null || 1 || 35;
console.log(a);

a = null && 0 && 35;
console.log(a);

let value = 12 + 14 + '12'
console.log(value);

value = 3 + 2 - '1'
console.log(value);

value = '3' + 2 - 1
console.log(value);

value = true + 2
console.log(value);

value = +'10' + 1
console.log(value);

value = undefined + 2
console.log(value);

value = null + 5
console.log(value);

value = true + undefined
console.log(value);

let param = 3
if(param == 0)
    param = 1;
else if (param < 0)
    param = 'less then zero';
else param *= 10;
console.log(param);

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5)
{
    console.log('Need Repair');
    car.needRepair = true;
}
else
    car.needRepair = false;
console.log(car);

let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
if (item.discount != NaN && item.price != NaN)
{
    item.priceWithDiscount = parseFloat(item.price) * (100 - parseFloat(item.discount)) / 100;
    console.log(item.priceWithDiscount);
}
else
    console.log(item.price);

let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (parseFloat(product.price) >= min && parseFloat(product.price) <= max)
    console.log(product.name);
else
    console.log('Товаров не найдено');

console.clear();

let A = 'none';
switch(A)
{
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}

let B = 'hidden';
B = 'hidden' ? 'visible' : 'hidden';
console.log(B);

let C = 1;
C = 0 ? 1 : (C < 0) ? 'less then zero' : C * 10;
console.log(C);

console.clear();

let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++)
{
    if (i == 0 || str[i-1] == ' ')
        res += str[i].toUpperCase();
    else
        res += str[i];
}
console.log(res);

str = 'tseb eht ma i';
res = '';

for (let i = str.length - 1; i >= 0; i--)
{
    res += str[i];
}
console.log(res);

let numb = 10;
res = 1;
for (let i = 1; i <= numb; i++)
    res *= i;
console.log(res);

str = 'JavaScript is a pretty good language';
res = '';
for (let i = 0; i<str.length; i++)
{
    if (i == 0 || str[i-1] == ' ')
        res += str[i].toUpperCase();
    else
        res += str[i]; 
}
res = res.replaceAll(' ', '');
console.log(res);

let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let el of mas)
{
    if (el % 2 == 1)
        console.log(el);
}

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
    }

for (let el in list)
{
    if (typeof(list[el]) === 'string')
        list[el] = list[el].toUpperCase();
}
console.log(list);