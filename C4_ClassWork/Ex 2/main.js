// ---

// ## Exercise #2: Intermediate

// **Aim**: Create a function that returns the number of true values in an array.

// _Examples_

// ```js
// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0
// ```

// _Notes_

// - Return 0 if given an empty array.
// - All array items are of the type bool (true or false).

// ---

function countTrue(arr) {
    let numTrue = 0;
    arr.forEach(element => {
        (element) ? numTrue++ : numTrue;
    });

    return numTrue;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

