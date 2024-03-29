const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

const container = document.querySelector(".container");

renderTable(users);

function renderTable(users) {
    if(!users)
    {
        alert('No users!');
        return;
    }
    let total = 0, num = 0;
    const table = document.createElement("table");
    const tr = document.createElement("tr");

    const numCell = document.createElement("th");
    const nameCell = document.createElement("th");
    const emailCell = document.createElement("th");
    const balanceCell = document.createElement("th");
    
    numCell.textContent = "Номер";
    nameCell.textContent = "Имя";
    emailCell.textContent = "Почта";
    balanceCell.textContent = "Баланс";

    tr.appendChild(numCell);
    tr.appendChild(nameCell);
    tr.appendChild(emailCell);
    tr.appendChild(balanceCell);
    table.appendChild(tr);

    Object.values(users).forEach(user => {
        num += 1;
        const tr = getTableLine(num, user);
        table.appendChild(tr);
        total += user.balance;
    })

    const totalCell = document.createElement("td");
    const emptyCell_1 = document.createElement("td");
    const emptyCell_2 = document.createElement("td");
    const totalBalanceCell = document.createElement("td");
    const lastRow = document.createElement("tr");

    totalCell.textContent = "Total";
    totalBalanceCell.textContent = total;

    lastRow.appendChild(totalCell);
    lastRow.appendChild(emptyCell_1);
    lastRow.appendChild(emptyCell_2);
    lastRow.appendChild(totalBalanceCell);

    table.appendChild(lastRow);

    container.appendChild(table);
}

function getTableLine(num, user) {
    const tr = document.createElement("tr");
    const {name, email, balance} = user;
    const numCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const balanceCell = document.createElement("td");

    numCell.textContent = num;
    nameCell.textContent = name;
    emailCell.textContent = email;
    balanceCell.textContent = balance;

    tr.appendChild(numCell);
    tr.appendChild(nameCell);
    tr.appendChild(emailCell);
    tr.appendChild(balanceCell);
    
    return tr;
}