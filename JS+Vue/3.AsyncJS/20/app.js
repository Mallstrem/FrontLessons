const btn = document.querySelector('.btn-get-users');
const btnAddUser = document.querySelector('.btn-add-user')
const container = document.querySelector('.container');
const dataContainer = document.querySelector('.data');

function getUsers(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.addEventListener("error", () => {
        alert('error!');
    });

    xhr.send();
}

function postUser(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader("Content-type", 'application/json; charset=UTF-8')

    xhr.send(JSON.stringify(body));
}

function getUserData() {
    const nameInpt = document.querySelector("#input-name").value;
    const emailInpt = document.querySelector("#input-email").value;
    const phoneInpt = document.querySelector("#input-phone").value;
    const websiteInpt = document.querySelector("#input-website").value;

    const user = {"name": nameInpt,
                "email": emailInpt,
                "phone": phoneInpt,
                "website": websiteInpt};
    console.log(user);
    return user;
}

function renderUsers(response) {
    const fragment = document.createDocumentFragment();
    dataContainer.innerHTML = '';
    response.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = user.username;
        const article = document.createElement("p");
        article.classList.add("card-text");
        article.textContent = user.name;

        cardBody.appendChild(title);
        cardBody.appendChild(article);
        cardBody.addEventListener("click", () => {
            renderUserFullData(user)
        });

        card.appendChild(cardBody);
        fragment.appendChild(card);       

    });
    container.append(fragment);
}

function renderUserFullData(user) {
    dataContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();

    const card = document.createElement("div");
    card.classList.add("card");

    const ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("list-group-flush");

    const id = document.createElement("li");
    id.classList.add("list-group-item");
    id.textContent = `id: ${user.id}`;
    ul.appendChild(id);

    const name = document.createElement("li");
    name.classList.add("list-group-item");
    name.textContent = `name: ${user.name}`;
    ul.appendChild(name);

    const email = document.createElement("li");
    email.classList.add("list-group-item");
    email.textContent = `email: ${user.email}`;
    ul.appendChild(email);

    const address = document.createElement("li");
    address.classList.add("list-group-item");
    address.textContent = `address: ${user.address.city}, ${user.address.street}, ${user.address.suite}; zipcode: ${user.address.zipcode}`;
    ul.appendChild(address);

    const geo = document.createElement("li");
    geo.classList.add("list-group-item");
    geo.textContent = `lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}`;
    ul.appendChild(geo);

    const phone = document.createElement("li");
    phone.classList.add("list-group-item");
    phone.textContent = `phone: ${user.phone}`;
    ul.appendChild(phone);

    const website = document.createElement("li");
    website.classList.add("list-group-item");
    website.textContent = `website: ${user.website}`;
    ul.appendChild(website);

    const company = document.createElement("li");
    company.classList.add("list-group-item");
    company.textContent = `company name: ${user.company.name}`;
    ul.appendChild(company);

    const catchPhrase = document.createElement("li");
    catchPhrase.classList.add("list-group-item");
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    ul.appendChild(catchPhrase);

    const bs = document.createElement("li");
    bs.classList.add("list-group-item");
    bs.textContent = `bs: ${user.company.bs}`;
    ul.appendChild(bs);
    
    card.appendChild(ul);
    fragment.appendChild(card);
    dataContainer.appendChild(fragment); 
}

btn.addEventListener('click', e => {
    getUsers((response) => {renderUsers(response)});
});

btnAddUser.addEventListener('click', e => {
    const user = getUserData();
    postUser(user, (response) => {
        console.log(response);

        const card = document.createElement("div");
        card.classList.add("card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = user.username ? user.username : "no name";
        const article = document.createElement("p");
        article.classList.add("card-text");
        article.textContent = user.name;

        cardBody.appendChild(title);
        cardBody.appendChild(article);
        cardBody.addEventListener("click", () => {
            renderUserFullData(user)
        });

        card.appendChild(cardBody);
        container.insertAdjacentElement("afterbegin", card);

    })
})