//!Brittany - Convert “Model” and “Year” of a car to a suggested “Car value”. API 1

//! Tests and test cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Base test

//Defining add so the test() function passes
function add(a, b) {
  return a + b;
}

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
}); // Failed because add wasn't defined so we created a function above to pass the test.

// Writing the test into a function
function testFunc(a, b) {
  return 2 + 3;
}

// Test One - Real Model and Year

test("RealModelAndYear", () => {
  expect(func({ model: "Toyota", year: 2014 })).toEqual({ carValue: 11614 });
});

// Test Two - Not inputting a model

test("Not inputting a model", () => {
  expect(func({model: , year: 2014})).toEqual({ carValue: InputNotComplete });
});

// Test Three - Not putting in a year

test("Not putting in a year", () => {
  expect(func({model: "Toyota", year: })).toEqual({ carValue: InputNotComplete })
})






//! Figuring out how I wanted my function

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const carAlphabet = Object.fromEntries(
//   Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i)])
// );

// rl.question("Vehicles Year", (year) => {
//   console.log("Vehicles Year" + year + "!");
//   rl.close();
// });

// test("sum of the carAlphabet positions of each letter in the car name", () => {
//   const CarValue = carAlphabet * 100 + rl.question;
// });

// // ~~~~~~~~~~~~~~~~~~~~~~~~

// function carValue(model, year) {
//   const carAlphabet = Object.fromEntries(
//     Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i), i + 1])
//   );

//   const modelValue = model
//     .toLowerCase()
//     .split("")
//     .reduce((sum, char) => sum + (carAlphabet[char] || 0), 0);

//   return modelValue * 100 + parseInt(year);
// }
