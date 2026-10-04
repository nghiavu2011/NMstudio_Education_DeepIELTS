# DeepIELTS — Antigravity Correction Spec V3

**Purpose:** targeted implementation pass for the existing DeepIELTS product after visual/UX review.

**Implementation mode:** preserve working product logic; correct hierarchy, brand expression, learning UX, and introduce Cyber Focus Mode only where it helps concentration.

**Primary direction:**

> **Academic Editorial Brand + Adaptive Learning Command Center + Cyber Focus Mode**

---

# 0. EXECUTION CONTRACT FOR ANTIGRAVITY

## Do not rebuild the app

Work on the current codebase.

Preserve unless technically necessary to change:

- routes
- authentication
- persistence
- user progress
- learning content
- error taxonomy
- FSRS / spaced repetition logic
- scoring logic
- existing APIs
- mock-test logic
- working data models
- local/session storage contracts

Before modifying code, inspect the repository and identify:

1. app shell and route rendering
2. current design tokens / CSS variables
3. navigation component
4. Today screen
5. Learn screen
6. Review screen
7. Mock screen
8. Progress screen
9. Parent area
10. donation component
11. Zalo/support component
12. image asset resolution logic
13. icon system
14. dark-mode logic if already present

If a requested visual change conflicts with existing business logic, preserve business logic and adapt presentation around it.

Do not silently delete features.

---

# 1. APPROVED PRODUCT DIRECTION

DeepIELTS must not become a generic SaaS dashboard and must not become a full neon gaming interface.

Use three distinct experience layers.

## 1.1 Brand Layer — Academic Editorial

Use for:

- public landing page
- Today
- Learn
- Review
- Progress
- Parent
- lesson selection
- learning reports

Visual qualities:

- warm
- academic
- editorial
- human
- intelligent
- calm
- contemporary
- trustworthy

Core visual language:

- warm off-white canvas
- charcoal typography
- deep teal brand color
- mustard accent
- large editorial headings
- restrained borders
- minimal shadows
- transparent-background student photography
- small hand-drawn arrows / underline / doodle accents
- asymmetrical composition where appropriate

## 1.2 Learning Layer — Adaptive Learning Command Center

Use for Today and all learning decision points.

The product must continuously answer:

1. Where am I now?
2. What is my target?
3. What is blocking me?
4. What should I do next?
5. How long will it take?

Every important screen should expose one primary next action.

## 1.3 Focus Layer — Cyber Focus Mode

Use only for:

- Timed Practice
- Mock Test
- Listening test
- full-screen Writing practice
- Speaking AI room
- high-focus timed sessions

This layer may use dark surfaces, subtle glass, cyan timing accents and low-level ambient glow.

It must NOT be applied to the entire product.

---

# 2. WHAT NOT TO DO

Do NOT:

- rebuild the app from scratch
- convert the full app to dark mode by default
- apply glassmorphism to every card
- use neon glow across normal learning pages
- add gaming XP / coins / loot systems
- add fake student counts or fake success metrics
- hard-code university conversion claims
- show “FTU = 10” or similar static claims without verified year-specific data
- expose internal technical terms such as FSRS, Skill ID, ontology labels in normal learner UI
- use emoji as functional interface icons
- auto-open the donation panel
- permanently display QR payment content over learning screens
- let floating support controls cover content
- replace existing working image slots with generic AI placeholders

---

# 3. DESIGN TOKENS — LIGHT BRAND MODE

Use semantic variables rather than one-off colors.

```css
:root {
  --bg-canvas: #F7F5EE;
  --bg-surface: #FFFFFF;
  --bg-soft: #F1F4F1;

  --ink-primary: #20221F;
  --ink-secondary: #5F655F;
  --ink-muted: #7A807A;

  --brand-teal: #2C776D;
  --brand-teal-dark: #225F58;
  --brand-teal-soft: #DCEBE6;

  --accent-amber: #F4AA13;
  --accent-amber-soft: #FFF0C7;

  --semantic-success: #218C74;
  --semantic-info: #356AE6;
  --semantic-warning: #D98B00;
  --semantic-danger: #D94A47;

  --border-default: #DCDED7;
  --border-strong: #C8CCC4;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 20px;

  --shadow-soft: 0 8px 24px rgba(31, 40, 34, 0.06);
  --shadow-elevated: 0 14px 36px rgba(31, 40, 34, 0.10);
}
```

