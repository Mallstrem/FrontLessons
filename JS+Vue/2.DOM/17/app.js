const ul = document.querySelector("ul");
ul.addEventListener("click", e => {
    let div = e.target.nextSibling.nextSibling;
    if (!div) return;
    if (div.classList.contains('d-none')  ) {
      const dropdownDivs = document.querySelectorAll(".dropdown-menu");
      for (let i = 0; i < dropdownDivs.length; i++) {
        dropdownDivs[i].classList.add("d-none");
      }
      div.classList.remove("d-none");
    }
    else {
      div.classList.add("d-none");
    }
})