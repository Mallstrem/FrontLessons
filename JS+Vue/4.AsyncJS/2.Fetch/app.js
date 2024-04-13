// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err));

// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => resolve(post))
//             .catch(err => reject(err));
//     });
// }

// // getPost(1).then(post => console.log(post));

// function getPost2(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(response => response.json())
// }

// getPost2(1).then(po(st => console.log(post))
//             .catch(err => console.log(err)));

// async await
async function getPost(id) { // async всегда возвращает promise 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const data = await response.json();
    return data;
}

getPost(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));

async function getAll() {
    const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
    console.log(res1, res2);
} 

getAll();