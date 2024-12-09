let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Simple eval-based calculator logic
    } catch (e) {
        display.value = 'Error';
    }
}
