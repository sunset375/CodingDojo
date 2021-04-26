// Print odds 1-20 - Using a loop write code that will console.log all of the odd values
// from 1 up to 20.
for (i =1; i<20; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}


// Print the sequence - Using a loop write code that will console.log the values in this 
//sequence 4, 2.5, 1, -0.5, -2, -3.5.
for( i=4; i>-4; i-=1.5) {
    console.log(i);
}


// Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at 
//the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.
var x = 0;
for(i=1; i<101; i++) {
    x += i
    console.log(x);
}


// Factorial - Write code that will multiply values from 1 to some value n until the variable 
//product is larger than 100 million (1e8 for short). At the end console.log that value of n.
var n = 0;
var x = 1;
for(i=1; i<100; i++) {
    if(x < 1e8 ) {
        x = x * i;
        n += 1;
    }
    else {
        break
    }
}
console.log(n)

// While Loop example

var n = 0;
var x = 1;
while(x<1e8) {
    n += 1;
    x = x*n;
}
console.log(n)

