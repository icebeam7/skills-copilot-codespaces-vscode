class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract the second number from the first
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide the first number by the second
    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Demonstrate usage
console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
console.log("Division: 6 / 3 =", calculator.divide(6, 3));

try {
    console.log("Division by zero: 6 / 0 =", calculator.divide(6, 0));
} catch (error) {
    console.error(error.message);
}