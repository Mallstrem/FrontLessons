const container = document.querySelector(".container");
const colourArr = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
container.addEventListener("mouseover", e => {
  let colourNum = Math.round(Math.random() * 10);
  if (colourNum == 10) colourNum = colourNum - 1;
  e.target.style.background = colourArr[colourNum];
  let child = e.target.children[0];
  while(true)
  {
    if (!child) break;
    colourNum = Math.round(Math.random() * 10);
    child.style.background = colourArr[colourNum];
    child = child.children[0];
  }
});

container.addEventListener("mouseout", e => {
  e.target.style.background = 'white';
  let child = e.target.children[0];
  while(true)
  {
    if (!child) break;
    child.style.background = 'white';
    child = child.children[0];
  }
})