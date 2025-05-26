
const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { convertClaimHistoryToRiskRating } = require('./components/riskRating'); 

// in case we want to make use of these:
const axios = require('axios');
const multer = require ('multer');


// enable express
const app = express();




//-------MIDDLEWARE--------//
app.use(express.json())


//cors
app.use(cors({
    methods: ['GET', 'POST'],
}));

//multer (if required)


//-----ENDPOINTS--------//

//test
app.get('/', (req, res) => {
    res.status(200).send('Backend Server is ready');
})


//---------- CESS (lines 35-135) ---------//
app.post('/api/risk-rating', (req, res) => {
    const result = convertClaimHistoryToRiskRating(req.body);
    res.json(result);
  });

//----------BRITT (lines 136-236)-------//




































































































//-------ADAM (lines 237-337)------//




































































































//-----PORT----//
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
})
    .on('error', (error) => {
        console.log("OH NO, SERVER ERROR!!! 🔥🔥👨‍🚒🚒🧯🔥🔥", error);
    });