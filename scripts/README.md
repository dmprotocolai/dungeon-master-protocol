# 🛠️ The Spite-Driven Toolkit (Scripts)

> **"I learned JavaScript in 30 days purely to delete buttons that annoyed me."**

This folder contains the custom scripts I wrote to fix the User Interfaces of Google Docs and LMSYS. They are lightweight, privacy-friendly (they run locally in your browser), and aggressive against bloatware.

## 📂 The Inventory

| Category | Script Name | Target | Status |
| :--- | :--- | :--- | :--- |
| **Docs UI** | `gemini-killer.js` | **Google Docs** | 🟢 Working |
| **Docs UI** | `focus-mode.js` | **Google Docs** | 🟢 Working |
| **Docs UI** | `sidebar-assassin.js` | **Google Docs** | 🟢 Working |
| **Utility** | `auto-title.js` | **Google Docs** | 🟢 Working |
| **Data** | `lmsys-scraper.js` | **LMSYS / Chatbot Arena** | 🟢 Working |

---

## 📝 Section 1: The Google Docs "Murder" Suite
*Located in: `/scripts/`*

Google Docs has become unusable for neurodivergent writers due to visual clutter. These scripts strip it back to a typewriter interface.

### How to Install (The Easy Way)
1.  Install the **Tampermonkey** extension for Chrome/Edge/Firefox.
2.  Click the extension icon -> **Create a New Script**.
3.  Copy the code from my file (e.g., `gemini-killer.js`).
4.  Paste it into Tampermonkey and hit **Save**.
5.  Refresh Google Docs. Enjoy the silence.

### The Scripts
*   **`gemini-killer.js`**: Removes the "Help Me Write" button and the sparkly AI suggestions.
*   **`banish-meetings-sidebar.js`**: Removes the right-hand sidebars (Calendar, Keep, Tasks, and the intrusive "Meeting Notes" pop-ups) that block the scrollbar.
*   **`banish-tab-index.js`**: Removes the left-hand 'tab index' sidebar and keeps it from ever loading again. Peace be upon ye. 
*   **`focus-mode.js`**: Adds a "Theater Mode" toggle. When active, it dims everything except the page you are typing on.
*   **`auto-title.js`**: Tired of `Untitled Document (345)`? This renames the file automatically with a timestamp `Title - YYYY - MM - DD 00:00:00`. Change the first line to whatever you please.

**A Few Suggestions:**
- Lab Notes: (for researchers)
- Draft: (for writers)
- AAA: (for sort to top/chaos gremlins/screaming into the void)

---

## 💾 Section 2: The LMSYS Scraper
*Located in: `/lmsys-scraper/`*

**The Problem:** LMSYS Chatbot Arena is the best place to test models, but it has no "Export" button. If you try to copy-paste, it selects the text backwards (bottom-to-top) because of how they built the site.

**The Solution:** This script scrapes the DOM, reverses the array to fix the timeline, calculates token counts, and downloads a formatted `.txt` file.

### How to Run (No Installation Needed)
1.  Open [LMSYS Chatbot Arena](https://chat.lmsys.org/).
2.  Have a conversation.
3.  Press **F12** to open Developer Tools -> Click **Console**.
4.  Paste the code from `scraper.js` and hit **Enter**.
5.  **Result:** A file named `LMSYS_15k-Tokens_TIMESTAMP.txt` will download instantly.

> **Pro Tip:** Save this as a "Snippet" in Chrome DevTools so you can run it with two clicks next time.

---

## ⚠️ Disclaimer
These scripts interact with the DOM (Document Object Model) of third-party websites.
*   If Google or LMSYS changes their website code, these scripts might break.
*   If they break, feel free to open an Issue (or fix it yourself and submit a Pull Request).
*   **Privacy:** These scripts run 100% locally on your machine. No data is sent to me or anyone else.

## 📜 License
MIT License. Use them, fork them, break them.
