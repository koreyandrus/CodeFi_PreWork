// grab elements from the dom
// attach event listeners

function goCoocoo() {
    document.body.style.backgroundColor = '#C00C00';
}
function goChilled() {
    document.body.style.backgroundColor = '#C0FFEE';
}

// option 2 - better option because JS and html aren't mixed
const coffeeButtons = document.querySelectorAll(".coffee-btn");

coffeeButtons.forEach((button) => {
    button.onclick = goChilled;
})

// coffeeButton.onmouseenter = goCoocoo;

function notListening() {
    document.body.style.backgroundColor = '#FFFFFF';
}

// Option 3: using addEventListener
const notListeningBtns = document.querySelectorAll('.listen-btn');
notListeningBtns.forEach((button) => {
    button.addEventListener('click', () => document.body.style.backgroundColor = "#F00DEE");
})

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseleave', notListening));

