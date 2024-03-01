const paragraf = document.querySelector("article");
console.log(paragraf.textContent);

function domInf(el) {
    let res = 
    {
        "type": "",
        "name": "",
        "childCount": 0
    };
    res.type = el.nodeType;
    res.name = el.tagName;
    res.childCount = el.children.length;
    console.log(el);
    console.log(res);
}

domInf(paragraf);

function getTextFromUl(el) {
    let res = [];
    let children = el.children;
    for (let i = 0; i < children["length"]; i++)
    {
        let text = children[i].textContent;
        res.push(text);
    }
    return res;
}

const ul = document.querySelector("ul");
console.log(getTextFromUl(ul));

const p = document.querySelector("p");
const children = p.childNodes;
console.log(children);

for (let i = 0; i < children["length"]; i++) {
    if (children[i] instanceof Text) {
        children[i].textContent = "-text-";
    }
}