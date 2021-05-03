var cards = document.querySelector("#cards");
var currentUser = "";

function getName() {
    var result = document.querySelector("#coder");
    currentUser = result.value;
    var coderResult = await fetch("https://api.github.com/users/" + currentUser);
    var data = await coderResult.json();

    console.log(data);
}


asynce function search() {
    var coderResult = await fetch("https://api.github.com/users/" + currentUser);
    var data = await coderResult.json();
    makeCard(data)

}

// avatar_url, name, followers, following, public_repos, location


function makeCar(data) {
    var res = 
    `<div class="card">
        <img src="${data.avatar_url}" alt="userImage">
        <h1>${data.name}</h1>
        <small>Location: ${data.location}</small>
        <h3>Followers: 30</h3>
        <h3>Following: 29</h3>
        <h3>Public Repos</h3>
    </div>`
    cards.innerHTML = res +cards.innerHTML;
}