//step 1:
//1: How do we know we need a loop here? 
//if we are counting the miles ran, otherwise its not neccessary
//2: What's the starting point of the loop?
//zero miles
//3: When should the loop stop?
// when it reaches 6 miles since no further rewards are given
//4: How will it know to stop?
// when the condition is false
//5: What's the incrementing for each iteration of the loop?
// Two
//6: What variables do we need?
// miles , candy


var candy = 0;
for (let miles = 0; miles <6 ; miles + 2) {
    candy++;
}

//feature 2
var speed = 5.5
for (let miles = 0; miles <6 ; miles + 2) {
    if (speed == 5.5) {
        candy++;
    }
}