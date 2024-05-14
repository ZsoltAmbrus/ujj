/*
* File: app.js
* Author: Ambrus Zsolt
* Copyright: 2024, Ambrus Zsolt
* Group: Szoft I/I/N
* Date: 2024-05-14
* Github: https://github.com/janos12345/
* Licenc: GNU GPL
*/

const doc = {
    bookBody: document.querySelector("#test"),
}

const state = {
    url: 'http://localhost:8000/employees',
}


function getDataFromForm() {
    state.cím = doc.nameInput.value
    state.szerző = doc.cityInput.value
    state.ár = doc.salaryInput.value
}

function Talalat() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        renderBooks(result)
    })
}

function renderBooks(bookList) {
    
    bookList.forEach(bks => {
        console.log(bks.ár)
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${bks.id}</td>
            <td>${bks.name}</td>
            <td>${bks.description}</td>
            <td>${bks.price}</td>
            <td>${bks.unit}</td>
            <td>
        `
        doc.bookBody.appendChild(row)
    });
    
}

Talalat()