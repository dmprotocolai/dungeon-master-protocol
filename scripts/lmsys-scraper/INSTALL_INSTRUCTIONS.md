# 🛠️ How to use the LMSYS Scraper

Stop scrolling and highlighting. This script grabs the entire chat log, fixes the sort order, adds token stats, and downloads it as a clean `.txt` file.

### Option 1: The Bookmarklet (Easiest)
1.  Create a new Bookmark in Chrome/Edge/Firefox.
2.  Name it "LMSYS Scraper".
3.  In the **URL** field, paste the entire code block below.
4.  When you are on a chat page, just click the bookmark.

### Option 2: The Console (Dev Mode)
1.  Press `F12` to open Developer Tools. (or right click + `Inspect`)
2.  Go to the **Console** tab.
3.  Paste the code and hit **Enter**.

### Option 3: Snippets (Browser Console)
1. Press `F12` to open Developer Tools. (or right click + `Inspect`)
2. Go to the **Sources** tab.
3. Look in the right hand corner for Page Snippets (it may be hidden behind the `>>`)
4. Click `+ New Snippet` and paste the code into the box to the right
5. `Ctrl + Enter` to run

![Snippets preview](https://github.com/dmprotocolai/dungeon-master-protocol/blob/ca6c0942b629f7270e47b4bbef11821eb9277533/assets/browser-console.png)

---

>Example of extracted metadata 

![I'd pick the 100 Elon ducks too](https://github.com/dmprotocolai/dungeon-master-protocol/blob/ca6c0942b629f7270e47b4bbef11821eb9277533/assets/metadata-example.png)

---

## 📊 File Size Limits

### Google Docs Limit: 1,102,500 characters

If your log exceeds this limit:
- ❌ **Don't** try to open in Google Docs (it will error)
- ✅ **Do** keep the .txt file in Google Drive (searchable)
- ✅ **Do** open locally if needed (VS Code, Obsidian, Notepad++)

**The scraper will warn you** if a file exceeds this limit.

![the code screams at you for free](https://github.com/dmprotocolai/dungeon-master-protocol/blob/5ce780601fcdb62683e1c82d6659fee8ba196b14/assets/warning-example.png)

>Pro Tip: If you do need to open a large .txt in Docs, let Google's servers do the heavy lifting, copy the file to your Drive, within a Doc click File > Open, it will render into a Doc automatically. 

### Storage Requirements

**Average conversation sizes:**
- Short (50 turns): ~50k chars = 50 KB
- Medium (200 turns): ~200k chars = 200 KB
- Long (500 turns): ~500k chars = 500 KB
- Epic (1570 turns): ~3.7M chars = 3.7 MB

**My entire research archive:**
- 6M tokens = ~4.5 MB total
- Less than 2 photos
- Searchable forever

**Plain text is beautiful.**

---

## ⚠️ Disclaimer
These scripts interact with the DOM (Document Object Model) of third-party websites.
*   If LMSYS changes their website code, this script might break.
*   If it breaks, feel free to open an Issue (or fix it yourself and submit a Pull Request).
*   **Privacy:** These scripts run 100% locally on your machine. No data is sent to me or anyone else. I'm drowning in enough data, I don't want yours too.

---

## 📜 License
MIT License. Use them, fork them, break them.

---

## ☕ Support This Work

These scripts are **free forever** (MIT License).

If they saved your sanity:
- ⭐ **Star this repo** (helps others find it)
- 🐛 **Report bugs** (open an issue)
- ☕ **Buy me a coffee** [Ko-Fi link](https://ko-fi.com/dmprotocolai)

Want more tools for writers?
- 📚 **Writer's Resources** (templates, no AI needed) - $29
- 🤖 **AI Author's Toolkit** (the full framework) - $79

[Browse the full toolkit →](https://ko-fi.com/dmprotocolai)

---

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
```