Rules:

- teal is the primary brand and CTA color
- mustard is accent, emphasis, streak and warm highlight
- blue is informational only, not the dominant brand color
- avoid large saturated blue CTA fields on normal pages

---

# 4. TYPOGRAPHY

Keep the current brand font system unless implementation constraints require otherwise.

## UI / Brand

**Be Vietnam Pro**

Recommended weights:

- H1: 750–800
- H2: 700–750
- H3: 650–700
- body: 400–500
- UI labels: 550–650

Recommended desktop scale:

- Hero H1: 58–68px
- Page H1: 36–44px
- Section H2: 30–38px
- H3: 20–26px
- Body large: 18px
- Body: 15–16px
- Caption: 12–13px

Heading tracking:

```css
letter-spacing: -0.02em;
```

to

```css
letter-spacing: -0.04em;
```

where appropriate.

## Reading passages

Use **Source Serif 4** for long IELTS Reading passages if already available or easy to load.

## Timers / scores

Use **IBM Plex Mono** or another already-installed mono font with:

```css
font-variant-numeric: tabular-nums;
```

---

# 5. GLOBAL NAVIGATION

Current header density is too high.

## Primary navigation

Desktop:

- Hôm nay
- Học
- Ôn tập
- Thi thử
- Tiến bộ

Right-side utilities:

- streak compact chip
- avatar / account menu
- theme switch if retained

Move secondary items out of the primary nav where possible.

## Remove from primary competition

- “1 Phút Tĩnh Tâm” → move into Today
- Parent area → account/avatar menu OR dedicated switch only when user role requires it
- donation → footer / secondary menu
- support → compact floating button

## Mobile

Prefer bottom navigation with maximum 5 core destinations:

- Hôm nay
- Học
- Ôn tập
- Thi thử
- Tiến bộ

Parent/support/settings live in account/menu.

---

# 6. TODAY — ADAPTIVE LEARNING COMMAND CENTER

This is the highest-priority app screen.

The screen must not be a general dashboard.

It is a command center that tells the learner what to do next.

## 6.1 Above-the-fold structure

```text
Chào [Name].

Mục tiêu IELTS
7.0

NEXT BEST ACTION                               ~12 phút

READING
Matching Headings

Bạn mất nhiều thời gian ở các câu có paraphrase mạnh
trong 3 bài gần nhất.

Điểm cần cải thiện
Recognising paragraph purpose

[ BẮT ĐẦU LUYỆN ]
```

The primary CTA must be visually dominant.

Do not place multiple same-weight actions next to it.

## 6.2 Secondary row

Three concise modules:

1. **Band Gap**
   - show the biggest current gap
   - example: Writing 5.5 → 7.0

2. **Review Due**
   - count due items
   - example: 4 mục cần ôn

3. **Mock / Exam Readiness**
   - example: mock last taken / next recommended mock

## 6.3 Today plan

Below the main action:

```text
Hôm nay
✓ Reading 12 phút
○ Review 6 phút
○ Vocabulary 5 phút
```

The total daily plan should feel achievable.

Preferred learning session length:

- 10–15 minutes per focused activity
- avoid presenting a long intimidating task list on entry

## 6.4 Optional motivation

Retain streak as a small supporting metric.

Do not make streak more important than learning progress.

---

# 7. PROGRESS PAGE — COMPLETE RESTRUCTURE

The current Progress page should be reordered.

Progress must answer immediately:

1. Current readiness
2. Target
3. Biggest gap
4. Next best learning action

## 7.1 Header

Title:

**Tiến Độ Học Tập**

Subtitle:

