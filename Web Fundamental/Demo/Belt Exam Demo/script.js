//Switches image to stonepunk
function stonepunk() {
    document.querySelector("#scrollImage").setAttribute('src', './images/stonepunk.png');
}

//Switches image to pixelnija
function pixelninja() {
    document.querySelector("#scrollImage").setAttribute('src', './images/pixelninja.png');

}


function buy() {
    var cart = document.querySelector("#cartAmount");
    cart.innerHTML = parseInt(cart.textContent) + 1;
    
    cart = parseInt(cart) +1;
}
