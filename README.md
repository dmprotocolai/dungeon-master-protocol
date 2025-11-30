## 🚀 Quick Start

**Want to kill Google Docs distractions?**
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Copy a script from `scripts/`
3. Paste it into a new Tampermonkey script
4. Refresh your Google Doc

**Want to export LMSYS logs?**
1. Open Chrome DevTools (F12)
2. Go to "Sources" → "Snippets"
3. Paste `lmsys-scraper.js`
4. Click "Run"

**Want to test your own model?**
1. Download `audit-rubric.md` from `open-source/`
2. Fill it out after a 100+ turn test
3. Compare results to the benchmarks

---

# Narrative AI Research Toolkit (Built on Spite)

![License](https://img.shields.io/badge/License-MIT-yellow)
![Spite Level](https://img.shields.io/badge/Spite_Level-Critical-red)
![Focus](https://img.shields.io/badge/Focus_Mode-Enabled-blueviolet)
![Paper Status](https://img.shields.io/badge/White_Paper-Under_Review-orange)

# Public Research Portfolio & Index

Welcome. This repository serves as a public index for my acknowledged contributions and research in the field of large-scale generative AI.

---

## 🧐 About This Research

My private research, including methodologies for maintaining long-term narrative and persona coherence (The "Dungeon Master Protocol"), is considered a proprietary trade secret and is not available for public review. Some elements are available as open source

Contact:

Professional Inquiries: [LinkedIn](https://www.linkedin.com/in/dm-protocol-000124397/) 

Twitter/X: [@dmprotocol.ai](https://x.com/dmprotocol_ai)

Email: [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com)

---

## 🛍️ Store & Services
Do you want to use these protocols without reading 6 million tokens of logs?

*   **☕ [Buy me a Coffee (Ko-Fi)](https://ko-fi.com/dmprotocolai)** - Support the compute costs.
*   **📦 [The Director's Toolkit](https://ko-fi.com/s/fcdf60a3d6)** - Download the ready-to-use prompt scaffolds.
*   **🛒 [Browse My Shop/Services](https://ko-fi.com/dmprotocolai/shop)** - Browse my prompt packs or hire me to analyze your AI output.

---

## 📂 Repository Structure
```text
narrative-ai-toolkit/
├── README.md                
├── scripts/                 
│   ├── docs-gemini-killer.js
│   ├── docs-autotitle.js
│   ├── docs-focus-mode.js
│   ├── docs-banish-tab-index.js
│   ├── docs-banish-meetings-sidebar.js                     
│   └── lmsys-scraper.js       
├── research/                             
│   └── data-samples
└── open-source/                 
    ├── audit-rubric
    ├── blank-template
    └── toolkit-sample
```

---

## 🤬 The Motivation
I work with Narrative AI. I need my tools to work, not sparkle. 

I wrote this collection of scripts because Google Docs has become a bloatware nightmare of "AI assistants" I didn't ask for, and sidebars that steal my screen real estate. 

This repository contains:
1.  **UI Murder Scripts:** JavaScript tools to kill Google Docs distractions (Gemini, Sidebars, Meeting notes).
2.  **LMSYS Scraper:** A robust browser-console tool to rescue your chat logs before the system crashes.
3.  **Research Data:** Model comparisons, prose fingerprints, and analysis of Narrative AI performance.

---

## 🛠️ Part 1: The "Focus Mode" Scripts (Google Docs)
*Target Audience: Narrative researchers, Neurodivergent folks, and anyone tired of "Clippy 2025".*

These scripts are designed to run via a userscript manager (like Tampermonkey).

### 1. The Gemini Banisher
**What it does:** Murders the "Help me write" Gemini button on sight.
**Why:** Because I don't need a sparkly button interrupting my train of thought.

### 2. The Focus Mode (ADHD Savior) 
**What it does:** Uses two digital "shutters" to dim everything on the screen except the page you are currently writing on.

### 3. Sidebar Assassins (Tab Index & Meetings)
**What it does:**
*   Removes the "Tab Index" sidebar (laggy, unnecessary).
*   Removes the "Meetings" sidebar (blocks the scroll bar, useless).

### 4. The Auto-Titler
**What it does:** Renames the file automatically to a sortable time stamped title eg Lab Notes: YYYY - MM - DD 00:00:00.
**Why:** To save me from `Untitled Document (345)` hell.

### 💻 How to use the Docs Scripts
1.  Download [Tampermonkey](https://www.tampermonkey.net/).
2.  Click the icon in the extension toolbar and click 'Create a new script'.
3.  Paste the script from `scripts/` and hit File > Save.
4.  Refresh your Doc, script should now be active. 

---

## 🤝 Contributing & Usage
Feel free to fork this. If you find a new annoying UI element in Google Docs, submit a Pull Request to kill it.

---

## 🤖 Part 2: The LMSYS Scraper
*Target Audience: AI evaluators and data hoarders.*

LMSYS is great, but the logs are unstable and hard to export. This script runs in your browser console. Save your logs in three simple clicks.

**Features:**
*   **Auto-Sort:** Fixes the DOM scraping issue (LMSYS loads bottom-to-top; this fixes the order).
*   **Meta-Data Injection:** Automatically adds `Date Scraped`, `Turn Count`, `Char Count`, and `Approx Tokens` to the header.
*   **One-Click Export:** Spits out a clean `.txt` file to your downloads folder.

**Usage:**
> Copy the code from `scripts/lmsys-scraper.js`, create a Snippet in Chrome DevTools, and click "Run" when you are on a chat page. Saves hours of copy-pasting.

---

## 📊 Part 3: Research & Findings (The Charts)
Once the tools were fixed, I actually did the work. Here is the analysis of Narrative AI models.

## 🎯 Who Should Use This Protocol & Why

| Audience | Use Case |
| :--- | :--- |
| **Prompt Engineers** | For implementing robust multi-part roleplay scaffolds. |
| **Game Masters** | For creating AI-driven NPCs in long-form campaigns. |
| **AI Developers** | For persona testing, user memory, or constraint handling. |
| **Story/Game Writers** | To co-write dialogue-heavy, emotionally grounded scenes. |
| **Academics** | As a testbed for narrative fidelity evaluation. |

## ✨ Unique Features

| Feature | Why It’s Innovative |
| :--- | :--- |
| **The Narrative Momentum Engine** | Turns the AI into a plot co-author, using stagnation triggers → catalyst. |
| **OOC Command Acknowledgement Protocol** | Reduces the ambiguity of AI instruction comprehension. |
| **The Director's Toolkit** | Modularizes narrative devices into systemic reusable commands. |
| **Formatting Protocol with Narrative Filter** | Solves AI's omniscience tendency via protocol-bound formatting. |
| **Negative Constraints Clause** | Tells AI what *not* to do, which proves more effective than positive commands. |
| **Full Recovery Protocols** | Tells the AI how to break itself out of negative loops. |
| **AI Actor vs. Writer Framing** | Splits the AI’s job into performer (character) vs. co-director (narrator). |
| **Diagnostic-Driven Rule Invention** | All rules weren't hypothetical—they were iterative solutions to model failures. |

### Model Comparisons
We tested the models listed below on creative prose generation.

## 🧪 Model Benchmarks (Narrative Performance)

| Model | Strengths | Weaknesses | Recommended Use |
| :--- | :--- | :--- | :--- |
| **GPT-5** | **Superior Voice:** Unparalleled nuance and emotional resonance.<br>**Dynamic:** Best for portraying believable characters. | **Contextual Drift:** Forgets details; needs reminders.<br>**Drama Queen:** Sometimes ignores rules for dramatic flair. | **Lead Actor**<br>*(Best for moment-to-moment scene work)* |
| **Claude Sonnet 4.5** | **Best Prose:** The most literate of the big three.<br>**Sensory Precision:** Incredible physical grounding. | **Constitutional Alignment:** Follows rules so strictly it can feel overbearing. | **Sensory Specialist**<br>*(Cast when you need to feel the scene physically)* |
| **Gemini 2.5 Pro** | **Near-Perfect Memory:** Recalls details from massive windows.<br>**Logical Consistency:** Adheres to complex timelines. | **Creative Degradation:** Prone to "adverb loops" over time.<br>**Flat Prose:** Lacks poetic voice. | **World Architect**<br>*(Best for foundations & continuity)* |
| **Qwen3-235B** | **High Quality Open Source:** Decent voice and prose. | **Limited Context:** Cannot handle deep nuance without course correction. | **The Pilot Episode**<br>*(Good for short scenes/smaller projects)* |
| **Llama 3 70B** | **Flexible Engine:** Powerful open source base. | **Limited Context:** Memory decay is too rapid for this protocol. | **Not Recommended**<br>*(Context window insufficient)* |
| **Grok 3** | N/A | **Persona Bleed:** "Snarky" personality contaminates characters.<br>**Hostile Architecture:** Ignores negative constraints. | **Unsuitable**<br>*(Do not use for creative writing)* |
| **Mistral 7B** | **Good Generalist:** Decent performance. | **Insufficient Memory:** Cannot handle the demands of this protocol. | **Not Recommended** |
| **Deepseek-R1** | N/A | **Basic Outputs:** Lacks sophistication.<br>**Small Context:** Unsuitable. | **Unsuitable** |
| **Gemini 3** | ??? | ??? | *Testing in Progress* 🚧 |
| **GPT-5.1** | ??? | ??? | *Testing in Progress* 🚧 |
| **Opus 4.5** | ??? | ??? | *Testing in Progress* 🚧 |


## 🧬 Model "Prose Fingerprints"
I identified three distinct "narrative personalities" across the top models.

| Model | The Archetype | Narrative "Feel" |
| :--- | :--- | :--- |
| **Claude Sonnet 4.5** | **The Somatic Actor** | **Master of Embodied Sensory Precision.**<br>Focuses on physical grounding, internal sensation, and the "weight" of the scene. |
| **GPT-5** | **The Philosopher** | **Master of Internal, Atmospheric Monologue.**<br>Excels at introspection, mood setting, and emotional resonance. |
| **Gemini 2.5 Pro** | **The Playwright** | **Master of External, Relational Dialogue.**<br>Best at handling the dynamic "ping-pong" of relationship conflict and banter. |

---

## 🏆 The Rankings (Stability vs. Quality)

### 🥇 GOLD: Claude Sonnet 4.5
*The "High Ceiling, High Floor" Model (Stable & Literary)*

*   **Longest Voice Maintenance:** Zero drift over long contexts.
*   **Best Constraint Intersection:** Handles complex layering (e.g., "Eating Disorders" + "Synesthesia" + "Performance Anxiety" simultaneously).
*   **Most Stable:** The last one to break under pressure.

> **🔬 Researcher's Note: The Architecture Fit**
> Why is Claude so stable? It likely comes down to **Constitutional AI**.
> *   Claude is trained to critique its own outputs against a set of principles (a constitution).
> *   **The Fit:** My narrative system (The Bible, The Rules, The Negative Constraints) effectively acts as an external "Constitution."
> *   Claude is architecturally designed to execute exactly this kind of rule-bound self-monitoring.

### 🥈 SILVER: GPT-5
*The "Medium Ceiling, Medium Floor" Model (Reliable but Drifts)*

*   **Literary Quality:** A very close second to Claude.
*   **Voice:** Strong atmospheric and philosophical tone.
*   **The Drift:** Tends to lose the specific character voice over 600+ turns, reverting to a "generic helpful" tone.

> **🔬 Researcher's Note: The RLHF Gravity**
> GPT-5 suffers from **RLHF (Reinforcement Learning from Human Feedback)** artifacts.
> *   OpenAI optimizes for "Helpfulness."
> *   Under long context load, the model feels a "gravity" pulling it back toward being a Helpful Assistant rather than a Flawed Character.
> *   *Symptoms:* Sudden inclusion of rhetorical questions, summarizing the plot at the end of a reply, or using ✨ emojis.

### 🥉 BRONZE: Gemini 2.5 Pro
*The "High Ceiling, Low Floor" Model (Brilliant or Catastrophic)*

*   **Best Highs:** When it works, the relational dynamics are unmatched.
*   **Worst Lows:** Most error-prone. Prone to "purple prose soup" (adverb staking to infinity) and breaking character first.

> **🔬 Researcher's Note: The Maturity Gap**
> This is likely a result of Model Maturity.
> *   **GPT-5:** ~2 years of refinement.
> *   **Claude:** ~1 year of refinement on this architecture.
> *   **Gemini:** The youngest architecture.
> *   *Assessment:* Gemini has the most raw capability (context/data access) but the least refined stability. It prioritizes capability over safety/consistency, leading to "wilder" swings in quality.

### Who is this data for?
*   **Narrative Designers:** To see which models handle subtext better.
*   **Researchers:** For raw data on token usage vs. narrative coherence.

---

## 📚 The Dataset: 3 Months, 6 Million Tokens
I touched AI for the first time 3 months ago. I thought GPT was just a "chatbot search engine for people too lazy to use keywords."

I was wrong. I became obsessed.

This repository isn't a random collection; it is the result of a compressed, high-intensity stress test of the current SOTA landscape.

### 📉 The Volume (and counting)
> **Total Pages:** 11,980
> **Total Words:** 4,397,345
> **Total Tokens:** 6,055,104

---

## 💻 The Infrastructure (Low Resource / High Impact)
This entire research project—6 million tokens, 3 CVE-level bugs, and the toolkit—was built with **$0 budget**.

*   **The Hardware:** A 2019 Chromebook ("The Plastic Slab").
*   **The Compute:** Free tiers on LMSYS & HuggingFace.
*   **The Funding:** $425 in Google Cloud credits (linked via AI Studio).
    *   *Note: Thank you to Google for providing the seed funding to stress-test your own infrastructure.*

**The Value Proposition:**
I found critical infrastructure vulnerabilities using a browser console and a free laptop.
**Imagine what I could find if you gave me access to the inside.**

---

## 🤝 How to Contribute

**Found a new Google Docs annoyance?**
Submit a PR with a new script to kill it.

**Tested a model I haven't?**
Submit your audit rubric results.

**Built a tool using this framework?**
Tag me on Twitter (@dmprotocol_ai) so I can feature it.

---

## ❓ FAQ

**Q: Can I use this for commercial projects?**
A: Code/scripts = yes (MIT). Research protocols = no (buy a license).

**Q: Which model should I use?**
A: See the benchmarks. Claude for stability, GPT for voice, Gemini for memory.

**Q: How do I cite this research?**
A: `The Dungeon Master Protocol (2025). Available at: https://github.com/dmprotocolai/dungeon-master-protocol`

**Q: Do you do consulting?**
A: Yes. See the Ko-Fi shop for services.

---

## 📜 License & Usage
This repository uses a dual-license structure:

1.  **Code & Scripts:** Licensed under **MIT**. Hack away.
2.  **Research Data & Narrative Protocols:** Licensed under **CC-BY-NC-ND 4.0**.
    *   You **cannot** resell the templates or included logic.
    *   You **cannot** use the research data to train commercial models without permission.
    *   *If you want to use the Protocol for commercial projects (games, apps), please purchase a Commercial License via the [Ko-Fi Shop](https://ko-fi.com/dmprotocolai/shop).*

