// Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(str) {
    let arr = Array.from(str);
    let finalArr = [];
    arr.forEach((ch) => {
        if(ch.charCodeAt() % 2 === 1) {
            finalArr.push(ch.toLowerCase());
        }else {
            finalArr.push(ch.toUpperCase());
        }
    })
    return finalArr.join("");
}

console.log(asciiCapitalize("to be or not to be!"));

console.log(asciiCapitalize("THE LITTLE MERMAID"));

console.log(asciiCapitalize("Oh what a beautiful morning."));