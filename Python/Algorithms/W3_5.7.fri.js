// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

function convertCoinChange(money) {
    // declare variables for different denominations (quarter, dime, nickel, penny)
    q = 0; // each variable holds the count of each coin
    d = 0;
    n = 0;
    p = 0;
    
    money *= 100;
    // multiply input by 100 : 3.21 == 321
    
    q = Math.floor(money/25);
    money = money - (q * 25);
    d = Math.floor(money/10);
    money = money - (d * 10);
    n = Math.floor(money/5);
    money = money - (n * 5);
    p = Math.floor(money/1);
    money = money - (p * 1);

    console.log(money)
    console.log(q)
    console.log(d)
    console.log(n)
    console.log(p)
    // take new number (321) and divide by 25 to get the number of quarters
    // make sure to round down to get a whole number
    // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
    // repeat for different denominations



    // print and then return the data you collected
}

convertCoinChange(3.23)



//************************************************************************** */
// instructor answer

function generateCoinChange(input) {
    input = Math.floor(input * 100);
    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }


    while(input > 0) {
        if(input >= 25) {
            input -= 25;
            change['quarters'] += 1;
        } else if(input >= 10) {
            input -= 10;
            change['dimes'] += 1;
        } else if(input >= 5) {
            input -= 5;
            change['nickels'] += 1;
        } else {
            change['pennies'] = input
            // input = 0
            // input -= input
            break;
        }
    }

    return change
}


console.log(generateCoinChange(0.67))