**Xem bạn đang ở đâu và nên tập trung vào điều gì tiếp theo.**

## 7.2 First content block

Desktop two-column layout.

### Left — Band Gap

Example:

```text
BAND GAP

Listening   7.0      ✓ Đạt mục tiêu
Reading     6.5 → 7.0
Speaking    6.0 → 7.0
Writing     5.5 → 7.0   ← Khoảng cách lớn nhất
```

Do not encode status using color alone.

Include text labels or icons.

### Right — Next Best Action

Example:

```text
NEXT BEST ACTION

WRITING

Khoảng cách lớn nhất
5.5 → 7.0

Điểm nghẽn chính
Idea Development

Bài học đề xuất
Developing Main Ideas in Task 2

Khoảng 15 phút

[ HỌC NGAY ]
```

This component is P0.

## 7.3 Estimated readiness language

Where internal estimates are shown, use:

- “Mức sẵn sàng ước tính”
- “Estimated readiness”

When useful, also show:

- confidence: Low / Medium / High
- last assessed date

Do not imply internal estimates are official IELTS scores.

## 7.4 Progress over time

Add a simple trend visualization only if valid historical data exists.

Recommended:

- 8-week band-readiness trend
- one primary line at a time
- skill filter

Do not add decorative charts without actionable value.

## 7.5 Current bottlenecks

Example:

```text
ĐIỂM NGHẼN HIỆN TẠI

1. Idea Development       Cao
2. Paraphrase             Trung bình
3. Critical Inference     Trung bình
```

Each item should link to a relevant learning action when possible.

## 7.6 Rename learner-facing cognitive matrix

Replace:

**Ma Trận 4 Trụ Cột Nhận Thức**

with:

**Năng Lực Nền Tảng**

Subtitle:

**Những kỹ năng đang ảnh hưởng trực tiếp đến kết quả của bạn.**

Learner-facing names:

- Perceptual & Scanning → **Nhận diện & tìm thông tin**
- Lexical & Paraphrase → **Từ vựng & paraphrase**
- Structural & Grammar → **Ngữ pháp & cấu trúc câu**
- Critical Inference → **Suy luận & xử lý bẫy**

Keep original internal taxonomy names in data if required.

## 7.7 Band ladder states

Current band cards must no longer appear equally weighted.

Implement visible states:

- COMPLETED
- CURRENT
- NEXT
- FUTURE / LOCKED if appropriate

Example:

```text
4.0 ✓ → 5.0 ✓ → [5.5 CURRENT] → 6.0 NEXT → 6.5 → 7.0
```

CURRENT should be visually dominant but not gamified.

---

# 8. LEARN / FOUR SKILLS

Do not present the four skills as four identical SaaS cards only.

Create an editorial rhythm.

## Suggested structure

### Listening

Use:

- listening-student.png
- headphones-notebook.png
- short problem-oriented copy

### Reading

Use:

- reading-student.png or books-globe.png
- current weakest reading subskill

### Writing

Use:

- writing-student.png
- rubric-aligned readiness summary

### Speaking

Use:

- speaking-student.png
- AI practice / fluency readiness summary

Each skill section must still remain functionally consistent:

- current readiness
- weakest area
- recommended action
- browse all lessons secondary action

Do not lead with a huge grid of exercise types.

---

# 9. ERROR → SKILL EXPERIENCE

Preserve the learning logic.

Current logical sequence:

```text
Câu sai
→ Vì sao sai
→ Kỹ năng
→ Chiến thuật
→ Làm lại
→ Lịch ôn
```

Keep this logic.

Change only learner-facing presentation.

## Display language

```text
Bạn chọn sai
↓
DeepIELTS tìm lý do
↓
Xác định kỹ năng cần củng cố
↓
Đưa ra chiến thuật
↓
Thử câu tương tự
↓
Nhắc lại đúng thời điểm
```

Use a subtle hand-drawn connecting line / arrow.

Do not show technical labels like:

- Skill ID
- FSRS ID
- taxonomy node

