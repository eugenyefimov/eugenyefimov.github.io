// messageGenerator.js

// Arrays to hold pieces of the message
const part1 = ["Believe in yourself", "Your limitation—it’s only your imagination", "Push yourself"];
const part2 = ["because", "as long as", "if"];
const part3 = ["you can achieve greatness.", "hard work pays off.", "you dream it, you can do it."];

// Function to select a random element from an array
function selectRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a message
function generateMessage() {
    return `${selectRandom(part1)} ${selectRandom(part2)} ${selectRandom(part3)}`;
}

// Display the message
console.log(generateMessage());