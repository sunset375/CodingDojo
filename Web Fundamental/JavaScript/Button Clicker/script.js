function printPage(){
    window.print()
}


function displayMessage() {
    alert("Hello World!");
}

a = 0
function clickIncrease() {
    a = a +=1
    console.log(a);
    document.querySelector("#button1").innerHTML = a
}