unless in developer/admin mode.

---

# 10. DEEP PRACTICE

Keep the four-stage learning model:

1. Worked Example
2. Guided Practice
3. Independent Practice
4. Timed Practice

Redesign it as a progression of decreasing support.

```text
MORE SUPPORT                                      LESS SUPPORT

01 ---------------- 02 ---------------- 03 ---------------- 04
Worked Example      Guided Practice      Independent          Timed
                                         Practice              Practice
```

The learner should understand the pedagogy at a glance.

Do not simply render four equal generic cards.

---

# 11. REVIEW / SPACED REPETITION

Keep the existing spaced-repetition logic.

Do not expose “FSRS” as the main learner-facing label.

Use:

- Ôn đúng lúc
- Cần ôn hôm nay
- Lặp lại sau X ngày
- Mức ghi nhớ

Keep technical FSRS terminology only in internal/dev contexts.

Flashcard controls may retain:

- Lại
- Khó
- Tốt
- Dễ

if already implemented.

Microinteraction:

- subtle card flip
- 180–240ms
- no strong glow
- respect prefers-reduced-motion

---

# 12. MOCK TEST / CYBER FOCUS MODE

This is where the cyber-academic visual concept should be used.

## 12.1 Entry transition

Normal app:

```text
LIGHT EDITORIAL MODE
```

User starts timed/mock session:

```text
CYBER FOCUS MODE
```

After submission:

```text
LIGHT REVIEW MODE
```

## 12.2 Focus-mode tokens

```css
[data-mode="focus"] {
  --focus-bg: #0B1118;
  --focus-surface: rgba(17, 27, 39, 0.82);
  --focus-surface-strong: rgba(21, 34, 48, 0.92);
  --focus-text: #F3F6F4;
  --focus-muted: #AAB6B0;
  --focus-teal: #43A99C;
  --focus-cyan: #38BFD5;
  --focus-amber: #F4B942;
  --focus-danger: #F06B68;
  --focus-border: rgba(255,255,255,0.10);
}
```

## 12.3 Glass usage

Allowed:

- top exam toolbar
- active timer module
- modal
- question navigator
- active speaking/listening control

Avoid glass for long text passage surfaces.

Reading passage should remain highly legible with a stable solid surface.

## 12.4 Mock UI

Support computer-first testing interaction:

### Reading

- split passage/questions where appropriate
- question navigator
- timer
- highlight/notes if already supported

### Listening

- fixed player
- progression
- question navigator
- clear one-listen behavior if product logic supports it

### Writing

- editor
- word count
- Task 1 / Task 2 indicator
- timer
- autosave state

### Speaking

- clear recording state
- elapsed time
- prompt card
- simple input level indicator if technically available

## 12.5 Motion

Use subtle ambient glow only around active focus elements.

No full-screen neon pulsing.

---

# 13. LANDING PAGE VISUAL CORRECTION

Maintain the approved editorial visual direction.

## Hero

Left:

- large Vietnamese headline
- concise supporting copy
- primary diagnostic CTA
- secondary learning-path CTA

Right:

reserve space for:

```text
/public/assets/deepielts/hero/hero-student.png
```

Behind the student use restrained shapes:

- deep teal block
- soft teal organic shape
- small mustard accent
- hand-drawn underline / arrow

Do not place a generic information card as the main right-side visual.

## Hero copy

Recommended:

### Heading

**Từ nền tảng đến band mục tiêu, theo một lộ trình rõ ràng.**

### Supporting text

**DeepIELTS phân tích điểm yếu, biến từng lỗi sai thành kỹ năng cần luyện tiếp và xây dựng kế hoạch học từ Foundation đến IELTS 5.0–8.0.**

### Primary CTA

**Làm bài chẩn đoán**

### Secondary CTA

**Xem lộ trình học**

---

# 14. COPY CORRECTIONS

Replace learner-facing jargon.

