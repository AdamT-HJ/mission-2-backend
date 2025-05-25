const express = require("express");
require("dotenv").config();
const cors = require("cors");

// in case we want to make use of these:
const axios = require("axios");
const multer = require("multer");

// enable express
const app = express();

//-------MIDDLEWARE--------//
app.use(express.json());

//cors
app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

//multer (if required)

//-----ENDPOINTS--------//

//test
app.get("/", (req, res) => {
  res.status(200).send("Backend Server is ready");
});

app.post("/postRequest", (req, res) => {
  res.status(201).json({ model: "Civic", year: 2014 });
});

//---------- CESS (lines 35-135) ---------//

//----------BRITT (lines 136-236)-------//
function carValue(model, year) {
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

  return modelValue * 100 + parseInt(year);
  // Final carValue addition modelValue(60) * 100 + Year(2015) = carValue
}

//-------ADAM (lines 237-337)------//

//-----PORT----//
app
  .listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  })
  .on("error", (error) => {
    console.log("OH NO, SERVER ERROR!!! 🔥🔥👨‍🚒🚒🧯🔥🔥", error);
  });
