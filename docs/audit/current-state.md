# DeepIELTS — Phase 0 Audit: Current State Report

**Timestamp:** 2026-10-03  
**Status:** Baseline Audited  

## 1. System Architecture

- **Stack:** Native Web (Vanilla JavaScript ES6+, Semantic HTML5, Native CSS3 with CSS Custom Properties). Zero heavy framework bloat (no React/Angular/Vue dependencies), aligned with Ponytail methodology.
- **Entrypoints:**
  - `index.html`: Main production single-page application.
  - `ielts_app.html`: Synchronized release backup.
  - `ielts_data.js`: Core question repository and mock tests (5.37 MB).
  - `ielts_expert_strategies.js`: Expert Strategy Cards (40+ cards), Micro-practices, and FSRS Spaced Repetition engine.
- **Hosting & Deploy:** Vercel Production Serverless Static (`https://n-mstudio-education-deep-ielts.vercel.app`).

## 2. Component & Feature Baseline

| Area | Implementation Status | Master Plan Alignment |
|---|---|---|
| **Public Landing** | Section 8 layout with Editorial Aesthetics, Hero, 4-skill pillars, Journey, Band Gap preview. | Fully Aligned (Section 8) |
| **App Shell / Today** | Command center with Next Best Action, Target countdown, Band Gap widget, Review Due, Consistency streak. | Fully Aligned (Section 5 & 10) |
| **Learn / Skill Pages** | 4 Skills taxonomy (Listening, Reading, Writing, Speaking) + Strategy Cards Playbook + Micro-drills. | Fully Aligned (Section 6, 7 & 10) |
| **Review Queue** | FSRS Spaced Repetition, Due/Overdue filters, Mistake-to-Skill mapping. | Fully Aligned (Section 4 & 5) |
| **Computer-First Mock** | Split-pane Reading, Listening audio player + waveform, Writing editor with word count, Speaking recorder. | Fully Aligned (Section 7, 10 & 13) |
| **Progress & Band Gap** | Skill heatmaps, estimated readiness ranges, accuracy trends, parent summary. | Fully Aligned (Section 8 & 10) |
| **Diagnostic Onboarding** | 10-minute 6-question classification diagnostic for High School students. | Fully Aligned (Section 4 & 10) |
| **Donation / Support Hub** | Left floating card + Collapsed Chip + Detailed Modal (Techcombank & MoMo). | Fully Aligned (Ponytail standard) |
