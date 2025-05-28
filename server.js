const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { convertClaimHistoryToRiskRating } = require('./components/riskRating'); 

// in case we want to make use of these:
const axios = require("axios");
const multer = require("multer");

// enable express
const app = express();
const PORT = 3000; //  Hard-coded to 3000 so it always runs there


//-------MIDDLEWARE--------//
app.use(express.json())
//cors
app.use(cors({
    methods: ['GET', 'POST'],
}));
//multer (if required)

//-----ENDPOINTS--------//

//test
app.get("/", (req, res) => {
  res.status(200).send("Backend Server is ready");
});

//---------- CESS (lines 35-135) ---------//

// POST endpoint for API 2
app.post('/api/risk-rating', (req, res) => {
    try {
        // Ensure request has a body
        if (!req.body) {
            return res.status(400).json({ 
                error: "Request body is required" 
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
        console.error('Error processing request:', error);
        
        // Return 500 for unexpected errors
        res.status(500).json({ 
            error: "An unexpected error occurred",
            // Only show error details in development
            ...(process.env.NODE_ENV === 'development' && { 
                details: error.message 
            })
        });
    }
});

//---------- CESS (lines 35-135) ---------//

//----------BRITT (lines 136-236)-------//





// ----- START SERVER -------- //
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });






























































































//-------ADAM (lines 237-337)------//

//-----PORT----//
app
  .listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  })
  .on("error", (error) => {
    console.log("OH NO, SERVER ERROR!!! 🔥🔥👨‍🚒🚒🧯🔥🔥", error);
  });
