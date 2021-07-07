// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

function isPallindrome(str) {
    var newstr = "";
    for(i=str.length-1; i>-1; i--) {
        newstr += str[i];
    }
    if (newstr == str) {
        return true;
    }
    else {
        return false
    }
    // your code here
}

console.log(isPallindrome("racecar"));
console.log(isPallindrome("Dud"));
console.log(isPallindrome("oho!"));


// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPallindrome(str) {
    let  longest = 0;
    let k = 0;
    let z = 0;

    for(let i =0; i< str.length; i++) {
        for (let j = i+1; j< str.length; j++) {
            if(helper(str, i , j)) {
                if(longest < (j-i)) {
                    longest = j-i;
                    k = i;
                    z = j;
                }
            }
        }
    }
    return str.slice(k, z+1)
}

function helper(str, i, j) {
    while( i<j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}



console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));
