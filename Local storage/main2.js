const form = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const message = document.querySelector('.msg')
const users = document.querySelector('#users')
const ul = document.querySelector('ul');


let itemsArray = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : [];

localStorage.setItem('userDetails', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('userDetails'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userdetails = {
        name: nameInput.value,
        email: emailInput.value,
    }


    itemsArray.push(userdetails);
    localStorage.setItem('iteuserDetailsms', JSON.stringify(itemsArray));
    liMaker("Name: " + userdetails.name + " Email: " + userdetails.email);
    userdetails = null;
});

data.forEach(item => {
    liMaker(item);
});

