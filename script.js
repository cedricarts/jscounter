// This is a simple counter application that allows the user to increment, decrement, and reset a number displayed on the screen.
function Increment() {
    let inputField = document.getElementById("number");
    let num = parseInt(inputField.value) || 0; // Ensure it's a number
    num += 1;
    inputField.value = num.toString();
    let text = "You have incremented the number!!";
    displayOutput.value = text.toString(); // Display the message
}

function Decrement() {
    let inputField = document.getElementById("number");
    let displayOutput = document.getElementById("display");
    let num = parseInt(inputField.value) || 0; // Ensure it's a number
    num -= 1;
    inputField.value = num.toString();
    let text = "You have decremented the number!!";
    displayOutput.value = text.toString(); // Display the message
}

function Reset() {
    let inputField = document.getElementById("number");
    let displayOutput = document.getElementById("display");
    inputField.value = "0"; // Reset to 0
    let text = "You have reset the number!!";
    displayOutput.value = text.toString(); // Display the message
}

function Multiply(){
    let inputField = document.getElementById("number");
    let displayOutput = document.getElementById("display");
    let num = parseInt(inputField.value) || 0; // Ensure it's a number
    num *= 2;
    inputField.value = num.toString();
    let text = "You have multiplied the number by 2!!";
    displayOutput.value = text.toString(); // Display the message

    if(inputField.value == 0){
        let text = "You can't multiply zero, it'll be just zero!!";
        displayOutput.value = text.toString(); // Display the message
    }
}

function Divide(){
    let inputField = document.getElementById("number");
    let displayOutput = document.getElementById("display");
    let num = parseInt(inputField.value) || 0; // Ensure it's a number
    num /= 2;
    inputField.value = num.toString();
    let text = "You have divided the number by 2!!";
    displayOutput.value = text.toString(); // Display the message

    if(inputField.value == 0){
        let text = "You can't divide zero!!, that's a math error!!";
        displayOutput.value = text.toString(); // Display the message
    }
}