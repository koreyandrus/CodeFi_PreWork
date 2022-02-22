const obj1 = { b: 1, a: 2, c: 3 };
const obj2 = { name: "korey", age: 22, occupation: "Programmer", children: "Amelia and Raylan", fiance: "Harley" };


function splitObj(obj){
    const orderedObj = sortObj(obj);
    
    let keys = Object.keys(orderedObj);
    let values = Object.values(orderedObj);
    let newArr = [keys, values];
    
    console.log(newArr);
}

function sortObj(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  }

  splitObj(obj2);