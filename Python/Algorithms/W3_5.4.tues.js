// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

function parensValid(str) {
    var checker = [];

    for (var i = 0 ; i < str.length ; i ++) {
        if(str[i] == "(") {
            checker.push(str[i]);
        } else if (str[i] == ")" && checker[checker.length-1] == "(") {
            checker.pop();
        } else if (str[i] == ")") {
            return false;
        }
    }
    if (checker.length > 0) {
        return false;
    }
    return true;
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));


// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    var checker = [];

    for (var i = 0 ; i < str.length ; i ++) {
        if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
            checker.push(str[i]);
        } else if (str[i] == ")" && checker[checker.length-1] == "(") {
            checker.pop();
        } else if (str[i] == "]" && checker[checker.length-1] == "[") {
            checker.pop();
        } else if (str[i] == "}" && checker[checker.length-1] == "{") {
            checker.pop();
        } else if (str[i] == ")" || str[i] == "]" || str[i] =="}") {
            return false;
        }
    }
    if (checker.length > 0) {
        return false;
    }
    return true;
}

function bracesValid(str) {
    var checker = {
        "(" : 0,
        "[" : 0,
        "{" : 0
    }

    for (var i = 0 ; i < str.length ; i ++) {
        if (str[i] === "(") {
            checker["("] ++;
        } else if (str[i] === "[") {
            checker["["] ++;
        } else if (str[i] === "{") {
            checker["{"] ++;
        } else if (str[i] === ")") {
            checker["("] --;
        } else if (str[i] === "]") {
            checker["["] --;
        } else if (str[i] === "}") {
            checker["{"] --;
        } 
        if(checker["["] < 0 || checker["("] < 0 || checker["{"] < 0) {
            return false;
        }
    }
    if (checker["["] > 0 || checker["("] > 0 || checker["{"] > 0) {
        return false;
    }
    return true;
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));