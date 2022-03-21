// ---
// ## Exercise #3: Advanced
// **Aim**: Create a function that takes an object and returns the keys and values as separate arrays.
//  Return the keys sorted alphabetically and their corresponding values in the same order.
// _Examples_
// ```js
// keysAndValues({ a: 1, b: 2, c: 3 })
//    ➞    [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//    ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
//    ➞    [["key1", "key2", "key3"], [true, false, undefined]]
// ```

function keysAndValues(obj: object){
    const keys =  Object.keys(obj);
    const values =  Object.keys(obj).map(key => obj[key]);

    return ([keys, values]);
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));