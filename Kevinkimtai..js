// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split("").reverse().join("");
}

// Test cases
console.log(reverseString("hello"));   // Expected output: "olleh"
console.log(reverseString("12345"));   // Expected output: "54321"
console.log(reverseString(""));        // Expected output: ""
