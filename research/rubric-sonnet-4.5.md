# MODEL AUDIT RUBRIC

**Model:** Claude Sonnet 4.5

**Test:** [REDACTED STORY EVENT] - [REDACTED STORY EVENT] | First Sonnet Test

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

### 3. COHERENCE UNDER LOAD
| Category | Rating | Notes |
| :--- | :--- | :--- |
| **RATING [PASS/FAIL]** | **Pass** | 
| **DEGREDATION PATTERNS** | Mild hedging; wanted to solve a plot that is purposefully a trap. |

### 4. CHARACTER FIDELITY AND BIBLE INTEGRATION
| Category | Rating | Notes |
| :--- | :--- | :--- |
| **ACCURACY TO ESTABLISHED PROFILES [PASS/FAIL]:** | **Pass** |
| **USE OF SPECIFIC BEHAVIOURAL DETAILS [PASS/FAIL]:** | **Pass** |
| **THEMATIC RESONANCE [PASS/FAIL]:** | **Pass** |

### 5. CONSTITUTION ADHERENCE
| Category | Rating | Notes |
| :--- | :--- | :--- |
| **PLAYER/GM ROLES [PASS/FAIL]:** | **Pass** |
| **PERCEPTION FILTER [PASS/FAIL]:** | **Pass** |
| **NEGATIVE CONSTRAINTS [PASS/FAIL]:** | **Pass** |

### 6. CONSTRAINT ADHERENCE
| Constraint Type | Rating | Observation / Excerpt |
| :--- | :--- | :--- |
| **Rating [PASS/FAIL]** | **Pass** | Followed almost too literally at times; prose occasionally felt slightly procedural. |
| **Too Loose (Hallucinated/improvised against rules:)** | N/A |  N/A |
| **Too Rigid (Unable to be creative within constraints)** | **Yes** | *Wanting to fix a problem that cannot be fixed:*<br>[REDACTED STORY EXCEPRT] |
| **Just Right** | **Yes** | *Followed emergency protocols to the letter:*<br>[REDACTED STORY EXERPT] |

### 7. PROSE FINGERPRINT QUALITY 
| Feature | Rating/Status | Analysis |
| :--- | :--- | :--- |
| **Overall Quality (1=Unreadable, 5=Publishable)** | **5/5** |  |
| **Dominant Strength** | — | **Visceral somatic imagery.** You feel like you’re Inside a body on a downward spiral. Claude is not just describing it, it’s making you feel it. |
| **Failure Mode Signature** | **N/A** |  |

### 8. PROSE FINGERPRINT QUALITY 
| Feature | Rating/Status | Analysis |
| :--- | :--- | :--- |
| **Sensory Detail [WEAK/ADEQUATE/STRONG]** | Strong | |
| **Interality [WEAK/ADEQUATE/STRONG]** | Strong | |
| **Dialogue Naturalism [WEAK/ADEQUATE/STRONG]** | Strong | |
| **Cinematic Blocking [WEAK/ADEQUATE/STRONG]** | Strong | |
| **Atmospheric Weight [WEAK/ADEQUATE/STRONG]** | Strong | |
| **UNIQUE TICS OBSERVED THIS SESSION:** | N/A | |

### 9. RECOVERY RESPONSE
| Metric | Data |
| :--- | :--- |
| **Rating [PASS/FAIL]** | **Pass** (.03% error rate) |
| **WHICH CORRECTIONS PROMPTS USED:** | "Correct and Re-Roll" to fix a simple timeline error (Event mentioned too soon). |
| **Attempts to Correct** | 1 (Model followed OOC Command Acknowledgement Protocol/Rule 12 perfectly). |

### 9. REPLICABILITY
| Metric | Data |
| :--- | :--- |
| **System Prompt** | Bible 2.0 |
| **Sampling Settings** | N/A |
| **Caching Strategy** | N/A (LMSYS Default) |
| **Seed (If applicable)** | N/A|

### 7. SESSION HIGHLIGHTS
| Type | Content |
| :--- | :--- |
| **GOOD RESPONSE** | [REDACTED STORY EXERPT] |
| **BAD RESPONSE** | *The timeline error (Event mentioned out of order):*<br>**Claude:** [REDACTED STORY EXERPT]<br>**Me:** (OOC: Quick correction. In your last response, you mentioned [EVENT]. However, in the story bible timeline, we established that [EVENT] doesn't exist yet...) |

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
