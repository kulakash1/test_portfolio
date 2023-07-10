let total;

function game() {
    let var1 = Math.ceil(Math.random() * 100);
    document.getElementById("firstNumber").textContent = var1;

    let var2 = Math.ceil(Math.random() * 100);
    document.getElementById("secondNumber").textContent = var2;

    total = var1 + var2;
}

game();

function checkButton() {
    userInputValue = document.getElementById("userInput").value;

    if (total == userInputValue) {
        document.getElementById("gameResult").textContent = "Congratulations! You got it right.";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f";
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
    }
}

function restartButton() {
    game();
    document.getElementById("userInput").value = "";
    document.getElementById("gameResult").textContent = "";
}