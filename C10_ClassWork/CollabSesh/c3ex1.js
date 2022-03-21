// # JavaScript Foundations - Part 2 (Class 3)
// ## Exercise #1: Basic
// **Aim**: Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string
// - [ ] Create a function
// - [ ] Have that function take in an argument
// - [ ] Print a statement that uses the variable along with some other text
// Function that takes in my favorite food and say "____ is my favorite food!";
// function favFood(food: string){
//     return `${food} is my favorite food!`
// }
var favFood = function (food) { return "".concat(food, " is my favorite food!"); };
console.log(favFood('Pizza'));
console.log(favFood('Burrito'));
