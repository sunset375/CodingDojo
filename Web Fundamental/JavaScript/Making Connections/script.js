console.log("page loaded...");

function edit() {
    document.querySelector("#name").innerHTML = "Tom Cruise";

}

function removeRequest(element) {
    var name = element.getAttribute("id")
    var x = document.querySelector("." + name);
    x.remove();



    // var x =document.querySelector(".card-list-item");
    // x.remove();
}




function removeRequest2(element) {
    var name = element.getAttribute("id")
    
    if(name == "Todd") {
        var x = document.querySelector("#person1");
        x.remove();
    }
    else {
        var y = document.querySelector("#person2");
        y.remove();
    }


    // var x =document.querySelector(".card-list-item");
    // x.remove();
}