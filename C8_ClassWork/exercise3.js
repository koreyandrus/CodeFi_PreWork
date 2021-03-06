// Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

// The criteria for a candidate to be qualified in the coding interview is:

// - The candidate should have completed all the questions.
// - The maximum time given to complete the interview is 120 minutes.
// - The maximum time given for very easy questions is 5 minutes each.
// - The maximum time given for easy questions is 10 minutes each.
// - The maximum time given for medium questions is 15 minutes each.
// - The maximum time given for hard questions is 20 minutes each.

// If all the above conditions are satisfied, return "qualified", else return "disqualified".

// You will be given an array of time taken by a candidate to solve a particular question and the total time the candidate takes to complete the interview.

// Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

// The maximum time to complete the interview includes a buffer time of 20 minutes.

function interview(arrOfTimes, totalTime) {
    if(totalTime > 120) return "disqualified";
    if(arrOfTimes.length != 8) return "disqualified";
    
    
    if(checkScores(...arrOfTimes)){
        return "qualified";
    } else return "disqualified";
}

function checkScores(ve1, ve2, e1, e2, m1, m2, h1, h2){
    if(!(ve1 <=5 && ve2 <= 5)) return false;
    if(!(e1 <=10 && e2 <= 10)) return false;
    if(!(m1 <=15 && m2 <= 15)) return false;
    if(!(h1 <=20 && h2 <= 20)) return false;
    return true;
}

// function interview(arr, tot) {
//     const benchmark = [5, 5, 10, 10, 15, 15, 20, 20, 120];

//     const performance = [...arr, tot];

//     return performance.every((num, index) => num <= benchmark[index]) ? "qualified" : "disqualified";
// }


console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120)); //   ➞    "qualified" 👍

console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64)); //    ➞     "qualified" 👍

console.log(interview([6, 4, 5, 6, 10, 12, 10, 18], 115)); //    ➞     "disqualified" 👍 
// Should be disqualified because went over very easy time

console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120)); //    ➞    "disqualified" 👍
// Exceeded the time limit for a medium question.

console.log(interview([5, 5, 10, 10, 15, 15, 20], 120)); //    ➞    "disqualified"  👍
// Did not complete all the questions.

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130)); //    ➞    "disqualified" 👍