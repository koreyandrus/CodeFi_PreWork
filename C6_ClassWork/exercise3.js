// **Aim**: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.


function product(arr){
    // Variable to hold running total or sum
    let totalSum = 0;

    // For each collection find the product of that collection and add it to the total
    arr.forEach(collection => {
        let total = 1;
        collection.forEach(num => total *= num);
        totalSum += total;
    })
    return totalSum;
}


console.log(product([[1,2],[1,1,3],[2,3,5,6]]));

console.log(product([[10,2],[5,0],[2,3]]));

console.log(product([[1,2],[2,3],[3,4]]));

console.log(product([[1,2],[0,3],[3,0]]));
