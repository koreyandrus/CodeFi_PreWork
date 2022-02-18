// ## Exercise #2: Intermediate

// **Aim**: Dynamically display a list of food items and prices using HTML & JavaScript

// - [ ] Create a list of objects, each having a food name and its price
// - [ ] Loop over that list, dynamically create a new list item `<li></li>` with the food name inside, and append that item to an existing HTML `<ul></ul>` element

const foods = [
    { name: "broccoli", type: "vegetable", price: 1 },
    { name: "tomato", type: "fruit", price: 2 },
    { name: "snickers", type: "junk", price: 0.5}
];
// get parent element
const foodList = document.querySelector(".food-list");

for(food of foods) {
    // create element to be added to document
    const foodItem = document.createElement("li");
    // add food to element
    foodItem.innerText = `${food.name} is ${food.type} and costs ${food.price}`;
    //add element to the parent
    foodList.appendChild(foodItem);
}