//print odds
for (let i = 0; i <= 20; i++) {
    if (i%2==1) {
        console.log(i);
    }
}

//decreasing 100to0 divisible by 3
for (let i = 100; i >= 0; i--) {
    if (i%3==0) {
        console.log(i);
    }  
}

//sequence print

for (let i = 4; i >=-3.5; i-=1.5) {
    console.log(i);
}

//sigma
var sum=0
for (let i = 1; i <= 100; i++) {
    
    sum+=i;
}
console.log(sum);

//factorial
var sum=1
for (let i = 1; i <= 12; i++) {
    
    sum*=i;
}
console.log(sum);

