const btnMsg = document.querySelector("#btn-msg");
btnMsg.addEventListener("click", e => {
    alert(btnMsg.getAttribute("data-text"));
});

btnMsg.addEventListener("mouseover", e => {
    btnMsg.classList.add("red_butt");
});

btnMsg.addEventListener("mouseout", e => {
    btnMsg.classList.remove("red_butt");
});

const idTag = document.querySelector("#tag");
const body = document.querySelector("body");
body.addEventListener("click", e => {
    idTag.textContent = e.target.tagName;
    // console.log(e.target);
});

let liNum = 2;
const ul = document.querySelector("ul");
const btnGnrt = document.querySelector("#btn-generate");
btnGnrt.addEventListener("click", e => {
    const num = ul.children.length;
    console.log(num);
    let li = document.createElement("li");
    li.textContent = "Item " + (num + 1);
    ul.appendChild(li);
});



// Вопросы к этому заданию

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д