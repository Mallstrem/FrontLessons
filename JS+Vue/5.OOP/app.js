const sasha = {
    name: 'sasha',
    age: 28
}

const str = new String("hello wworlg");

function Product(brand, price, discount) {
    console.log(this);
    // 1 Создается новый объект
    // 2. На этот объект устанавливается ссылка this
    // 3. Функция возвращает этот объект
    this.brand = brand;
    this.price = price;
    this.discount = discount;

}

// При вызове метода, сначалп будет искатся в объекте, потом в прототипах
Product.prototype.getPriceWithDiscount = function() {
    return (this.price * (100 - this.discount)) / 100;
}

Product.prototype.setPrice = function(newPrice) {
    this.price = newPrice;
}

const apple = new Product("Apple", 100, 15);
console.log(apple);

const sumsung = new Product("Sumsung", 200, 20);

// Object.create
const protoForObj = {
    sayHello() {
        return 'Hello world';
    },
};

const obj = Object.create(protoForObj, {
    firstName: {
        value: 'Sasha',
    },
});

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

User.prototype.sayHallo = function() { // Не наследуется в прототип, надо в класс было добавить
    return `Hello, ${this.firstName} ${this.lastName}`;
}

const user = new User('Sasha', 'Pochkina');

//Customer
function Customer(firstName, lastName, membership) {
    User.call(this, firstName, lastName);
}

Customer.prototype = Object.create(User.prototype);

const customer = new Customer('Ivan', 'Ivanov', 'basic');

// ES6
class ProductES {
    constructor(brand, price, discount) { // Как обычно - не обязателен
        this._brand = brand;
        this.price = price;
        this.discount = discount;
    }

    get brand(){
        return brand;
    }

    set brand(name) {
        this._brand = name;
    }

    getPriceWithDiscount() {
        return (this.price * (100 - this.discount) / 100);
    }

    static plus(x, y) { // Нельзя вызвать в объекте, но можно вызвать как ProductES.plus()
        return x + y;
    }

    ['setPrice'](newPrice) {
        this.price = newPrice;
    }
}

const newProduct = new ProductES('Samsung', 200, 10);
console.log(newProduct);

class UserES {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class CustomerES extends UserES {
    constructor(firstName, lastName, membership) {
        super(firstName, lastName);
        this.membership = membership;
    }
}

const customerES = new CustomerES('Sasha', 'Poc', 'basic');
console.log(customerES);