# 🔬 Research Artifacts & Methodologies

![Status](https://img.shields.io/badge/Status-Active_Research-brightgreen)
![Tokens](https://img.shields.io/badge/Dataset-6_Million_Tokens-blue)
![License](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey)
![Spite](https://img.shields.io/badge/Spite_Level-Measurable-red)

> **Research Focus:** LLM performance under "Narrative Load"—specifically coherence retention, alignment drifting, and failure modes in high-context (500+ turn) constraints.

---

## 🧐 The "Why"
Most benchmarks test models on short-burst logic puzzles or code snippets. They don't test what happens when a model has to remember a subtle emotional slight from 400 messages ago while maintaining a strict formatting protocol.

**I do.**

This directory contains the raw data, systematic rubrics, and pre-print drafts associated with the **"Dungeon Master" Protocol**—a framework for evaluating how Large Language Models handle complex, procedural narrative constraints.

---

## 📑 White Papers & Manuscripts

I am currently preparing the following manuscripts regarding the application of procedural constraint design in AI storytelling.

| Status | Paper Title | Target Date |
| :--- | :--- | :--- |
| `SUBMITTING` | **The "Dungeon Master" Protocol:** A User-Developed Framework for High-Fidelity AI Storytelling | *Jan 2026* |
| `DRAFTING` | **Beyond Helpfulness:** Constraint-Based Literary Voice in Large Language Models | *In Prep* |
| `DRAFTING` | **Building the Bars In Bureaucracy:** Procedural Constraint Design for Long-Context Narratives | *In Prep* |
| `DRAFTING` | **Systematic Evaluation:** A Rubric for Evaluating Long-Form Narrative AI | *In Prep* |

> *Note: Pre-prints will be linked here immediately upon submission to the archive server.*

---

## 📂 Evidence Locker (Directory Contents)

The artifacts included here support the research methodology and data provenance.

### 📝 1. The Grading Scale
*   **[`rubric-sonnet-4.5.md`](./rubric-sonnet-4.5.md)**
    *   **What is it?** A *redacted sample* of the systematic rubric used to grade model performance.
    *   **Why it matters:** We don't grade on "vibes." We grade on coherence, instruction adherence, and "literary texture" against the "Dungeon Master" Protocol.

### 📊 2. The Data
*   **[`data-manifest.md`](./data-manifest.md)**
    *   **What is it?** Documentation of my kill-count. 
    *   **Stats:** Includes token counts per chat, and a running total of `Words`, `Pages`, and `Tokens`.
*   **[`data-samples.md`](./data-samples.md)**
    *   **What is it?** Excerpts of model outputs demonstrating specific failure modes.
    *   **The Horror Show:** Examples of looping, sycophancy, the worst prose you've ever seen, and logic breakdowns under heavy narrative load.

### 📜 3. Licensing
*   **[`license-research.txt`](./license-research.txt)**
    *   **What is it?** The specific legal terms for using this data. Spoiler: You can't sell it.

---

## 🛠️ Tools & Stack

This research was conducted using a "Low Resource / High Obsession" methodology.

*   **Hardware:** 2019 Chromebook (The "Plastic Slab").
*   **Browsers:** Chrome with [Tampermonkey Scripts](../scripts/).
*   **Data Collection:** Custom LMSYS Scraper (JavaScript).
*   **Analysis:** Manual semantic review & Comparative Rubric Scoring.
*   **Models Tested:**
    *   Claude Sonnet 4.5 (Anthropic)
    *   Claude Opus 4.1 / 4.5 (Anthropic)
    *   GPT-4o / GPT-5 / GPT-5.1 (OpenAI)
    *   Gemini 2.5 Pro / 3 Pro Preview (Google)
    *   Llama 3 (Meta)
    *   Qwen 3 (Alibaba)
    *   Mistral 7B (Mistral AI)
    *   DeepSeek-R1 (High-Flyer)
    *   Grok 3 (xAI)

---

## ⚠️ Strict Licensing & Usage

**Research License:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

The contents of the `research/` directory are **NOT** MIT Licensed (unlike the code in this repo). They are licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**.

### ✅ You MAY:
*   **Share:** Copy and redistribute the material in any medium or format.
*   **Cite:** Reference this data in your own non-commercial research (with attribution).

### ❌ You may NOT:
*   **Commercial Use:** You cannot use this data for commercial purposes.
*   **Train Models:** **Explicitly forbidden.** You may not use this dataset to train, fine-tune, or align proprietary AI models.
*   **Derivatives:** If you remix, transform, or build upon the material, you may not distribute the modified material.

*For commercial licensing or training permissions, please contact [dmprotocol.ai@gmail.com](mailto:dmprotocol.ai@gmail.com).*
