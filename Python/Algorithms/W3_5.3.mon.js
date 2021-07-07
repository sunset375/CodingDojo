// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL - GPYW""

function acronym(str) {
    var str_out = "";
    var new_arr = str.split(' ');
    for(i=0; i<new_arr.length; i++) {
        str_out += new_arr[i][0].toUpperCase();
    }
    return str_out;
}


console.log(acronym("there's no free lunch - gotta pay yer way")); // "TNFL - GPYW"






// Implement reverseString(str) that takes in a String, and then returns the same string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    var newstr = "";
    for(i=str.length-1; i>-1; i--) {
        newstr += str[i];
    }
    return newstr;
}

console.log(reverseString("creature")); // "erutaerc"




