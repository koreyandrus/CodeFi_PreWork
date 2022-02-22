const submit = document.querySelector("button");
const outputBox = document.getElementById("uppercase");

submit.addEventListener('click', () => {
    const inputBox = document.getElementById("lowercase");

    let myStr = inputBox.value;

    capEveryOther(myStr);
})



function capEveryOther(myStr) {
    const strArr = myStr.split(" ");
    let finalStr = "";

    for(let i = 0;i < strArr.length;i++){
        if(i % 2 === 0) {
            finalStr += strArr[i].toUpperCase() + " ";
        } else {
            finalStr += strArr[i].toLowerCase() + " ";
        }
    }


    outputBox.textContent = finalStr;
}

