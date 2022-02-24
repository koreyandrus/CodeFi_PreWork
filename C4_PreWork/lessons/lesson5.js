const questions = document.querySelectorAll('.question');
const items     = document.querySelectorAll('li');


questions.forEach((question) => {
    question.addEventListener('click',toggleAnswer);
})

function toggleAnswer(){
    closeAnswers(this.parentElement);
    this.parentElement.classList.toggle('open');
    // console.log(this);
}

function closeAnswers(currentElement) {
    items.forEach((item) => {
        if(item === currentElement) {
            return;
        }
        else if(item.classList.contains('open')){
            item.classList.remove('open');
        }
    })
}

// const accordian = document.querySelector('.accordian');
// const item      = accordian.querySelectorAll('li');
// const questions = accordian.querySelectorAll('.question');

// function toggleAccordian(){
//     const thisItem = this.parentNode;
//     console.log(thisItem);
//     thisItem.classList.toggle('open');
// }

// questions.forEach(question => question.addEventListener('click', toggleAccordian));