// Object descriptor
const car = {
    brand: 'Audi',
    year: 2019,
    get age() {
        return `Машина выпущена в ${this.year}`;
    },
    set age(value) {
        this.year = value;
    }
};

// Object.defineProperty(car, 'age', {
    // configurable: false, // Мы не сможем удалить указанное свойство, но можно перезаписать
    // enumerable: false, // Свойство станет неитерируемым, нельзя итерационные методы исп
    // writable: false, // Запись свойства

    // get: function() { // геттер можно использовать как свойство
    //     return `Машина выпущена в ${this.year}`;
    // }
// })

Object.defineProperty(window, 'globalVar', {
    set: function(value) {
        console.log(value);
        debugger;
    }
})

function foo() {
    globalVar = 10;
}
foo();