// Вложенность колбеков ведет к тому, что непонятно, на каком из запросов произошла ошибка.
// Promise - помогает асинхронный код сделать синхронным
// Одна точка выхода в ошибку
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 10000);//resolve(Math.random()), 10000);
})

console.log(promise);

// Promise в конце может содержать catch
promise.then(x => {console.log(x); return x;}).then(y => console.log(y)).catch(err => console.log(err));

