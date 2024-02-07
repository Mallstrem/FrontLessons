// Задание 10
// 1
function minus(val = 0) {
    return function(num = 0) {
        return val -= num;
    }
}
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

// 2
function multiplyMaker(val = 1) {
    let res = val;
    return function(num = 1) {
        return res *= num;
    }

}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3
function moduleStr() {
    let res;
    return {
        letStr(value = '') {
            res = String(value);
            return res;
        },
        getStr() {
            return res;
        },
        getLen() {
            return res.length;
        },
        getReverse() {
            let reverse = '';
            for(let i = res.length - 1; i >= 0; i--)
                reverse += res[i];
            return reverse;
        }
    };
}

const mdlStr = moduleStr();
console.log(mdlStr.letStr('abcde'));
console.log(mdlStr.getStr());
console.log(mdlStr.getLen());
console.log(mdlStr.getReverse());

// 4
function moduleCalc() {
    let res = 0;
    return {
        letNum(val) {
            res = val;
            return true;
        },
        getNum() {
            return res;
        },
        add(val) {
            res += val;
            return true;
        },
        mult(val) {
            res *= val;
            return true;
        },
        minus(val) {
            res -= val;
            return true;
        },
        pow(val) {
            res = Math.pow(res, val);
            return true;
        }
    }
}

const mdlNum = moduleCalc();

console.log(mdlNum.letNum(10));
console.log(mdlNum.add(5));
console.log(mdlNum.mult(2));
console.log(mdlNum.getNum());

// Задание 11
// 1
function func(first, ...other) {
    return {
        first: first,
        other: other
    }
}

console.log(func('a', 'b', 'c', 'd'));

// 2
const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

function getInfo(obj) {
    let {
        name,
        info: {
                partners: [partName1, partName2,],
            }
    } = obj
    console.log('Name: ', name);
    console.log('Partners: ', partName1, partName2);
}

getInfo(organisation);

// 3
let user_ = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": ["aliquip", "anim", "exercitation", "non",],
    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },
      {
        "id": 1,
        "name": "Santana Cruz"
      },
      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
};

// const {name, balance, email} = user_;
// console.log(name, balance, email);

const [tags1, , , tagsN] = user_.tags;
console.log(tags1, tagsN);

const {"friends": [{name}]} = user_;
console.log(name);

// 4
const {tags, friends} = user_;
console.log(tags);
console.log(friends);