| Current | Replace with |
|---|---|
| Người Dẫn Đường IELTS Sư Phạm | DeepTutor — Trợ lý học IELTS cá nhân |
| 4 Kỹ Năng Chuẩn Khảo Thí Quốc Tế | Đầy đủ 4 kỹ năng IELTS |
| Ôn Tập Ngắt Quãng FSRS & Giải Phẫu Lỗi Sai | Ôn đúng lúc. Sửa đúng lỗi. |
| Khung Năng Lực Sư Phạm Từ Nền Tảng Đến Band 8.0 | Lộ trình từ nền tảng đến Band 8.0 |
| Truy Cập Chuyên Môn | Luyện theo từng kỹ năng |
| Cognitive Diagnostic Matrix | Năng lực nền tảng |

Internal data keys may remain unchanged.

---

# 15. ICON SYSTEM

Fix all broken glyphs / emoji fallback.

Use one consistent SVG icon system already available in the project.

Preferred if present:

- Lucide

Examples:

- Home
- BookOpen
- RotateCcw
- ClipboardCheck
- ChartNoAxesColumnIncreasing
- Target
- CheckCircle2
- AlertCircle
- Search
- Brain
- PenLine
- Headphones
- Mic

Do not use emoji for functional icons.

Decorative emoji may appear in rare non-critical marketing copy only.

---

# 16. DONATION UI — P0 FIX

The donation panel must never auto-open over learning content.

Remove persistent expanded QR payment panel from app screens.

## Trigger

Use a small secondary entry:

**Ủng hộ DeepIELTS**

Recommended locations:

- footer
- account menu
- secondary support menu

## Interaction

On click:

- open modal or drawer
- show payment methods there
- allow easy close
- do not block return to learning

Suggested copy:

**Nếu DeepIELTS hữu ích, bạn có thể góp một ly cà phê để giúp duy trì máy chủ và AI.**

Do not use donation pressure or urgency patterns.

---

# 17. ZALO / SUPPORT UI — P0/P1 FIX

Current support control is visually too dominant.

Desktop:

- compact button: **Tư vấn**
- no permanent full phone number over content

Mobile:

- circular 48x48 support icon
- maintain safe area from bottom navigation

Support must not overlap:

- primary CTA
- exam navigation
- mobile answer controls

---

# 18. UNIVERSITY GOAL — OPTIONAL, NOT MVP CORE

Do not hard-code admission-conversion claims.

If a University Goal feature already exists, structure data as:

```json
{
  "school": "",
  "admissionYear": "",
  "method": "",
  "ieltsRequirement": "",
  "officialSource": "",
  "lastVerifiedAt": ""
}
```

If verified data does not exist, display only a generic personal goal label such as:

**Mục tiêu cá nhân**

Do not display false certainty.

---

# 19. IMAGE ASSET INTEGRATION

Do not auto-generate replacements.

Use these expected assets when available:

```text
public/assets/deepielts/
├── hero/
│   └── hero-student.png
├── skills/
│   ├── reading-student.png
│   ├── listening-student.png
│   ├── writing-student.png
│   └── speaking-student.png
├── coach/
│   └── teacher-coach.png
├── sections/
│   ├── diagnostic-student.png
│   ├── mock-student.png
│   ├── progress-student.png
│   └── parent-mentor.png
└── objects/
    ├── books-globe.png
    └── headphones-notebook.png
```

## Missing-image behavior

If an asset is not yet supplied:

- preserve intended layout geometry
- use a neutral placeholder or hide the image layer gracefully
- do not replace it with random stock imagery
- do not break layout

## Image rules

- transparent PNG/WebP
- preserve natural aspect ratio
- object-fit: contain
- do not crop faces or hands
- no text baked into image
- all visible copy remains HTML

---

# 20. PARENT AREA

Parent reporting should communicate trends, not surveillance.

Recommended parent summary:

- weekly consistency
- biggest improvement
- current bottleneck
- recommended encouragement
- upcoming mock / study milestone

Avoid exposing every answer or every mistake by default.

Tone:

- supportive
- factual
- non-judgmental

