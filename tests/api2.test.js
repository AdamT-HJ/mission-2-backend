const { convertClaimHistoryToRiskRating } = require('./riskRating');

describe("convertClaimHistoryToRiskRating", () => {
  test("returns 2 for input with 'crash' and 'scratch'", () => {
    const input = { claim_history: "I crashed into a pole and scratched the side." };
    const expected = { risk_rating: 2 };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  test("returns 0 for input with no keywords", () => {
    const input = { claim_history: "No incidents." };
    const expected = { risk_rating: 0 };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  test("returns 4 for input with 4 keyword hits", () => {
    const input = { claim_history: "I crashed, then bumped, then scratched, then smashed." };
    const expected = { risk_rating: 4 };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  test("returns error for empty string", () => {
    const input = { claim_history: "" };
    const expected = { error: "there is an error" };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });

  test("returns error for non-string input", () => {
    const input = { claim_history: 12345 };
    const expected = { error: "there is an error" };
    expect(convertClaimHistoryToRiskRating(input)).toEqual(expected);
  });
});
