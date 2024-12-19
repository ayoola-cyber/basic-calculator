const viewed = document.getElementById("view");
const numberButton = document.querySelectorAll(".numbers");

const clearButton = document.getElementById("cleared");
const equalButton = document.getElementById("equaled");
console.log(equalButton)

const updateView = (value) => {
    viewed.value = value;
};

let currentInput = "";
let equation = "";

// Handle button clicks
numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value) {
            // Reset the display if a new calculation starts
            if (viewed.value === "0" && !isNaN(value)) {
                currentInput = value;
                equation = value;
            } else {
                currentInput += value;
                equation += value === "x" ? "*" : value; // Replace "x" with "*"
            }
            updateView(currentInput);
        }
    });
});



// Evaluate the equation on "=" button click
equalButton.addEventListener("click", () => {
    try {
        const result = Function(`'use strict'; return (${equation})`)();
        currentInput = `${result}`;
        equation = `${result}`;
        updateView(result);
    } catch (error) {
        updateView("Error");
        currentInput = "";
        equation = "";
    }
});


clearButton.addEventListener("click", ()  => {
    currentInput = "";
    equation = "";
    updateView("0");
})