Suggested section title:

**Góc phụ huynh — Đồng hành tích cực, không tạo áp lực**

---

# 21. ACCESSIBILITY

Required:

- semantic heading hierarchy
- visible keyboard focus
- minimum practical touch target ~44px
- no meaning by color alone
- status icons + text labels
- support reduced motion
- maintain text contrast
- avoid amber for small text on white
- reading passages should have comfortable line length
- timed interfaces must remain usable by keyboard

Do not claim WCAG compliance unless actually tested.

---

# 22. RESPONSIVE RULES

## Desktop ≥ 1200px

- max content width around 1240–1280px
- use 12-column grid where useful
- editorial asymmetry allowed

## Tablet 768–1199px

- reduce decorative doodles
- 2-column sections may collapse to 1 column when copy becomes cramped
- Progress Band Gap and Next Action may stack

## Mobile < 768px

Priority:

1. current state
2. next action
3. primary CTA
4. progress summary
5. secondary information

Rules:

- one-column layout
- no horizontal scrolling
- no persistent QR donation panel
- support icon must avoid bottom nav
- decorative images may reduce or move below content
- preserve CTA above unnecessary detail

---

# 23. MOTION PRINCIPLES

Normal learning UI:

- 150–220ms
- subtle opacity / translate
- no bouncing CTA
- no constant glow

Focus / exam mode:

- subtle active-state cyan edge/glow permitted
- timer should not animate aggressively

Success feedback:

- small check / color change
- brief micro-animation
- no repeated confetti

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 24. IMPLEMENTATION PHASES

## Phase 0 — Repository Audit

**Goal:** understand current implementation before modification.

Tasks:

- map routes
- identify key components
- identify state/data dependencies
- identify design tokens
- identify donation/support implementation
- identify broken icon source
- identify dark-mode implementation
- identify asset paths

**Output:** internal change map.

**Definition of Done:** no visual refactor starts before key dependencies are known.

---

## Phase 1 — P0 Product Corrections

Tasks:

1. stop donation panel auto-open
2. move donation to modal/drawer trigger
3. fix broken icons/glyphs
4. reduce Zalo/support overlay
5. simplify global navigation density
6. preserve all existing functionality

**Definition of Done:** learning content is never obstructed by support/donation UI and all core icons render correctly.

---

## Phase 2 — Progress Page Rewrite

Tasks:

1. move Band Gap to top
2. add Next Best Action beside/under it
3. relabel estimated readiness
4. add current bottlenecks
5. rename cognitive matrix to learner language
6. implement band-ladder states
7. move secondary detail lower

**Definition of Done:** within 5 seconds a learner can identify current state, target, largest gap and next recommended action.

---

## Phase 3 — Today Command Center

Tasks:

1. create one dominant Next Best Action
2. add 10–15 minute estimate
3. add three secondary compact modules
4. add short daily plan
5. de-emphasize dashboard clutter

**Definition of Done:** one obvious next action exists above the fold.

---

## Phase 4 — Visual System Correction

Tasks:

1. switch dominant branding to teal/cream/amber
2. reduce SaaS blue dominance
3. normalize typography
4. normalize card radii/borders/shadows
5. add editorial spacing rhythm
6. add restrained doodle accents where appropriate

**Definition of Done:** landing and app share the same brand DNA without making learning screens decorative or distracting.

---

## Phase 5 — Learn / Error-to-Skill / Deep Practice

Tasks:

- editorial skill sections
- simplify learner-facing jargon
- redesign Error → Skill journey
- redesign Deep Practice as decreasing-support progression
- preserve underlying logic

**Definition of Done:** pedagogy is visually understandable without exposing technical system terminology.

---

## Phase 6 — Cyber Focus Mode

Tasks:

- implement focus-mode variables
- apply only to timed/mock/high-focus contexts
- maintain solid readable passage/editor surfaces
- add subtle active-state glass/glow to controls only
- preserve exam logic

