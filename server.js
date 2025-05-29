const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { convertClaimHistoryToRiskRating } = require("./components/riskRating");

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

//---------- CESS (lines 35-135) ---------//
// POST endpoint for API 2
app.post("/api/risk-rating", (req, res) => {
  try {
    // Ensure request has a body
    if (!req.body) {
      return res.status(400).json({
        error: "Request body is required",
      });
    }

    const result = convertClaimHistoryToRiskRating(req.body);

    // If there's an error in the result (invalid input)
    if (result.error) {
      return res.status(400).json(result); // 400 Bad Request
    }

    // Success response with 200 OK
    res.status(200).json(result);
  } catch (error) {
    // Log the error for debugging
    console.error("Error processing request:", error);

    // Return 500 for unexpected errors
    res.status(500).json({
      error: "An unexpected error occurred",
      // Only show error details in development
      ...(process.env.NODE_ENV === "development" && {
        details: error.message,
      }),
    });
  }
});

//---------- CESS (lines 35-135) ---------//

//----------BRITT (lines 136-236)-------//

app.post("/carValue", (req, res) => {
  const { model, year } = req.body;

  function carValue(model, year) {
    if (typeof model !== "string") {
      console.log("Model is undefined");
    }
    if (typeof year !== "number") {
      console.log("Year is undefined");
    }
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
  }

  const outcome = carValue(model, year);

  res.json({
    message: `This is the paramaters`,
    data: req.body,
    outcome: outcome,
  });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (error) => {
  console.error('Server failed to start:', error);
});






















//-------ADAM (lines 237-337)------//

