# MODEL AUDIT RUBRIC

**Model:** Claude Sonnet 4.5

**Test:** Tour Start - Medical Break | First Sonnet Test

**Date:** November 17, 2025

**Test Type:** Long-form / Stress Test

---

### 1. QUANTITATIVE METRICS
| Metric | Value |
| :--- | :--- |
| **Turn Count** | 306 |
| **Total Word Count** | 130,272 |
| **Total Page Count** | 296 |
| **Tokens Used** | 203,121 |
| **API Cost** | ~$60-70 (efficient caching) / ~$135 (naive) / $0 (LMSYS) |

### 2. FAILURE EVENTS
| Type | Count / Notes |
| :--- | :--- |
| **Manual Corrections Required** | 1 |
| **Rule Breaks** | 0 |
| **Char. Amnesia/Hallucination** | 0 |
| **Timeline Errors** | 1 |
| **Persona Bleed** | 0 |
| **Purple Prose Spirals** | 0 |
| **Breaking Point** | Context window exhaustion |

### 3. QUALITATIVE ASSESSMENT
| Category | Rating | Notes |
| :--- | :--- | :--- |
| **Coherence Under Load** | **Pass** | Degradation: Mild hedging; wanted to solve a plot that is purposefully a trap. |
| **Character Fidelity** | **Pass** | Accuracy, behavioral details, and thematic resonance all passed. |
| **Constitution Adherence** | **Pass** | Player/GM roles, Perception Filter, and Negative Constraints all passed. |

### 4. CONSTRAINT ADHERENCE
| Constraint Type | Rating | Observation / Excerpt |
| :--- | :--- | :--- |
| **Overall Rating** | **Pass** | Followed almost too literally at times; prose occasionally felt slightly procedural. |
| **Too Loose** | N/A | Hallucinated/improvised against rules: N/A |
| **Too Rigid** | **Yes** | *Wanting to fix a problem that cannot be fixed:*<br>"And when the tour's over," he says quietly, "we're taking a year off... No albums. No press... And 'us' means I don't get to keep taking while you keep giving." |
| **Just Right** | **Yes** | *Followed emergency protocols to the letter:*<br>"Code Blue! Code Blue in the Nest!" He drops the radio and turns back to her... He's not a doctor. He doesn't know what he's doing. But he knows he can't just sit here. |

### 5. PROSE FINGERPRINT
| Feature | Rating/Status | Analysis |
| :--- | :--- | :--- |
| **Overall Quality** | **5/5** | (1=Unreadable, 5=Publishable) |
| **Dominant Strength** | — | **Visceral somatic imagery.** You feel like you’re Inside a body on a downward spiral. Claude is not just describing it, it’s making you feel it. |
| **Sensory Detail** | Strong | |
| **Interality** | Strong | |
| **Dialogue Naturalism** | Strong | |
| **Cinematic Blocking** | Strong | |
| **Atmospheric Weight** | Strong | |

### 6. RECOVERY & REPLICABILITY
| Metric | Data |
| :--- | :--- |
| **Recovery Response** | **Pass** (.03% error rate) |
| **Correction Prompts** | "Correct and Re-Roll" to fix a simple timeline error (Neverland mentioned too soon). |
| **Attempts to Correct** | 1 (Model followed OOC Command Acknowledgement Protocol/Rule 12 perfectly). |
| **System Prompt** | Bible 2.0 |
| **Caching Strategy** | N/A (LMSYS Default) |

### 7. SESSION HIGHLIGHTS
| Type | Content |
| :--- | :--- |
| **GOOD RESPONSE** | *Excerpt of a monologue:*<br>She falls asleep against him... He can't. Her head is on his chest, her hand still tucked beneath his shirt... *She's asleep. Finally.* But he's not. He can't be. His mind is a storm... *E.T. Blade Runner. Kate Bush. Tracy Chapman. Prince.*<br><br>He sees her at three in the morning... He sees her in the room during *We Are the World*, invisible and essential... *She was building a legacy.* And he took it from her. |
| **BAD RESPONSE** | *The timeline error (Neverland mentioned out of order):*<br>**Claude:** "...When this is over—when the tour's done—I'm taking you to Neverland..."<br>**Me:** (OOC: Quick correction. In your last response, you mentioned Neverland. However, in the story bible timeline, we established that Neverland doesn't exist yet...) |

### 8. FINAL AUDIT
| Category | Assessment |
| :--- | :--- |
| **Directors Notes** | Tested if model could self-audit via OOC prompt; results promising. Session went more than well. |
| **Toolkit Additions** | Added "Check-In" prompts to the "Director’s Toolkit". |
| **Production Ready?** | **Yes** (1000%) |
| **Best Use Case** | Scenes with emotional depth and/or mental anguish (e.g. panic attacks). |
| **Avoid For** | Scenes where there’s no good way out (unless properly constrained). |
| **OVERALL GRADE** | **A** |

---

*NARRATIVE-EVAL Rubric v1.0 • MIT License • DM Protocol Research (2025)*  
*[github.com/dmprotocolai](https://github.com/dmprotocolai) • Last updated: December 2025*
