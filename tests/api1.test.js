//Brittany - Convert “Model” and “Year” of a car to a suggested “Car value”. API 1


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const carAlphabet = Object.fromEntries(
    Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i)])
);

rl.question('Vehicles Year', (year) => {
    console.log('Vehicles Year' + year + '!');
    rl.close();
});

test("sum of the carAlphabet positions of each letter in the car name", () => {
  const CarValue = carAlphabet * 100 + rl.question;
});

// ~~~~~~~~~~~~~~~~~~~~~~~~

function carValue(model, year) {
    const carAlphabet = Object.fromEntries(Array.from({ length: 26}, (_, i) => [String.fromCharCode(97 + i), i + 1])
);


const modelValue = model
.toLowerCase()
.split('')
.reduce((sum, char) => sum + (carAlphabet[char] ||0), 0);

return modelValue * 100 + parseInt(year);
};