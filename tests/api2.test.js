// Import the function we want to test from the riskRating component
const { convertClaimHistoryToRiskRating } = require('../components/riskRating');

// Describe block groups related tests together
describe("convertClaimHistoryToRiskRating", () => {
  // Test case 1: Check if the function correctly counts multiple keywords
  test("returns 2 for input with 'crash' and 'scratch'", () => {
    // Input: An object with a claim history containing two keywords
    const input = { claim_history: "I crashed into a pole and scratched the side." };
    // Expected output: Should count both 'crash' and 'scratch' (total 2)
    const expected = { risk_rating: 2 };
    // Assert that the function's output matches our expectation
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  // Test case 2: Check behavior when no keywords are present
  test("returns 0 for input with no keywords", () => {
    // Input: A claim history with no matching keywords
    const input = { claim_history: "No incidents." };
    // Expected output: Should return 0 as there are no matches
    const expected = { risk_rating: 0 };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  // Test case 3: Check counting of multiple keyword occurrences
  test("returns 4 for input with 4 keyword hits", () => {
    // Input: A claim history with four different keywords
    const input = { claim_history: "I crashed, then bumped, then scratched, then smashed." };
    // Expected output: Should count all four keywords
    const expected = { risk_rating: 4 };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  // Test case 4: Check error handling for empty string input
  test("returns error for empty string", () => {
    // Input: An empty string as claim history
    const input = { claim_history: "" };
    // Expected output: Should return an error object
    const expected = { error: "there is an error" };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  // Test case 5: Check error handling for non-string input
  test("returns error for non-string input", () => {
    // Input: A number instead of a string as claim history
    const input = { claim_history: 12345 };
    // Expected output: Should return an error object
    const expected = { error: "there is an error" };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });
});
