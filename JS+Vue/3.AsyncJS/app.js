// Асинхронность, event loop
// Глобальная память - куча?
// call stack - стек вызовов
// Глобальный и локальный контекст
// Однопоточность

// Что происходит при загрузке кода движком браузера?
// Помещает в глобальную память (кучу) переменные и объявления функции
// Отправляет вызов каждой функции в стек вызовов
// Создает глобальный контекст исполнения, в котором исполняются глобальные функции
// Создает много маленьких локальных контекстов исполнения(если есть внутренние переменные или вложенные функции)

// Вывод 1243
console.log(1);
console.log(2);
// Надо раскоментить будет для изучения задачи
// setTimeout(() => {
//     console.log(3);
    
// }, 0);
console.log(4);

function a() {
    console.log('a');
}

function b() {
    console.log('b');
}

a();
b();

console.clear();

// Ajax
const btn = document.querySelector('.btn-primary');
const btnAddPost = document.querySelector('.btn-danger');
const container = document.querySelector('.container');

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")

    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send();
}

function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")

    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader("Content-type", 'application/json; charset=UTF-8')

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.title;
    const article = document.createElement("p");
    article.classList.add("card-text");
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);

    card.appendChild(cardBody);
    return card;
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

btn.addEventListener('click', e =>
{
    getPosts((response) => {renderPosts(response)});
});

btnAddPost.addEventListener('click', e => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    createPost(newPost, (response) => {
        console.log(response);
        const card = cardTemplate(response);
        container.insertAdjacentElement("afterbegin", card);
    });
});

// Отладка Ajax
// Вкладка Сеть - можно посмотреть, что будет при слабом интернете

// CORS - помогает распределять, какие данные и как мы получаем
// Браузер так обезапашивает сервер

function getGmail() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://gmail.com")

    xhr.addEventListener("load", () => {
        // const response = JSON.parse(xhr.responseText);
        // cb(response);
        console.log(xhr.responseText);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send();
}

function myHttpRequest({method, url} = {}, cb) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
    
        xhr.addEventListener("load", () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. status code: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
        });
    
        xhr.addEventListener("error", () => {
            console.log("error");
        });
    
        xhr.send();
    }
    catch (error) {
        cb(error);
    }

}

// myHttpRequest({method: "GET",
//                 url: "https://jsonplaceholder.typicode.com/posts",
//             },
//             (err, res) => {
//                 console.log(err, res);
//             });

function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("Get", url)
            
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });
            
                xhr.addEventListener("error", () => {
                    console.log("error");
                });
            
                xhr.send();
            }
            catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("Post", url)
            
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });
            
                xhr.addEventListener("error", () => {
                    console.log("error");
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => 
                    {
                        xhr.setRequestHeader(key, value);
                    })
                }
            
                xhr.send(JSON.stringify(body));
            }
            catch (error) {
                cb(error);
            }
        }
    }
}

const myHttp = http();
myHttp.post("https://jsonplaceholder.typicode.com/posts", {
    title: 'foo',
    body: 'bar',
    userId: 1,
}, {'Content-Type': 'application/json', 
    'x-auth': 'zbjgjesfj7483578bhsgiu4'},
(err, res) => {
    console.log(err, res);
}); 

// Promises
function getPost(id) {
    return new Promise((resolve, reject) => {
        myHttp.get('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
            if (err)
                reject(err);
            resolve(res);
        })
    })
}

function getPostComment(post) {
    const {id} = post;
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err)
                reject(err);
            resolve({post, comments: res});
        })
    })
}

function getUserCreatedPost(data) {
    const{post: {userId}} = data;
    console.log(userId);
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
            if (err)
                reject(err);
            resolve({...data, user: res});
        })
    })
}

getPost()
    .then(post => getPostComment(post))
    .then(data => getUserCreatedPost(data))
    .then(fullData => console.log(fullData))
    .catch(err => console.log(err))
    .finally(() => console.log("finally"));

// Promise All
// Promise.all([
//     getPost(1),
//     getPostComment(1),
//     getUserCreatedPost(1)
// ]).then(fulldata => console.log(fulldata));