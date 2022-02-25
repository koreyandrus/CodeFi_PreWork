// # Building Real Things (Class 4)

// ## Exercise #1: Basic

// **Aim**: Create a button that changes the background and text color randomly when clicked

// ---

const bgColorBtn = document.querySelector('button');



function changeBackgroundColor(element) {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
    document.querySelector('button').style.color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}

bgColorBtn.addEventListener('click', changeBackgroundColor);