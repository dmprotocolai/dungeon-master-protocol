// ============================================================================
// 🛠️ LMSYS CHAT SCRAPER (Save My Logs)
// ============================================================================
// Author:  The Dungeon Master Protocol
// Repo:    https://github.com/dmprotocolai/dungeon-master-protocol
// Support: https://ko-fi.com/dmprotocolai
// License: MIT (Free to use, credit appreciated)
// ============================================================================


(function() {
    // 1. Find bubbles
    const bubbles = document.querySelectorAll('.prose');
    if (bubbles.length === 0) {
        alert("ERROR: No chat bubbles found.");
        return;
    }

    // 2. Extract and Reverse
    const messages = Array.from(bubbles).map(b => b.innerText);
    messages.reverse(); 

    // 3. Calculate Stats
    const fullText = messages.join('');
    const charCount = fullText.length;
    const estTokens = Math.ceil(charCount / 4); 
    const oversized = charCount > 1100000;

    // NEW STEP: Ask for Model Name immediately

    let modelName = prompt("Enter Model Name (for metadata):", "Gemini-Pro");
    if (!modelName) modelName = "Unknown_Model"; // Fallback if you hit Cancel

    // 4. Create Header 
    const header = `=== LOG METADATA ===
Date Scraped: ${new Date().toLocaleString()}
Model: ${modelName}
Total Messages: ${bubbles.length}
Total Characters: ${charCount.toLocaleString()}
Est. Tokens: ~${estTokens.toLocaleString()}

${oversized ? '⚠️  WARNING: Exceeds Google Docs limit (1.1M chars)\n' : ''}
Scraped with: LMSYS Scraper v1.2
====================

`;

    // 5. Format Final Text
    const separator = '\n\n<==================== PAGE BREAK ====================>\n\n';
    const finalString = header + messages.join(separator);

    // 6. Generate Filename
    // Clean the name for Windows (Turn "Gemini 1.5 Pro" into "Gemini-1-5-Pro")
    const safeModelName = modelName.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-');
    
    const date = new Date();
    const kTokens = Math.round(estTokens / 1000); 
    const filename = `${safeModelName}_${kTokens}k-Tokens_${date.getHours()}-${date.getMinutes()}.txt`;

    // 7. Download
    const blob = new Blob([finalString], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
})();