**Definition of Done:** focus mode feels distinct, calm and immersive without becoming neon/gaming UI.

---

## Phase 7 — Image Asset Integration

Tasks:

- wire listed asset paths
- ensure graceful missing-image behavior
- integrate hero student first
- add skill images progressively
- maintain responsive composition

**Definition of Done:** image additions do not require structural rework later.

---

## Phase 8 — Parent + Support Polish

Tasks:

- improve parent reporting hierarchy
- use supportive language
- ensure support and donation are secondary

**Definition of Done:** parent/support features do not compete with learner flow.

---

## Phase 9 — Regression QA

Verify:

- routes still work
- auth still works
- progress persists
- existing learning content remains accessible
- FSRS/review logic still works
- mock logic still works
- no data migrations broke existing users
- no broken icons
- no unreadable Vietnamese diacritics
- no overlapping floating controls
- mobile navigation works
- all CTAs have hover/focus/disabled states
- Today has one clear primary action
- Progress shows current → target → gap → next action
- focus mode is scoped correctly
- donation never auto-opens
- missing images do not break layout

---

# 25. QA ACCEPTANCE CHECKLIST

## P0

- [ ] Donation panel does not auto-open
- [ ] Payment QR never permanently covers learning content
- [ ] Broken icon/glyph issue resolved
- [ ] Support/Zalo does not obscure content
- [ ] Progress hierarchy corrected
- [ ] Next Best Action implemented

## P1

- [ ] Today is a command center, not a dashboard grid
- [ ] Teal/cream/amber brand system applied
- [ ] Band ladder has Current/Completed/Next states
- [ ] learner-facing jargon reduced
- [ ] nav density reduced
- [ ] estimated readiness clearly labelled

## P2

- [ ] Four Skills use more editorial composition
- [ ] Error-to-Skill journey visually improved
- [ ] Deep Practice progression improved
- [ ] image slots integrated
- [ ] Parent area polished
- [ ] Focus mode implemented correctly

---

# 26. SCOPE SPLIT

| Bucket | Items |
|---|---|
| MVP / Now | P0 fixes, Progress restructure, Today Command Center, brand-token correction, nav cleanup |
| Next | Skill editorial layout, Error-to-Skill visual, Deep Practice visual, parent polish |
| Later | University Goal with verified yearly data, richer historical analytics, optional advanced dark-mode refinements |
| Out of Scope | full-site neon glassmorphism, gaming XP economy, fake university conversion claims, total rebuild |

---

# 27. RISKS AND MITIGATION

| Risk | Impact | Mitigation |
|---|---|---|
| Global CSS refactor breaks learning views | High | implement semantic tokens incrementally and regression-test each route |
| Focus mode leaks into normal pages | Medium | scope styles under explicit `[data-mode="focus"]` or route-level class |
| Image assets arrive later | Medium | preserve placeholders and layout geometry now |
| Internal readiness looks like official IELTS score | High | add explicit estimated-readiness labels and confidence/date where relevant |
| Donation/support harms product trust | High | move to secondary trigger and modal/drawer |
| Too much editorial decoration distracts study | Medium | restrict doodles/photography mainly to landing, overview and non-exam areas |
| University claims become outdated | High | no hard-coded conversion claims without verified year-specific source model |

---

# 28. FIRST ACTION FOR ANTIGRAVITY

Start with **Phase 0 + Phase 1 only**.

1. Audit repository structure.
2. Identify exact components/files affected.
3. Fix donation, icon, support and nav issues.
4. Run regression check.
5. Then proceed to Phase 2 Progress page.

Do not begin by globally replacing the stylesheet.

Do not inject full-site glassmorphism CSS.

---

# 29. FINAL PRODUCT PRINCIPLE

Every visual decision must support this hierarchy:

```text
BRAND
Academic Editorial
        ↓
LEARNING
Adaptive Command Center
        ↓
FOCUS / EXAM
Cyber Focus Mode
```

DeepIELTS should feel more intelligent because it tells the learner what matters next — not because the interface contains more effects.

