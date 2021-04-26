
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings; 
    // "crustType": ["deep dish", "hand tossed", "thin"],
    // "sauceType": ["traditional", "marinara"],
    // "cheeses": ["mozzarella", "feta"],
    // "toppings": ["pepperoni", "mushrooms", "olives", "onions", "sausage", "bacon", "pineapple"]
    return pizza
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("thin", "bbq", "mozzarella", ["chicken", "bacon", "pineapple", "mushrooms", "onions"])
var p4 = pizzaOven("hand tossed", "marinara", "mozzarella", "")
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)



// RandomPizza

var pizza = {
    "crustType": ["deep dish", "hand tossed", "thin"],
    "sauceType": ["traditional", "marinara", "bbq"],
    "cheeses": ["mozzarella", "feta"],
    "toppings": ["pepperoni", "mushrooms", "olives", "onions", "sausage", "bacon", "pineapple" , "jalapeno"]
}

function randomPizza() {
    var randompizza2 = {};
    var randomCrust = Math.floor((Math.random() * pizza.crustType.length));
    var crustType = pizza.crustType[randomCrust];
    randompizza2.crustType = crustType;

    var randomSauce = Math.floor((Math.random() * pizza.sauceType.length));
    var sauceType = pizza.sauceType[randomSauce];
    randompizza2.sauceType = sauceType;

    var randomcheese = Math.floor((Math.random() * pizza.cheeses.length));
    var cheeses = pizza.cheeses[randomcheese];
    randompizza2.cheeses = cheeses;

    var randomtoppings = Math.floor((Math.random() * pizza.toppings.length));
    var toppings = pizza.toppings[randomtoppings];
    randompizza2.toppings = toppings;

    return randompizza2
}
var result = randomPizza()
console.log(result)
