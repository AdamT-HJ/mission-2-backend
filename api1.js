 
 
 function api1(model, year) {
    console.log(typeof model)
     console.log(model)          
     if (typeof model !== "string") {
        console.log("Model is undefined")
     };
     if (typeof year !== "number") {
        console.log("Year is undefined")
     };
    //Establishing the car value based on the model and year of the vehicle
    const carAlphabet = Object.fromEntries(
      Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i), i + 1])
    ); //Array is created of 26 elements and then maps
    //_ acts like a placeholder and i is the index
    // 97 is the ASCII code for 'a'
    // string.fromCharCode converts a number into its corresponding character

    const modelValue = model
      .toLowerCase()
      .split("")
      .reduce((sum, char) => sum + (carAlphabet[char] || 0), 0);
    // Reduces the function | sum/reduce starts at 0 and char is each character from the array, adds it to the sum, + the car alphabet
    // and if there is no char found in car alphabet it uses 0.

    const carValue = modelValue * 100 + parseInt(year);

    const carValueObj = {
      model: modelValue,
      vehicleYear: year,
      value: carValue,
    };

    return JSON.stringify(carValueObj);
    // Final carValue addition modelValue(60) * 100 + Year(2015) = carValue
};

api1("toyota", 2014)

module.exports = api1;