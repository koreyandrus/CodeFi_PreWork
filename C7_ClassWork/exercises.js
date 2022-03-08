
function exercise1() {
    function redundantReturn(str) {
        function giveStr() {
            return str;
        }
        return giveStr;
    }  
    const thisIsAFunction = redundantReturn('Hello');
    
    console.log(thisIsAFunction());
}

exercise1();


function exercise2() {
    
    function parent(x) {
      return function closure() {
        // Closure is declared here.
        return x;
      };
    }
    
    const remember = parent("remembers me");
    // Seems like the variable x would be gone after
    // parent is executed, but it's not.
    
    console.log(remember());
    // Returns "remembers me" because the inner
    // function remembers x.
}

exercise2();

function exercise3() {
    drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 },
        { name: "pepsi", price: 25 },
        { name: "tequila", price: 30 },
    ];

    function sortedDrinkByPrice(arr) {
        return arr.sort((a, b) => a.price - b.price);
    }

    console.log(sortedDrinkByPrice(drinks));
}

exercise3();




// ## Exercise #4: Intermediate
function exercise4() {
    function getBudgets(arr) {
        let totalBudget = 0;
        arr.forEach((person) => totalBudget += person.budget);
        return totalBudget;
    }


    console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
    ]));

    console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
    ]));
}

exercise4();

// ## Exercise #5: Advanced

function exercise5() {
    function toArray(obj) {
        return Object.entries(obj);
    }
    
    console.log(toArray({ a: 1, b: 2 }));
    console.log(toArray({ shrimp: 15, tots: 12 }));
    console.log(toArray({ shrimp: 15, tots: 12, tacos: 'infinity' }));
}

exercise5();