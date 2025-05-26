/**
 * Calculates a risk rating based on keywords found in a claim history.
 * The function searches for specific keywords in the claim history text and returns a count of matches.
 * 
 * @param {Object} data - The input object containing the claim history
 * @param {string} data.claim_history - The claim history text to analyze
 * @returns {Object} An object containing either the risk rating or an error message
 */
function convertClaimHistoryToRiskRating(data) {
    // List of keywords to search for in the claim history
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  
    // Input validation: Check if data is a valid object with claim_history property
    if (!data || typeof data !== "object" || !('claim_history' in data)) {
        return { error: "there is an error" };
    }
    
    // Input validation: Check if claim_history is a non-empty string
    if (typeof data.claim_history !== 'string' || data.claim_history.trim() === '') {
        return { error: "there is an error" };
    }
  
    // Convert the claim history to lowercase for case-insensitive matching
    const text = data.claim_history.toLowerCase();
    let count = 0;
                          
    // Search for each keyword in the text
    for (const keyword of keywords) {
        // Create a regular expression to find all occurrences of the keyword
        const regex = new RegExp(keyword, 'g');
        // Find all matches of the keyword in the text
        const matches = text.match(regex);
        // If matches are found, add the count to our total
        if (matches) {
            count += matches.length;
        }
    }
  
    // Return the total count as the risk rating
    return { risk_rating: count };
}
  
// Export the function to make it available for import in other files
module.exports = { convertClaimHistoryToRiskRating };
