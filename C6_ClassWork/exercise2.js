// **Aim**: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. 


function reversibleInclusiveList(num1, num2) {
    const finalArr = [];
    if(num1 > num2) {
        for(let i = num1;i >= num2;i--){
            finalArr.push(i);
        }
    } else {
        for(let i = num1;i <= num2;i++){
            finalArr.push(i);
        }
    }
    
    
    console.log(finalArr);



//     let first = num1 < num2 ? num1 : num2;          I'M DUMB
//     let second = num1 > num2 ? num1 : num2;

//     for(let i = first; i <= second; i++){
//         finalArr.push(i);
//     }
//     console.log(finalArr);
}



reversibleInclusiveList(1, 5);

reversibleInclusiveList(2, 8); 

reversibleInclusiveList(10, 20);

reversibleInclusiveList(24, 17);