let ul = document.querySelector("ul");
for (let i = 0; i < 6; i++)
{
    let li = ul.appendChild(document.createElement("li"));
    li.classList.add("new-item");
    let a = li.appendChild(document.createElement("a"));
    a.href = "#";
    a.textContent = `item ${i+1}`;
}

let li = document.querySelectorAll("li");
for (el of li)
{
    let ahref = el.firstChild;
    let a = ahref.appendChild(document.createElement("strong"));
}

let body = document.querySelector("body");
body.prepend(document.createElement("img"));
let img = document.querySelector("img");
img.alt = "Проклятый старый дом";
img.src = "https://avatars.dzeninfra.ru/get-zen_doc/4394028/pub_60ae989897044645bbba2c1d_60ae98ab4c412a10ceddc9a8/scale_2400";

let mark = document.querySelector("mark");
mark.classList.add("green");
mark.textContent += "Green";
console.log(mark);

let li_ = ul.children
function sort(li, ul) {
    let mas = [];
    var len = li.length - 1;

    for (let i = len; i >= 0; i--)
    {
        mas.push(li[i]);
        ul.removeChild(li[i]);
    }
    console.log(mas);
    mas.sort((prev, next) => prev.textContent < next.textContent);
    console.log(mas);
    
    for (let i = 0; i < len + 1; i++)
    {
        ul.appendChild(mas[i]);
    }
}

sort(li_, ul);