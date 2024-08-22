// Function to check if a number is even
function isEven(num) {
    // Use the modulo operator to check if num is divisible by 2
    if (num % 2 === 0) {
        return true; // If remainder is 0, it's even
    } else {
        return false; // If remainder is not 0, it's odd
    }
}

// Test 
console.log(isEven(4));   // Expected output: true (4 is even)
console.log(isEven(7));   // Expected output: false (7 is odd)
console.log(isEven(-2));  // Expected output: true (-2 is even)
