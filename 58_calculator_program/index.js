const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Only allow numbers and math operators
        const expression = display.value;

        if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Evaluate safely
        display.value = new Function("return " + expression)();
    } catch (error) {
        display.value = "Error";
    }
}
