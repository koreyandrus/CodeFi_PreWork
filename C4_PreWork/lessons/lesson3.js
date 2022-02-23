// Grab html elements
const crazyButtons = document.querySelectorAll('.btn-crazy');

// define functions
function moveButton() {
    // get a random number for left offset
    // get a random number for top offset
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

    // apply styles to button
    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';
}
// add event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', moveButton));
