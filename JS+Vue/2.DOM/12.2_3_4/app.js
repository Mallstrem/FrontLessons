function isParent(parent, child) {
    if(!(parent instanceof Node))
        console.log("Ошибка");
    if(!(child instanceof Node))
        console.log("Ошибка");
    if (child.parentNode === parent) {
        console.log(child.parentNode);
        return true;
    }
    else {
        console.log(child.parentNode);
        return false;
    }

}

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));

const ul = document.querySelector("ul");
console.log(ul);

let aHref = [];
let aTags = document.querySelectorAll("a");
console.log(aTags);

for (el of aTags)
{
    let parent = el.parentNode;
    if (parent.parentNode != ul)
    {
         aHref.push(el);
    }
}
console.log(aHref);

console.log(ul.previousSibling);
console.log(ul.nextSibling);