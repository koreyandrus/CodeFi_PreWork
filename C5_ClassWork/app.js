// # Bookmarking App (Class 5)

// ## Exercise #1: Intermediate

// **Aim**: Create an application that prints out users information on submission of a form and saves the results to local storage

const userForm = document.querySelector('.user-form');
const firstNameEl = document.querySelector('.first-name');
const lastNameEl  = document.querySelector('.last-name');
const email       = document.querySelector('.email');
const submitBtn   = document.querySelector('.submit-btn');
const userDataEl  = document.querySelector('.user-info');


const users = JSON.parse(localStorage.getItem('userData')) || [];

printUserData(users);

function addUserData(e){
    e.preventDefault();
    if(!userForm.checkValidity()){
        alert("Full name and email required!");
        return;
    };

    const user = {
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        email: email.value,
    }

    users.push(user);

    printUserData(users);
    storeData(users);
    userForm.reset();
}

function printUserData(users){
    userDataEl.innerHTML = users.map((user, index) => {
        return `
        <ul data-key="${index}">
            <li>${user.firstName}</li>
            <li>${user.lastName}</li>
            <li>${user.email}</li>
            <span class="close-btn">&times;</span>
            <span class="edit-btn">&#9998;</span>
        </ul>
    `
    }).join('');
}

function deleteUserData({target}) {
    if(!target.classList.contains('close-btn')) return;
    
    users.splice(target.parentNode.dataset.key, 1);
    printUserData(users);
    storeData(users);
}

function updateUserData({target}) {
    if(!target.classList.contains('edit-btn')) return;
    let user = users.splice(target.parentNode.dataset.key, 1);

    firstNameEl.value = user[0].firstName;
    lastNameEl.value = user[0].lastName;
    email.value = user[0].email;

    printUserData(users);
    storeData(users);
}

function storeData(data){
    localStorage.setItem('userData', JSON.stringify(data));
}

submitBtn.addEventListener('click', addUserData);
userDataEl.addEventListener('click', deleteUserData);
userDataEl.addEventListener('click', updateUserData);