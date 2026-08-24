const choices = ["rock", "paper", "scissors"];

function computerChoice (choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];

}

console.log(computerChoice(choices))

function humanChoice (){

    const human_choice = prompt("please enter ur choice");

    if (human_choice === "rock" ||
        human_choice === "paper"||
        human_choice === "scissors"
    ) {
        
        alert("choice accepted")
        return human_choice;

    }
    else{
        alert("please enter a valid choice");
        return null;
    }
}


console.log(humanChoice())