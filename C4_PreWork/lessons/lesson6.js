const scrollLine = document.querySelector('.scroll-line');

function fillScrollLine() {
    const windowHeight = window.innerHeight;
    const fullHeight   = document.body.clientHeight;
    const scrolled     = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;


    scrollLine.style.width = `${percentScrolled}%`;
}

function debounce(func, wait = 15, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(fillScrollLine));
