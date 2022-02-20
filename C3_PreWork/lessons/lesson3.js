const first = 'this is a string';
const second = String('this is a string');

// console.log('this is a string'.toUpperCase());
// console.log(String('this is a string').toUpperCase());

// console.log(first === second);

console.groupCollapsed('Primatives vs Objects');
    console.log(first === second);
    console.log(
        typeof first,
        typeof String('this is a string'),
        typeof new String()
    );
console.groupEnd();

//strings
const sentence = 'this is my sentence';
console.groupCollapsed('String');
    console.log(first.toUpperCase());
    console.log(second.toLowerCase());
    console.log(sentence.startsWith('this is'));
    console.log('🍺'.repeat(20));
    console.log('look at me goo        '.trim());
console.groupEnd();


console.groupCollapsed('Numbers and Math');
    console.log(1..toString());
    console.log((1).toString());
    console.log(Number.isInteger(5));
    console.log(Number.isInteger(5.432));
    console.log((1.345345).toFixed(2));
    console.log(
        Math.random().toFixed(2),
        Math.ceil(1.56),
        Math.floor(6.3)
    );
console.groupEnd();

// Arrays
const myArray = ["korey", "kris", "kayla"];

console.groupCollapsed("Arrays");
    console.log(myArray.length);
    console.log(myArray.join(', '));
    console.log(myArray.push('ado'), myArray);
    console.log(myArray.pop(), myArray);

    myArray.forEach((user) => console.log(user));

console.groupEnd();