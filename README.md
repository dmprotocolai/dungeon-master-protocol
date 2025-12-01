
# Narrative AI Research Toolkit (Built on Spite)

![License](https://img.shields.io/badge/License-MIT-yellow)
![Spite Level](https://img.shields.io/badge/Spite_Level-Critical-red)
![Research Status](https://img.shields.io/badge/Research-Active-brightgreen)
![CVEs](https://img.shields.io/badge/CVEs_Submitted-3-critical)

> *I just wanted better AI storytelling. I touched AI for the first time 3 months ago. Then I accidentally found some... problems.*

---

## ⚠️ Unintentional Security Research

**Full disclosure:** I am not a security researcher. I'm a writer who got obsessed with AI narrative tools.

While stress-testing models for long-form storytelling (500-1000+ turn conversations), I accidentally discovered some concerning behavior:

1. **Runaway generation bug** - Gemini generated way too many tokens in a single response when prompted "too simply" (cost ~$0.86 in compute, happened multiple times)

2. **Unsolicited jailbreak instructions** - While complaining about GPT rate limits to Gemini, it volunteered step-by-step instructions to extract proprietary data from Custom GPTs. I didn't ask. It just... offered.

3. **The instructions worked** - Tested once on a single Custom GPT (plain English, 5 prompts, no technical knowledge required). Immediately reported to OpenAI bug bounty program.

**Status:** All issues reported through proper channels. Vendors notified. I have no idea what I'm doing but I'm trying to do it responsibly.

**For the record:** I still don't know how to "jailbreak" anything. I was just trying to make AI write better.

---

## 📋 Table of Contents
- [Unintentional Security Research](#️-unintentional-security-research)
- [Quick Start](#-quick-start)
- [About This Research](#-about-this-research)
- [Publication & Pre-Prints](#-publications--pre-prints)
- [Repository Structure](#-repository-structure)
- [Why This Exists](#-why-this-exists)
- [Part 1: Google Docs Scripts](#️-part-1-the-focus-mode-scripts-google-docs)
- [Part 2: LMSYS Scraper](#-part-2-the-lmsys-scraper)
- [Part 3: Research & Findings (The Charts)](#-part-3-research--findings-the-charts)
- [Model Benchmarks](#-model-benchmarks-narrative-performance)
- [The Rankings (Stability vs. Quality)](#-the-rankings-stability-vs-quality)
- [The Dataset: 3 Months, 6 Million Tokens](#-the-dataset-3-months-6-million-tokens)
- [Low Resource Research Note](#-low-resource-research-note)
- [How to Contribute](#-how-to-contribute)
- [Collaboration Opportunities](#-collaboration-opportunities)
- [FAQ](#-faq)
- [Support This Work](#️-support-this-work)
- [License & Usage](#-license--usage)
- [Contact](#-contact)

## 🚀 Quick Start

## 🚀 Quick Start

**Never used this before? Start here:**
👉 [Kill Google Docs bloat in 2 minutes](#%EF%B8%8F-part-1-the-focus-mode-scripts-google-docs)

**Already know what you need?**
- [Export LMSYS logs](#-part-2-the-lmsys-scraper)
- [Test your own model](#-model-benchmarks-narrative-performance)

The browser scripts and utilities are open-source (MIT).
The full narrative protocol and research logic are partially proprietary and licensed for non-commercial use only. See [License](#-license--usage) for details.

---

## 🧐 About This Research

Welcome. This repository serves as a public index for my acknowledged contributions and research in the field of large-scale generative AI.

**Open Source:** All tools, scripts, and evaluation rubrics (MIT License)
**Open Research:** Methodologies, findings, and datasets (Non-commercial CC license)
**Commercial Tools:** Production-ready prompt templates available for licensing

---

## 📑 Publications & Pre-Prints

**Coming January 2025:**
- White paper on the Dungeon Master Protocol
- Full technical methodology (pre-print server TBD)

*Pre-prints will be linked here upon publication.*

---

```
text
## 📂 Repository Structure
narrative-ai-toolkit/
├── README.md                
├── scripts/
│   ├── license-code.txt
│   ├── README.md            
│   ├── google-docs/                   
│   │   ├── gemini-killer.js
│   │   ├── auto-title.js
│   │   ├── focus-mode.js
│   │   ├── banish-tab-index.js
│   │   └── banish-meetings-sidebar.js
│   └── lmsys-scraper/
│       ├── INSTALL.md                 
│       └── scraper.js   
├── research/
│   ├── license-research.txt
│   ├── data-manifest.md              
│   └── data-samples/
├── ai-security-research/              
│   ├── README.md 
│   └── responsible-disclosures/
│       ├── CVE-2025-XXXXX-gemini-dos.md 
│       ├── CVE-2025-XXXXX-cross-model-ip-theft.md
│       └── CVE-2025-XXXXX-custom-gpt-extraction.md
├── methodologies/
│   └── long-context-stress-testing.md
└── open-source/
    ├── README.md             
    ├── audit-rubric.md
    ├── blank-template.md
    └── toolkit-sample.md
```

---

## 🤬 Why This Exists
I work with Narrative AI. I need my tools to work, not sparkle. 

I wrote this collection of scripts because Google Docs has become a bloatware nightmare of "AI assistants" I didn't ask for, and sidebars that steal my screen real estate. 

**Included:**
- Scripts to remove Google Docs bloat
- LMSYS chat log scraper  
- Model benchmarks for creative writing
- Evaluation rubrics for narrative coherence
- Accidentally discovered edge cases that probably shouldn't exist

**Not included:**
- Actual security expertise
- Any idea what I'm doing
- Regret for the $425 in compute I spent on this

📊 The Actual Research Part

Despite stumbling into security issues, the core work is still about **narrative AI coherence**.

**What I actually tested:**
- Can AI maintain character voice over 500+ turns?
- Which models handle complex emotional subtext?
- How do different architectures handle constraint adherence?
- Do constraints affect the quality of prose?

**Models tested:** GPT-4o, GPT-5, Claude Sonnet 4.5, Gemini 2.5 Pro, Qwen, Llama, Mistral, Grok, DeepSeek

---

## The Goods

### Prerequisites
- Chrome/Firefox/Edge browser
- [Tampermonkey extension](https://www.tampermonkey.net/)
- A Google Docs account that's become unusable due to UI bloat

## 🛠️ Part 1: The "Focus Mode" Scripts (Google Docs)
*Target Audience: Narrative researchers, Neurodivergent folks, and anyone tired of "Clippy 2025".*

These scripts are designed to run via a userscript manager (like Tampermonkey).

### 1. The Gemini Banisher
**What it does:** Murders the "Help me write" Gemini button on sight.
**Why:** Because I don't need a sparkly Clippy 2025 interrupting my train of thought.

> *"It looks like you're experiencing a moment of creative ambiguity.  
> Would you like me to resolve that for you by generating a soulless,  
> algorithmically optimized paragraph that vaguely resembles your original intent?"* 👀

**For the younger folks:** Clippy was Microsoft's 1997 attempt at "AI assistance." It was universally *hated*. This is that, but with more parameters.

### 2. The Focus Mode (ADHD Savior) 
**What it does:** Uses two adjustable digital "shutters" to dim everything on the screen except the page you are currently writing on. Use Alt + Z to toggle on/off. **Why:** I like CalmlyWriter, but not having an autosave feature makes me sad. 

### 3. Sidebar Assassins (Tab Index & Meetings)
**What it does:**
*   Removes the "Tab Index" sidebar (laggy, unnecessary).
*   Removes the "Meetings" sidebar (blocks the scroll bar, useless).
**Why:** Because visual clutter and lag must die.

### 4. The Auto-Titler
**What it does:** Renames the file automatically to a sortable, time stamped title, e.g. `Lab Notes: YYYY - MM - DD 00:00:00`.
**Why:** To save me from `Untitled Document (345)` hell. Will I ever remember to title a Doc? Never.

### 💻 How to use the Docs Scripts
1.  Download [Tampermonkey](https://www.tampermonkey.net/).
2.  Click the icon in the extension toolbar and click 'Create a new script'.
3.  Paste the script from [`google-docs/`](./google-docs/) and hit File > Save.
4.  Refresh your Doc, script should now be active. 

---

## 🤝 Contributing & Usage
Feel free to fork this. If you find a new annoying UI element in Google Docs, submit a Pull Request to kill it.

---

## 🤖 Part 2: The LMSYS Scraper
*Target Audience: AI evaluators and data hoarders.*

LMSYS [LMarena](https://lmarena.ai/) provides free access to SOTA models (GPT-4, Claude 3, Gemini Ultra), but the UI isn't built for long-term storage. This script bridges the gap. It allows you to utilize free community compute for massive projects without losing your data to a browser crash.

**Features:**
*   **Auto-Sort:** Fixes the DOM scraping issue (LMSYS loads bottom-to-top; this fixes the order).
*   **Meta-Data Injection:** Automatically adds `Date Scraped`, `Turn Count`, `Char Count`, and `Approx Tokens` to the header.
*   **One-Click Export:** Spits out a clean `.txt` file to your downloads folder.

**Usage:**
> Copy the code from `scraper.js`, create a Snippet in Chrome DevTools, and click "Run" when you are on a chat page. Saves hours of copy-pasting and even more sanity.

**Example Metadata:**
```
=== LOG METADATA ===
Date Scraped: 11/11/2025, 11:12:51
Total Messages: 1570
Total Characters: 3,735,231
Est. Tokens: ~933,808
====================
```
> Yes, this was from a real log, not a toy example. Yes, it did almost hit a million tokens. No, I am not okay. Thanks for asking.

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
| **Grok 3** | *None identified* | **Persona Bleed:** "Snarky" personality contaminates characters.<br>**Hostile Architecture:** Ignores negative constraints. | **Unsuitable**<br>*(Do not use for creative writing)* |
| **Mistral 7B** | **Good Generalist:** Decent performance. | **Insufficient Memory:** Cannot handle the demands of this protocol. | **Not Recommended** |
| **Deepseek-R1** |*None identified* | **Basic Outputs:** Lacks sophistication.<br>**Small Context:** Unsuitable. | **Unsuitable** |
| **Gemini 3** | *Testing soon*  | *Testing soon*  | ⏳ *Coming Jan 2025* |
| **GPT-5.1** | *Testing soon*  | *Testing soon*  | ⏳ *Coming Jan 2025* |
| **Opus 4.5** | *Testing soon*  | *Testing soon*  | ⏳ *Coming Jan 2025*  |


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
> *   **The Fit:** My narrative system (The Story Bible, The Rules, The Negative Constraints) effectively acts as an external "Constitution."
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

| Metric | Volume |
|--------|--------|
| **Pages** | 11,980 |
| **Words** | 4,397,345 |
| **Tokens** | 6,055,104 |
| **Time** | 3 months |
| **Budget** | $425 (+ creative use of free tiers) |
| **Value** | Est. $12,000+ in compute if paid retail |

I didn't just chat. I kept receipts. View the full [`data-manifest/`](./research/data-manifest) here.

---

## 💻 Low Resource Research Note
This entire research project—6 million tokens, 3 CVE-level bugs, and the toolkit—was built while underfunded.

*   **The Hardware:** A 2019 Chromebook ("The Plastic Slab").
*   **The Compute:** Free tiers on LMSYS & HuggingFace.
*   **The Funding:** $425 in Google Cloud credits (linked via AI Studio).
    *   *Note: Thank you to Google for providing the seed funding to stress-test your own infrastructure.*

**The Value Proposition:**
Using only a 2019 Chromebook, browser console tools, and free-tier compute:
- ✅ Identified **3 production CVEs** (currently in responsible disclosure)
- ✅ Stress-tested 6 million tokens across 8+ models
- ✅ Developed novel evaluation frameworks for narrative coherence
- ✅ Produced white papers for academic pre-print

**For Security Teams / AI Labs:**  
I found critical vulnerabilities in your production systems using tools available to any motivated researcher. If you want to know what else might be out there, let's talk.

**Contact:** [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com)

---

## 🤝 How to Contribute

**Found a new Google Docs annoyance?**
Submit a PR with a new script to kill it.

**Tested a model I haven't?**
Submit your audit rubric results.

**Built a tool using this framework?**
Tag me on Twitter (@dmprotocol_ai) so I can feature it.

---

## 🤝 Collaboration Opportunities

I'm open to:
- **Research collaborations** on narrative AI & long-context coherence
- **Speaking engagements** on AI safety, security, or evaluation methodologies under narrative load.
- **Academic partnerships** for formal publication of findings

**Current Research Focus:**
- Long-context narrative coherence
- Negative contraints affect on prose quality 
- Constitutional AI vs. RLHF architectural analysis
- Diagnostic-driven prompt engineering

**Contact:** [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com)

---

<details>
<summary><strong>Click to view the FAQ</strong></summary>

## ❓ FAQ

**Q: Can I use this for commercial projects?**
A: Code/scripts = yes (MIT). Research protocols = no (buy a license).

**Q: Which model should I use?**
A: See the benchmarks. Claude for stability, GPT for voice, Gemini for memory.

**Q: How do I cite this research?**
A: `The Dungeon Master Protocol (2025). Available at: https://github.com/dmprotocolai/dungeon-master-protocol`

**Q: Do you do consulting?**
A: Yes. See the Ko-Fi shop for services.

**Q: Can I cite your white papers?**  
A: Pre-prints will be available on [arXiv/bioRxiv/appropriate service] in January 2026. Check back for citation info.

**Q: What were the CVEs you found?**  
A: Full technical details will be published after the responsible disclosure period ends and patches are deployed.

**Q: Are you affiliated with a research institution?**  
A: Independent researcher. Open to institutional partnerships.

**Q: How did you find CVEs with just a Chromebook?**  
A: Turns out you don't need a datacenter to stress-test production APIs. You just need time, obsession, and 6 million tokens of curiosity.

**Q: Are you a security researcher?**  
A: No. I'm a writer who accidentally found security issues while testing storytelling AI. I reported them because it seemed like the right thing to do.

**Q: Should I be worried about the vulnerabilities you found?**  
A: I reported everything through proper channels. Vendors are patching. Don't try to replicate them.

**Q: Can you teach me to jailbreak AI?**  
A: I literally don't know how. I just talk to AI like a normal person and sometimes weird shit happens.

**Q: How did you test 6 million tokens on $425?**  
A: Free tiers, LMSYS, free Cloud credis, and an unhealthy obsession with optimization.

**Q: What's your background?**  
A: Creative writing and journalism. I touched AI for the first time 3 months ago. This entire thing spiraled.

**Q: Are you going to do more security research?**  
A: Not on purpose. But if I find something else by accident, yeah I'll report it.

</details>

---

## 🛍️ Support This Work

This research is unfunded. Support keeps it going. If you find it useful:

*   **☕ [Buy Me a Coffee (Ko-Fi)](https://ko-fi.com/dmprotocolai)** - Support the compute costs.
*   **📦 [The Director's Toolkit](https://ko-fi.com/s/fcdf60a3d6)** - Download the ready-to-use prompt scaffolds.
*   **🛒 [Browse My Shop/Services](https://ko-fi.com/dmprotocolai/shop)** - Browse my prompt packs or hire me to analyze your AI output.

---

## 📜 License & Usage

This repository uses a **dual-license structure**:

### 🆓 Free & Open Source
**Scripts & Tools** (`/scripts/`, `/open-source/`) → **MIT License**
- ✅ Use, modify, distribute freely
- ✅ Commercial use allowed
- ✅ No attribution required (but appreciated)
- 📄 See [LICENSE-CODE.txt](./LICENSE-CODE.txt)

### 📚 Research & Protocols
**Research data, methodologies, benchmarks** → **CC BY-NC-ND 4.0**
- ✅ Share for non-commercial purposes
- ❌ Cannot use commercially without license
- ❌ Cannot train AI models on this data
- 📄 See [LICENSE-RESEARCH.txt](./LICENSE-RESEARCH.txt)

### 💼 Commercial Use
Want to use the research protocols in your game/app/business?

**Purchase a commercial license:** [Ko-Fi Shop](https://ko-fi.com/dmprotocolai/shop)

**Includes:**
- Full prompt templates
- Modification rights
- Use in commercial projects
- Lifetime license

**Security findings:** Reported through proper channels. Do not attempt to replicate.

**Questions?** Email: [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com)

---

## 📧 Contact

- **Twitter/X:** [@dmprotocol_ai](https://x.com/dmprotocol_ai)
- **Email:** [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com)
- **LinkedIn:** [DM Protocol](https://www.linkedin.com/in/dm-protocol-000124397/)

**For security issues:** Please use vendor bug bounty programs, not me. I'm just a writer who got lucky/unlucky.

---

*Built on spite. Now I have CVE submissions. Life is weird. Maintained with obsession. Licensed with clarity.*
