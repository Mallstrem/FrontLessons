const firstname = 'Sasha';
const lastname = 'Pochkina';
const age = 27;
const str = 'Hello!!!';

let value;

value = firstname + ' ' + lastname;
value += 'I am ' + age;
console.log(value);

value = firstname.length;
value = firstname[2];
console.log(value);

value = firstname.toUpperCase();
value = firstname.concat(' ', lastname);
console.log(value);

value = firstname.indexOf('h', 2); // Стандарт, найти подстроку с такого-то символа
console.log(value);

value = str.includes('my');
console.log(value);

value = str.slice(3, 7);
console.log(value);

value = str.replace('Sasha', 'Sashaaa');
console.log(value);

value = '<ul>' +
        '<li>first name: ' + firstname + '</li>' +
        '</ul>';
console.log(value);

// Что-то с DOM
// ES6
value = `
    <ul>
        <li>first name: ${firstname}</li>
        <li>last name: ${lastname}</li>
    </ul>
`;
document.body.innerHTML = value;

// Объекты

const user = {
    firstname: 'Sasha',
    age: 27,
    isAdmin: true,
    email: 'leksie@mail.ru',
    'user-address': {
        city: 'Moscow'
    },
    skills: ['html', 'css', 'js']
};
console.log(user);

let obj_value;
let prop = 'email';
obj_value = user.firstname;
obj_value = user['isAdmin'];
obj_value = user['user-address'].city;
obj_value = user['user-address']['city'];
obj_value = user[prop];

user.firstname = 'sashka';
obj_value = user.firstname;

// Если обратиться к несуществующему свойству, то в объекте создастся это свойство и туда запишется наше значение
user.info = 'love Vanja';
obj_value = user;

console.log(obj_value);