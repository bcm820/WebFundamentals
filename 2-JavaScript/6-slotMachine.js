
function slotMachine(coins, goal){
    console.log("GOOD LUCK!!!")
    var prize = (Math.floor(Math.random() * 50) + 51)
    while (coins > 0){
        var win = (Math.floor(Math.random() * 100) + 1);
        if (win == 50){
            console.log("Congratulations! You won", prize, "coins with", coins, "turns left!");
            if (goal > coins + prize){
                console.log("But you're still", goal - (coins + prize), "coins short of", goal, "coins! Buying", prize, "more turns...")
                coins = coins + prize;
                console.log("With", prize, "more turns, you now have", coins, "chances to reach your goal!")
                slotMachine(coins, goal);
            }
            else if (goal <= coins + prize){
                console.log("AND you reached your goal of", goal, "with", (coins + prize) - goal, "extra coins!")
                console.log("Why leave with only", coins + prize, "coins when you're on a roll?");
                console.log("WHY NOT PLAY AGAIN?!");
            }
            break;
        }
        if (win !== 50){
            console.log("Turns remaining:", coins);
        }
        if (win !== 50 && coins == 1){
            console.log("Oh no! You used up all your turns :(")
            console.log("Enter more coins to increase your chances to win!");
        }
        coins--
    }
}

slotMachine(200,300)