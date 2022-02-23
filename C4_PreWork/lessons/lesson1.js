// grab elements from the dom
// attach event listeners

function goCoocoo() {
    document.body.style.backgroundColor = '#C00C00';
}

// option 2
const coffeeButton = document.querySelector(".coffee-btn");

coffeeButton.onclick = function() {
    document.body.style.backgroundColor = '#C0FFEE';
}