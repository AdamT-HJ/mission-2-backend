
//API4 Function 

//Helper Function
const isValidPositiveWholeNumber = input => {
       return typeof input === "number" && !isNaN(input) && input>=0 && Number.isInteger(input)
    };


//Refactored
const api4 = (age, experience) => {
    let discountPercentage = {
        success: true,
        discount: 0,
        message: ""
        };

    // Error messages
    const inputNotValidNumberError = "Error: Input values, please check input age and experience values are numbers. Please enter: whole numbers rounded down, no negative numbers. If you are aged 25 and half - enter age 25. If you have 4.5 years experience - enter 4"

    const impossibleAgeExperienceError = "Error: Please check age & experience values, not possible to have entered years of road experience at entered age"

    const aboveBoundaryLimitsError = "Error: Input values, please check input age and experience values. The entered values of age or experience appears to be greater than expected or possible."


    try{
        //input validation 
        if (!isValidPositiveWholeNumber(age)){
            discountPercentage.success = false;
            discountPercentage.message = inputNotValidNumberError;
            return discountPercentage;
        }

        if (!isValidPositiveWholeNumber(experience)){
            discountPercentage.success = false;
            discountPercentage.message = inputNotValidNumberError;
            return discountPercentage;
        }

        // Experience of 5 years not possible until aged 21, exp. 10 not possible until age 25 (given youngest legal road driving age of 16)
        if ((age <=20 && experience >=5) ||
            (age <=25 && experience >=10) ){
            discountPercentage.success = false;
            discountPercentage.message = impossibleAgeExperienceError;
            return discountPercentage
        }  

        // age cut-off 115, experience cut-off 99 (based on youngest poss. starting age of 16)
        if (age >=115 || experience >=99){
           discountPercentage.success = false;
            discountPercentage.message = aboveBoundaryLimitsError;
            return discountPercentage 
        }

        // adding discount rates as per business logic for age and experience
        if (age >= 25) {
            discountPercentage.discount += 5;    
        }
        if (age >=40) {
            discountPercentage.discount +=5;
        }
        if (experience >= 5) {
            discountPercentage.discount +=5;
        }
        if (experience >= 10) {
            discountPercentage.discount +=5
        }
        return discountPercentage
    }
    
    // Catch for other unexpected errors
    catch (error) {
        console.error("An unexpected error occurred oh no!! 🦧💥💥", error);
        discountPercentage.success = false;
        discountPercentage.discount = 0;
        discountPercentage.message =`"An unexpected error occurred!!", ${error}`;
        return discountPercentage
    }

};

module.exports = api4;








//original
// const api4 = (age, experience) => {
//     let discountPercentage = {
//         success: true,
//         discount: 0,
//         message: ""
//         };
//     try{
        
//         if (typeof age !== 'number' || isNaN(age) || age <0){
//             discountPercentage.success = false;
//             discountPercentage.message = "Error: Input values, please check input age and experience values are numbers. Please enter: whole numbers rounded down, no negative numbers. If you are aged 25 and half - enter age 25. If you have 4.5 years experience - enter 4";
//             return discountPercentage;
//         }

//         if (typeof experience !== 'number' || isNaN(experience) || experience <0){
//             discountPercentage.success = false;
//             discountPercentage.message = "Error: Input values, please check input age and experience values are numbers. Please enter: whole numbers rounded down, no negative numbers. If you are aged 25 and half - enter age 25. If you have 4.5 years experience - enter 4";
//             return discountPercentage;
//         }

        
//         if ((age <=20 && experience >=5) ||
//             (age <=25 && experience >=10) ){
//             discountPercentage.success = false;
//             discountPercentage.message = "Error: Please check age & experience values, not possible to have entered years of road experience at entered age";
//             return discountPercentage
//         }  

      
//         if (age >=115 || experience >=99){
//            discountPercentage.success = false;
//             discountPercentage.message = "Error: Input values, please check input age and experience values. The entered values of age or experience appears to be greater than expected or possible.";
//             return discountPercentage 
//         }

    
//         if (age >= 25) {
//             discountPercentage.discount += 5;    
//         }
//         if (age >=40) {
//             discountPercentage.discount +=5;
//         }
//         if (experience >= 5) {
//             discountPercentage.discount +=5;
//         }
//         if (experience >= 10) {
//             discountPercentage.discount +=5
//         }
//         return discountPercentage
//     }
    
  
//     catch (error) {
//         console.error("An unexpected error occurred oh no!! 🦧💥💥", error);
//         discountPercentage.success = false;
//         discountPercentage.discount = 0;
//         discountPercentage.message =`"An unexpected error occurred!!", ${error}`;
//         return discountPercentage
//     }

// };

// module.exports = api4;