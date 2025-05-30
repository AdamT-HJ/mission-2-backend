//!Brittany - Convert “Model” and “Year” of a car to a suggested “Car value”. API 1
const api1 = require("../api1.js");
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

// Describe wrapper
describe("Api1 test functions", () => {
  // Test One - Real Model and Year

  test("RealModelAndYear", () => {
    expect(api1("Toyota", 2014)).toEqual({ carValue: 11614 });
  });

  // Test Two - Not inputting a model

  test("Not inputting a model", () => {
    expect(api1("", 2014)).toEqual({ carValue: "" });
  });

  // Test Three - Not putting in a year

  test("Not putting in a year", () => {
    expect(api1("Toyota", "")).toEqual({ carValue: "" });
  });

  // Test Four - Not putting in a year

  test("Putting year in both inputs", () => {
    expect(api1("2020", "2020")).toEqual({ carValue: "" });
  });

  // Test Five -
  test("Putting model in both inputs", () => {
    expect(api1("Toyota", "Toyota")).toEqual({ carValue: "" });
  });

  test("Putting nothing in both inputs", () => {
    expect(api1("", "")).toEqual({ carValue: "" });
  });
});

// Testing showed I needed to input console logs incase people put in invalid inputs - added my if code to server.js and check the endpoint was still functioning.

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
