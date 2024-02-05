// Задание 9
// 1
const Arr = [1,2,3,5,8,9,10];
const arrOdd = Arr.reduce((acc, el) => {
  acc[el] = Boolean(!(el%2));
  return acc;
}, {});
console.log(arrOdd);

// 2
const arr = [12, 4, 50, 1, 0, 18, 40];
const arrSomeNull = arr.some((el) => el === 0);
console.log(arrSomeNull);

// 3
const str = ['yes', 'hello', 'no', 'easycode', 'what'];
const strEveryMore3 = str.every((el) => el.length > 3);
console.log(strEveryMore3);

// 4
const word =  [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];
const oneWord = word
                .sort((prev, next) => prev.index - next.index)
                .reduce((acc, el) => {
                  acc += el.char;
                  return acc;
                }, '');
console.log(oneWord)

// 5
const arrOfArr = [[14, 45], [1], ['a', 'c', 'd']];
const sortArrOfArr = arrOfArr.sort();
console.log(sortArrOfArr);

// 6
const cpuArr = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];
const sortCpuArr = cpuArr.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(sortCpuArr);

// 7
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
function filterCollection(arr, minPrice, maxPrice)
{
  let newArr = arr
                .filter(el => el.price >= minPrice && el.price <= maxPrice)
                .sort((prev, next) => prev.price - next.price);
  return newArr
}
console.log(filterCollection(products, 15, 30))