const viewed = document.getElementById("view");
console.log(viewed);

const numberButton = document.querySelectorAll(".numbers");
console.log(numberButton);

const clearButton = document.getElementById("cleared");
const equalButton = document.getElementById("equaled");

const updateView = (value) => {
    viewed.value = value;
};

let currentInput = "";
let equation = "";

numberButton.forEach(button => {
button.addEventListener("click", () => {
    const value = button.dataset.value;
    console.log(value)
    if(value){
        currentInput += value;
        equation += value;
        updateView(currentInput);
    }
});
});

equalButton.addEventListener("click", () => {
    const result = eval(equation);
    updateView(result)
})




clearButton.addEventListener("click", ()  => {
    currentInput = "";
    equation = "";
    updateView("0");
})