# DeepIELTS — Phase 0 Audit: Data & State Map

**Timestamp:** 2026-10-03  

## 1. Storage Keys & Persistence Schema

All user state is stored securely in browser `localStorage` using Ponytail zero-dependency native Web APIs:

| Key | Schema Shape | Role / Description |
|---|---|---|
| `targetBand` | `number` (e.g. `7.0`) | User's target band score (5.0 to 8.5) |
| `darkMode` | `boolean` (`true`/`false`) | UI theme preference (Dark/Light) |
| `donationWidgetCollapsed` | `boolean` (`true`/`false`) | Support widget display state |
| `progress` | `{ completedLessons: string[], timeSpentMinutes: number, streakDays: number }` | General study progress tracking |
| `followedSkills` | `string[]` (e.g. `["W1-OV-001", "R-TF-002"]`) | Bookmarked Strategy Card IDs |
| `skillProgress` | `{ [skillId: string]: { repetitions: number, intervalDays: number, easeFactor: number, lastReviewed: string, nextReviewDue: string, state: string } }` | FSRS Spaced Repetition engine state |
| `examHistory` | `Array<{ id: string, type: string, date: string, rawScore: number, maxScore: number, estimatedBand: number, sectionDetails: object }>` | Mock test completion log |
| `diagnosticResult` | `{ completedAt: string, currentBandEstimate: number, answers: object, weakSkills: string[], recommendedTrack: string }` | Onboarding diagnostic assessment result |

## 2. Global Data Structures

- `IELTS_EXPERT_STRATEGIES`: Comprehensive array of academic strategy cards (Writing, Reading, Listening, Speaking).
- `IELTS_ERROR_TAXONOMY`: Structured taxonomy of error codes (e.g., `ERR-W1-DATAPICK`, `ERR-R-KEYWORDTRAP`, `ERR-L-NUMSPELL`).
- `IELTS_DATA`: Raw tests, passages, audio transcripts, and official-style question blocks.
