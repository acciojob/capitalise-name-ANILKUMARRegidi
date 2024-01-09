//your JS code here. If required.
// script.js

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add an event listener for the input event on the "fname" input field
document.getElementById("fname").addEventListener("input", function () {
    // Get the current input value
    let inputValue = this.value;

    // Capitalize the input value
    let capitalizedValue = capitalizeFirstLetter(inputValue);

    // Set the capitalized value back to the input field
    this.value = capitalizedValue;
});
