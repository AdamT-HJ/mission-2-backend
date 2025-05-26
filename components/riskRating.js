//defining my function

function convertClaimHistoryToRiskRating(data) {
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  
    // Check for invalid input
    if (!data || typeof data !== "object" || !('claim_history' in data)) {
        return { error: "there is an error" };
    }
    
    // Check if claim_history is not a string or is an empty string
    if (typeof data.claim_history !== 'string' || data.claim_history.trim() === '') {
        return { error: "there is an error" };
    }
  
    const text = data.claim_history.toLowerCase();
    let count = 0;
  
    for (const keyword of keywords) {
        const regex = new RegExp(keyword, 'g');
        const matches = text.match(regex);
        if (matches) {
            count += matches.length;
        }
    }
  
    return { risk_rating: count };
}
  
module.exports = { convertClaimHistoryToRiskRating };
