// # Bookmarking App (Class 5)

// ## Exercise #1: Intermediate

// **Aim**: Create an application that prints out users information on submission of a form and saves the results to local storage

const userForm = document.querySelector('.user-form');
const firstNameEl = document.querySelector('.first-name');
const lastNameEl  = document.querySelector('.last-name');
const ageEl       = document.querySelector('.age');
const email       = document.querySelector('.email');
const submitBtn   = document.querySelector('.submit-btn');
const userDataEl  = document.querySelector('.user-info');


const users = JSON.parse(localStorage.getItem('userData')) || [];

printUserData(users);

function addUserData(e){
    e.preventDefault();

    const user = {
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        age: ageEl.value,
        email: email.value,
    }

    users.push(user);

    printUserData(users);
    storeData(users);
    userForm.reset();
}

function printUserData(users){
    userDataEl.innerHTML = users.map(user => {
        return `
        <ul>
            <li>${user.firstName}</li>
            <li>${user.lastName}</li>
            <li>${user.age}</li>
            <li>${user.email}</li>
        </ul>
    `
    }).join('');
}

function storeData(data){
    localStorage.setItem('userData', JSON.stringify(data));
}

submitBtn.addEventListener('click', addUserData);