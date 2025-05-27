const api4 = require ('../api4.js');

describe("api4 function", () => {

    test("1. Max Discount: User inputs of '40, 10' should return '20', (return 5 if age >= 25, 5 if age >= 40, 5 if exp. >=5, 5 if >=10) and sum these values", () => {
        expect(api4(40,10)).toStrictEqual({
        success: true,
        discount: 20,
        message: ""
        })
    });

    test("2. Positive Test (generic input): return 15 if age >= 25 but less than 40, exp >= 5, and exp >= 10", () => {
        expect(api4(36,11)).toStrictEqual({
        success: true,
        discount: 15,
        message: ""
        })
    });

    test("3. No Discount: return 0 if age <25, and exp <5", () => {
        expect(api4(22,4)).toStrictEqual({
        success: true,
        discount: 0,
        message: ""
        })
    });

    test("4. 5% Discount from Age: age >=25 but <40, exp. <5", () => {
        expect(api4(25,0)).toStrictEqual({
        success: true,
        discount: 5,
        message: ""
        })
    });

    test("5. 10% Discount from Age: age>=25 & >=40, exp. <5", () => {
        expect(api4(40,4)).toStrictEqual({
        success: true,
        discount: 10,
        message: ""
        })
    });

    test("6. Error case: >=5 exp. not possible until age 21", () => {
        expect(api4(17,5)).toStrictEqual({
        success: false,
        discount: 0,
        message: "Error: Please check age & experience values, not possible to have entered years of road experience at entered age"
        })
    });

    test("7. 5% Discount from experience: age >=21 & <25, exp. >=5", () => {
       expect(api4(21,5)).toStrictEqual({
        success: true,
        discount: 5,
        message: ""
        }) 
    });

       test("8. Error >=10 years exp., not possible until age 26", () => {
       expect(api4(24,10)).toStrictEqual({
        success: false,
        discount: 0,
        message: "Error: Please check age & experience values, not possible to have entered years of road experience at entered age"
        }) 
    });

    test("9. 10% Discount from age, 0% from exp.", () => {
       expect(api4(55,2)).toStrictEqual({
        success: true,
        discount: 10,
        message: ""
        }) 
    });

    test("10. Error: age or experience not numerical values.", () => {
       expect(api4("five","%*")).toStrictEqual({
        success: false,
        discount: 0,
        message: "Error: Input values, please check input age and experience values are numbers. Please enter: whole numbers rounded down, no negative numbers. If you are aged 25 and half - enter age 25. If you have 4.5 years experience - enter 4"
        }) 
    });

    test("11. Error: age or experience negative values.", () => {
       expect(api4("f%ve",-10)).toStrictEqual({
        success: false,
        discount: 0,
        message: "Error: Input values, please check input age and experience values are numbers. Please enter: whole numbers rounded down, no negative numbers. If you are aged 25 and half - enter age 25. If you have 4.5 years experience - enter 4"
        }) 
    });  
    
    test("12. Error: age or experience negative values.", () => {
       expect(api4("f%ve",-10)).toStrictEqual({
        success: false,
        discount: 0,
        message: "Error: Input values, please check input age and experience values. The entered values of age or experience appears to be greater than expected or possible."
        }) 
    });   
})