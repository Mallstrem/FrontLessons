const head = document.querySelector("head");
console.log(head);

const body = document.querySelector("body");
console.log(body);

const bodyChildren = body.childNodes;
console.log(bodyChildren);

const firstDiv = body.firstChild.nextSibling;
console.log(firstDiv);

const firstDivChildren = firstDiv.childNodes;
console.log(firstDivChildren);

let arr = Array.from(firstDivChildren);
arr = arr.slice(1,-1);
console.log(arr);