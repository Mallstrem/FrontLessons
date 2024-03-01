let ul = document.querySelector("ul");
ul.classList.add("list");
console.log(ul);

let link = ul.nextSibling;
while (link.nodeName != "A")
{
    link = link.nextSibling;
}
link.id = "link";
console.log(link);

let counter = 0;
let li = ul.children;
for (let i = 0; i < li.length; i += 2)
{
    li[i].classList.add("item");
}
console.log(li);

let hrefs = document.querySelectorAll("a");
for (el of hrefs)
{
    el.classList.add("custom-link");
}
console.log(hrefs);
