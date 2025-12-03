# 🛠️ How to use the LMSYS Scraper

Stop scrolling and highlighting. This script grabs the entire chat log, fixes the sort order, adds token stats, and downloads it as a clean `.txt` file.

### Option 1: The Bookmarklet (Easiest)
1.  Create a new Bookmark in Chrome/Edge/Firefox.
2.  Name it "LMSYS Scraper".
3.  In the **URL** field, paste the entire code block below.
4.  When you are on a chat page, just click the bookmark.

### Option 2: The Console (Dev Mode)
1.  Press `F12` to open Developer Tools. (or right click + inspect)
2.  Go to the **Console** tab.
3.  Paste the code and hit **Enter**.

### Option 3: Snippets (Browser Console)
1. Press `F12` to open Developer Tools. (or right click + inspect)
2. Go to the **Sources** tab.
3. Look in the right hand corner for Page Snippets (it may be hidden behind the >>)
4. Click `+ New Snippet` and paste the code into the box to the right
5. `Ctrl + Enter` to run

### 📜 The Code
```javascript
// ============================================================================
// 🛠️ LMSYS CHAT SCRAPER (Save My Logs)
// ============================================================================
// Author:  The Dungeon Master Protocol
// Repo:    https://github.com/dmprotocolai/dungeon-master-protocol
// Support: https://ko-fi.com/dmprotocolai
// License: MIT (Free to use, credit appreciated)
// ============================================================================


javascript:(function(){
    // 1. Find bubbles
    const bubbles = document.querySelectorAll('.prose');
    if (bubbles.length === 0) {
        alert("ERROR: No chat bubbles found. Are you on the right page?");
        return;
    }

    // 2. Extract and Reverse (Fixes LMSYS DOM Order)
    const messages = Array.from(bubbles).map(b => b.innerText);
    messages.reverse(); 

    // 3. Calculate Stats
    const fullText = messages.join('');
    const charCount = fullText.length;
    const estTokens = Math.ceil(charCount / 4); 

    // 4. Create Header
    const header = `=== LOG METADATA ===
Date Scraped: ${new Date().toLocaleString()}
Total Messages: ${bubbles.length}
Total Characters: ${charCount.toLocaleString()}
Est. Tokens: ~${estTokens.toLocaleString()}

Scraped with: LMSYS Scraper v${version}
GitHub: github.com/dmprotocolai/dungeon-master-protocol
Support: ko-fi.com/dmprotocolai
====================`;

    // 5. Format Final Text
    const separator = '\n\n<==================== PAGE BREAK ====================>\n\n';
    const finalString = header + messages.join(separator);

    // 6. Generate Filename
    const date = new Date();
    const kTokens = Math.round(estTokens / 1000);
    const filename = `LMSYS_${kTokens}k-Tokens_${date.getHours()}${date.getMinutes()}.txt`;

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
