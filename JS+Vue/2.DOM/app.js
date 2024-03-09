// Document Object Model
const div = document.querySelector("div");
console.log(div);
console.dir(div);

const title = document.querySelectorAll("h1"); // Снимок коллекции
console.dir(title);
console.log(Array.from(title));
console.log(Array.prototype.slice.call(title));

const h1 = document.getElementsByTagName("h1"); // Живая коллекция
console.log(h1);

// Brauser Object Model
// window
// navigator
// location

console.clear();

console.log(div.parentElement);
// Чем отличается parentElement от parentMode
const link = div.querySelector(".link");
console.log(link);

console.log(link.closest('.content')); // Ближайший родитель с селектором

// Атрибуты
console.log(div.classList);
div.classList.add('article', 'custom');
div.classList.remove('article');

console.log(div.classList.contains('custom'));

div.classList.toggle('toggle'); // Удобно по клику менять классы, переключает туда-сюда

console.log(link.href); // Можно разные свойства брать

div.setAttribute("id", "myId");
console.log(div.dataset);

// Манипуляции DOM
const title1 = document.querySelector("h1");
title1.innerHTML = '<span>text</span>';

title1.textContent = 'NewText';

// title1.appendChild('<span>appen</span>');
title1.insertAdjacentHTML("beforebegin", "<h2>title h2</h2>");

title1.innerHTML += '<span>new text</span>';
const span = title1.querySelector('span');
console.log(span);

title1.innerHTML += '<span>new text2</span>';
span.textContent = 'azazazaza';

// Создание элемента

const span1 = document.createElement('span');
span.textContent = "span created by create element";
span1.classList.add('myClass');
console.log(span1);
title1.appendChild(span1);

// DOM узел может быть только в 1 экземпляре

const fragment = document.createDocumentFragment();
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
    const item = document.createElement("div");
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);

// Удаление элементов

console.clear();

// События
// Events - любое действие пользователя (клики, ввод и т.д.)
// У отдельных элементов свои события

const btn = document.querySelector("button");
// btn.onclick = function() {
//     console.log("clicl");
// }
btn.addEventListener("click", function(e) {
    console.log(e);
});

// Снять со ссылки перехоод страницы
// e.preventDefault();

// Удаление события
// link.removeEventList("click");

const container = document.querySelector(".container");

btn.addEventListener("click", e => {
    const div = document.createElement("div");
    const nestedBtn = document.createElement("button");
    div.textContent = Math.random();
    nestedBtn.textContent = "click me";
    div.appendChild(nestedBtn);
    container.appendChild(div);
});

container.addEventListener("click", e => {
    
    if (e.target.tagName === 'BUTTON')
        console.log(e.target);
});

// Всплытие события
const btn_ = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");

btn_.addEventListener("click", e => {
    e.stopPropagation(); // Чтобы не срабатывали собития родителя (оберточного блока)
    console.log("click_btn");
});

wrap.addEventListener("click", e => {
    console.log("click wrap"); // Сначала события ребенка выполнятся, потом - родителя
}, 
true);

// Погружение - по умолчанию не отслеживается
// В addListener добавить третий параметр (объект), тогда будет отслеживаться и погружение
// Сначала погружение, потом всплытие