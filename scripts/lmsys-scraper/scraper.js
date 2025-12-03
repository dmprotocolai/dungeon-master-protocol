// ============================================================================
// 🛠️ LMSYS CHAT SCRAPER (Save My Logs)
// ============================================================================
// Author:  The Dungeon Master Protocol
// Repo:    https://github.com/dmprotocolai/dungeon-master-protocol
// Support: https://ko-fi.com/dmprotocolai
// License: MIT (Free to use, credit appreciated)
// ============================================================================

(function() {
    const version = "1.0"; // Define version
    
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
    const oversized = charCount > 1100000; // Define oversized check

    // 4. Create Header
    const header = `=== LOG METADATA ===
Date Scraped: ${new Date().toLocaleString()}
Total Messages: ${bubbles.length}
Total Characters: ${charCount.toLocaleString()}
Est. Tokens: ~${estTokens.toLocaleString()}

${oversized ? '⚠️  WARNING: Exceeds Google Docs limit (1.1M chars)\n📄 Open in text editor instead (VS Code, Obsidian, etc.)\n' : ''}
Scraped with: LMSYS Scraper v${version}
GitHub: github.com/dmprotocolai/dungeon-master-protocol
Support: ko-fi.com/dmprotocolai
====================

`;

    
    // 5. Format Final Text
    const separator = '\n\n<==================== PAGE BREAK ====================>\n\n';
    const finalString = header + messages.join(separator);

    // 6. Generate Filename (e.g., "LMSYS_15k_Tokens.txt")
    const date = new Date();
    const kTokens = Math.round(estTokens / 1000); // Turns 15000 into 15
    const filename = `LMSYS_${kTokens}k-Tokens_${date.getHours()}-${date.getMinutes()}.txt`;

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
