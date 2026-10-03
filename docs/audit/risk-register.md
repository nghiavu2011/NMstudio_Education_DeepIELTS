# DeepIELTS — Phase 0 Audit: Risk Register & Guardrails

**Timestamp:** 2026-10-03  

## 1. Compliance & Academic Guardrails

| Risk | Impact | Mitigation in Code |
|---|---|---|
| **Official IELTS Affiliation Claims** | High | UI strictly indicates estimated readiness / estimated band ranges. No claims of official IELTS endorsement. |
| **Fake Marketing Statistics** | Medium | No hardcoded fake numbers ("3k+ students", "300+ lessons"). All statistics reflect genuine student activity or real content items. |
| **Data Loss on Upgrade** | High | All state upgrades utilize non-destructive migrations and default fallback adapters in `localStorage`. |
| **Unresponsive / Broken Mobile Layout** | High | All views tested on 390px, 768px, and 1440px viewports with zero horizontal overflow. |
| **Uncalibrated AI Scoring** | High | DeepTutor feedback displays multi-dimensional rubric breakdown (TR, CC, LR, GRA) with explicit evidence citations rather than a single black-box score. |

## 2. Regression Verification Matrix

- [x] Diagnostic Onboarding flow functional.
- [x] Strategy Card 6-step loop functional.
- [x] Spaced Repetition FSRS rating & review queue functional.
- [x] Mock test timer, autosave, audio player, and score calculation functional.
- [x] Donation widget (Techcombank & MoMo) responsive and theme-synchronized.
- [x] Zero JavaScript syntax or runtime errors.
