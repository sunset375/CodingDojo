// 111111111111111111111111111111111111111111111111111111111111111111111111
//High Pass Filter - Given an array and a value cutoff, return a new array containing only the values larger than cutoff

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i<= arr.length; i++) {
        if(arr[i] > cutoff)
        filteredArr.push(arr[i]);        
    }
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 2222222222222222222222222222222222222222222222222222222222222222222222
//Evens or Odds - Given an array, determine if the values that are odd when added together are 
//larger than the even values added together. If they are equal say that they are "tied".

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    var evenNumbers = [];
    var oddNumbers = [];
    for(var i=0; i<=arr.length-1; i++) {
        if(arr[i] % 2 == 0) {
            evenNumbers.push(arr[i]);
            totalEvens += arr[i];
        }
        else {
            oddNumbers.push(arr[i]);
            totalOdds += arr[i];
        }
        
    }
    if(totalOdds > totalEvens) {
        console.log("Odds are larger")
    }
        else if(totalOdds == totalEvens){
            console.log("Tied")
        }
        else {
            console.log("Evens are larger")
        }
    return totalOdds
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"



// 3333333333333333333333333333333333333333333333333333333333333333
//3. Better than average - Given an array of numbers return a count of how many of the numbers 
//are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    avg = sum / arr.length

    var count = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count += 1;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



// 44444444444444444444444444444444444444444444444444444444444444
//Fibonacci Array - Fibonacci numbers have been studied for years and appear often in nature.
//Write a function that will return an array of Fibonacci numbers up to a given length n. 
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=1; i<n-1; i++) {
        sum = fibArr[fibArr.length-2] + fibArr[fibArr.length-1];
        fibArr.push(sum)
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]