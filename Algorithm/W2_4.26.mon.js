var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);




function d6() {
    var roll = Math.random();
    roll = Math.floor(Math.random()*6)+1;
    // roll = Math.floor(Math.random()*7);
    roll = Math.ceil(Math.random()*6);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);





function life() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var random = Math.floor((Math.random() * lifesAnswers.length));
    var randomAnswer = lifesAnswers[random];
    return randomAnswer;
}
var playerRoll = life();
console.log("Your Answer: " + playerRoll);



