# DeepIELTS — Antigravity Master Implementation Plan

**Version:** 1.0  
**Date:** 2026-10-03  
**Product:** N&Mstudio Education — DeepIELTS  
**Purpose:** Tài liệu triển khai trực tiếp trên Antigravity, dùng để nâng cấp hệ thống hiện có mà **không rebuild từ đầu**.

---

## 0. Cách Antigravity phải sử dụng tài liệu này

Antigravity phải coi repository hiện tại là **source of truth về code và business logic**, còn tài liệu này là **source of truth về product direction, UX, visual system, learning architecture và tiêu chí nghiệm thu**.

### Nguyên tắc bắt buộc

1. **Audit trước, sửa sau.** Không được thay cấu trúc dữ liệu, auth, API, persistence, progress, content hoặc route đang chạy nếu chưa xác định dependency.
2. **Không rebuild từ đầu.** Ưu tiên refactor/migrate theo lớp, giữ lại chức năng đang hoạt động.
3. **Không xóa dữ liệu học tập hiện có.** Nếu schema cần đổi, phải có migration hoặc adapter.
4. **Không tạo số liệu marketing giả.** Không dùng các con số như “3k+ students”, “300+ lessons” nếu chưa có dữ liệu thật.
5. **Không mô phỏng UI chính thức của IELTS.** Chỉ mô phỏng logic, ràng buộc và hành vi cần thiết cho luyện thi.
6. **Không tuyên bố sản phẩm là IELTS chính thức hoặc được IELTS bảo trợ.**
7. Mọi chấm điểm AI phải được hiển thị là **estimated readiness / estimated band range**, trừ khi đó là raw score khách quan như số câu đúng.
8. Mỗi màn hình học tập phải có **một hành động chính rõ ràng**.
9. Sau mỗi phase phải chạy regression trước khi chuyển phase tiếp theo.
10. Nếu một yêu cầu trong file này xung đột với code thực tế, Antigravity phải **giữ chức năng đang chạy**, ghi rõ conflict và đề xuất migration nhỏ nhất.

---

# 1. Product Vision

DeepIELTS không nên là một dashboard chứa nhiều chức năng. Sản phẩm phải trả lời được ngay cho người học ba câu hỏi:

1. **Tôi đang ở đâu?**
2. **Tôi cần đạt band nào?**
3. **Hôm nay tôi nên học gì tiếp theo?**

North-star UX:

> **Diagnostic → Personal Plan → Learn → Practice → Review → Mock → Progress → Next Best Action**

Visual direction:

> **Academic Editorial × Modern Learning Product**

Landing page được phép giàu hình ảnh, typography lớn, cut-out photography, doodle và composition bất đối xứng có kiểm soát. Khu vực học phải sạch, tập trung, giảm trang trí và ưu tiên nội dung.

---

# 2. Target Users

## Persona A — Zero / Foundation

- Chưa có nền IELTS hoặc nền tiếng Anh yếu.
- Không biết bắt đầu từ kỹ năng nào.
- Dễ bị quá tải khi nhìn thấy quá nhiều loại bài.
- Cần lộ trình ngắn, dễ hiểu, có giải thích tiếng Việt khi cần.

**UX priority:** chỉ dẫn rõ “bước tiếp theo”, micro-win, foundation skills, không ép vào full mock quá sớm.

## Persona B — Band 5.0–6.0

- Đã biết format IELTS.
- Thường luyện đề nhiều nhưng không biết vì sao sai.
- Cần error diagnosis, vocabulary/grammar in context, strategy và review.

**UX priority:** Error → Skill → Retry → Review.

## Persona C — Band 6.0–7.0

- Có nền tương đối tốt nhưng thiếu precision, time management, paraphrase, logic, idea development.
- Cần dữ liệu tiến bộ theo subskill thay vì chỉ điểm tổng.

**UX priority:** band gap, weak-skill ranking, timed practice, targeted feedback.

## Persona D — Band 7.0–8.0

- Cần accuracy, nuance, flexibility, coherence và xử lý nội dung khó.
- Không cần nhiều tutorial cơ bản.

**UX priority:** advanced drills, error patterns, difficult passages, high-quality feedback, exam simulation.

## Persona E — Parent / Mentor

- Cần biết tiến độ, consistency và vấn đề chính.
- Không cần xem mọi câu trả lời chi tiết.

**UX priority:** weekly summary, study time, current readiness, weakest skill, missed plan, next milestone.

---

# 3. Information Architecture

## Public

- `/` — Landing
- `/roadmap` — Lộ trình Foundation → 8.0
- `/skills` — Tổng quan 4 kỹ năng
- `/skills/listening`
- `/skills/reading`
- `/skills/writing`
- `/skills/speaking`
- `/mock-test`
- `/resources`
- `/about`

Nếu repository hiện tại đã có route khác, không đổi URL đang được index hoặc chia sẻ nếu không cần thiết; dùng redirect/alias.

## Learning App

Base route đề xuất: `/app`

Primary navigation:

1. **Today**
2. **Learn**
3. **Review**
4. **Mock**
5. **Progress**

Secondary:

- Search
- Notifications
- Profile
- Settings
- Parent access / share progress nếu có

## Parent

- `/parent`
- Overview
- Weekly summary
- Skill progress
- Study consistency
- Mock history

---

# 4. Primary Learning Loop

```text
DIAGNOSTIC
   ↓
PERSONAL PLAN
   ↓
LEARN
   ↓
WORKED EXAMPLE
   ↓
GUIDED PRACTICE
   ↓
INDEPENDENT PRACTICE
   ↓
TIMED PRACTICE
   ↓
ERROR REVIEW
   ↓
TRY SIMILAR
   ↓
SECTION TEST
   ↓
FULL MOCK
   ↓
PROGRESS UPDATE
   ↓
NEXT BEST ACTION
```

## Error-to-Skill loop

Mỗi câu sai hoặc output yếu phải có khả năng map tới:

```text
Answer
→ Evidence
→ Why it failed
→ Error / trap type
→ Underlying skill
→ Strategy
→ Retry similar
→ Review due
```

### Dữ liệu tối thiểu của một error event

- `attempt_id`
- `user_id`
- `skill_id`
- `subskill_id`
- `question_id` hoặc `task_id`
- `user_answer`
- `expected_answer` nếu có
- `evidence`
- `error_type`
- `error_reason`
- `strategy_tip`
- `difficulty`
- `timestamp`
- `review_due_at`
- `resolved` boolean

Không bắt buộc migrate ngay nếu schema hiện tại khác. Có thể tạo adapter layer trước.

---

# 5. Today = Learning Command Center

Today không phải dashboard tổng hợp. Today phải trả lời:

> **“Hôm nay tôi cần làm gì để tiến gần target band nhất?”**

## Above the fold

```text
Good afternoon, [Name]
Target 7.0 · Exam in 63 days
Today 35 min

NEXT BEST ACTION
Reading · Matching Headings
Recognising paragraph purpose
12 min

[ CONTINUE ]
```

Sau CTA chính chỉ hiển thị tối đa 3–4 block phụ:

- Review due
- Band gap
- Weekly consistency
- Recent improvement

Không hiển thị 10 card cùng trọng số.

## Next Best Action — heuristic v1

Antigravity không được dùng một AI recommendation mơ hồ nếu chưa có đủ dữ liệu. Dùng heuristic minh bạch trước:

```text
priority_score =
  band_gap_weight
+ recent_error_weight
+ review_due_weight
+ prerequisite_weight
+ exam_proximity_weight
```

Config ban đầu nằm trong `data/recommendation-heuristic.json`.

Rule order:

1. Diagnostic chưa hoàn tất → tiếp tục Diagnostic.
2. Có review quá hạn liên quan weak skill → ưu tiên Review.
3. Có prerequisite bị thiếu → học prerequisite.
4. Chọn skill có band gap lớn nhất, nhưng không lặp một skill quá nhiều ngày liên tiếp nếu skill khác cũng yếu.
5. Gần ngày thi → tăng timed practice và mock readiness.
6. Sau full mock → ưu tiên xử lý top 1–2 lỗi có impact lớn nhất.

---

# 6. Band Path — Zero to 8.0

Đây là **pedagogical framework nội bộ**, không phải thang phân loại chính thức của IELTS.

## Foundation

Mục tiêu:
- Core grammar
- Sentence structure
- High-frequency vocabulary
- Pronunciation fundamentals
- Listening for gist/details
- Reading sentence/paragraph meaning
- Basic writing organisation
- Basic spoken response

## Target 5

Mục tiêu:
- Hiểu format
- Hoàn thành task
- Tìm thông tin chính
- Viết/ nói có cấu trúc cơ bản
- Giảm lỗi làm mất nghĩa

## Target 6

Mục tiêu:
- Accuracy ổn định hơn
- Paraphrasing nền tảng
- Idea development rõ hơn
- Complex grammar cơ bản
- Time management
- Familiar task strategy

## Target 7

Mục tiêu:
- Precision
- Flexible paraphrasing
- Logical progression
- Collocation awareness
- Stronger evidence and idea development
- Frequent error-free sentences
- Better handling of unfamiliar material

## Target 8

Mục tiêu:
- High accuracy
- Nuance
- Flexible language
- Precise vocabulary
- Strong coherence
- Complex material under time pressure
- Minimal systematic errors

Không được viết copy kiểu “hoàn thành Level 8 = chắc chắn đạt IELTS 8.0”.

---

# 7. Skill Architecture

## Listening

Internal subskills:
- Gist
- Specific detail
- Numbers / dates / names
- Speaker attitude / opinion
- Distractor recognition
- Synonym / paraphrase recognition
- Following sequence
- Map / plan orientation
- Note / form / table completion
- Multiple choice
- Matching
- Short answer

## Reading

Internal subskills:
- Skimming for purpose
- Scanning for detail
- Paragraph purpose
- Main idea
- Supporting detail
- Inference
- Writer view / claim
- Reference words
- Paraphrase recognition
- Matching Headings
- True / False / Not Given
- Yes / No / Not Given
- Matching information
- Matching features
- Sentence completion
- Summary / note / table / flow-chart completion
- Multiple choice
- Short answer

## Writing

Keep official IELTS assessment dimensions visible in the UI:
- Task Achievement (Task 1) / Task Response (Task 2)
- Coherence & Cohesion
- Lexical Resource
- Grammatical Range & Accuracy

Internal learning tags may include:
- Task analysis
- Position clarity
- Idea development
- Supporting examples
- Paragraph control
- Cohesive devices
- Referencing
- Topic vocabulary
- Collocation
- Word form
- Grammar accuracy
- Sentence variety
- Complex structures
- Editing / proofreading

## Speaking

Keep official IELTS assessment dimensions visible in the UI:
- Fluency & Coherence
- Lexical Resource
- Grammatical Range & Accuracy
- Pronunciation

Internal learning tags:
- Response expansion
- Hesitation management
- Linking ideas
- Paraphrase
- Topic vocabulary
- Grammar control
- Intonation
- Word stress
- Sentence stress
- Connected speech
- Part 2 long turn structure
- Part 3 abstract discussion

---

# 8. Public Landing Page — Detailed Layout

## Header

Desktop:
- DeepIELTS logo left
- Lộ trình
- Kỹ năng
- Mock Test
- Tài nguyên
- Về DeepIELTS
- CTA: `Vào học`

Mobile:
- Logo
- Primary CTA
- Menu

Sticky header nhẹ sau khi scroll, không glassmorphism nặng.

## Hero

### Copy

**Eyebrow:** `DEEPIELTS · PERSONAL IELTS LEARNING PATH`

**H1:**
> Từ nền tảng đến band mục tiêu,  
> theo một lộ trình rõ ràng.

**Body:**
> DeepIELTS phân tích điểm yếu, biến từng lỗi sai thành kỹ năng cần luyện tiếp và xây dựng kế hoạch học từ Foundation đến IELTS 5.0–8.0.

**Primary CTA:** `Làm bài chẩn đoán`

**Secondary CTA:** `Xem lộ trình học`

**Micro message:** `Không luyện ngẫu nhiên. Luyện đúng phần đang giữ band của bạn lại.`

### Visual

- Right/center: transparent-background hero student.
- Teal rounded block behind subject.
- 2–3 small metric/content cards; chỉ dùng fact về sản phẩm, ví dụ:
  - `4 skills`
  - `Target 5.0–8.0`
  - `Adaptive Review`
- Doodle arrows/underline nhỏ.
- Không dùng con số user/lesson nếu chưa có dữ liệu thật.

## Section 2 — Learning Journey

Title:
> Một lộ trình. Mỗi bước đều có lý do.

Steps:
1. Diagnostic
2. Personal Plan
3. Learn & Drill
4. Review
5. Mock
6. Improve

## Section 3 — Four Skills

Title:
> Bốn kỹ năng, bốn kiểu vấn đề khác nhau.

Card copy phải nói “what to improve”, không chỉ nói tên kỹ năng.

## Section 4 — Error → Skill

Title:
> Sai ở đâu, học tiếp ở đó.

Visual pipeline:

```text
Mistake → Why → Skill → Strategy → Retry → Review
```

## Section 5 — Band Path

Foundation / 5 / 6 / 7 / 8

UI có thể dùng stepped path hoặc horizontal path, không biến thành “gamified childish level map”.

## Section 6 — Deep Practice

Worked Example → Guided → Independent → Timed

Copy:
> Không nhảy thẳng vào đề khó. DeepIELTS giảm hỗ trợ từng bước cho tới khi bạn làm độc lập dưới áp lực thời gian.

## Section 7 — Computer-first Mock

- Reading split layout
- Listening player + navigator
- Writing editor + word count
- Timer
- Autosave
- Review state

## Section 8 — Band Gap

Example visual:

```text
Reading     6.5 → 7.0
Listening   7.0 ✓
Writing     5.5 → 7.0   ← largest gap
Speaking    6.0 → 7.0
```

CTA: `Work on this gap`

## Section 9 — Parent / Mentor

Show:
- Weekly learning time
- Completion
- Weakest skill
- Current readiness
- Mock trend
- Next milestone

## Section 10 — Final CTA

Title:
> Bắt đầu bằng việc biết chính xác mình đang ở đâu.

Primary CTA:
`Làm bài chẩn đoán`

---

# 9. Visual System

## Design personality

- Warm
- Academic
- Intelligent
- Youthful but not childish
- Editorial
- Trustworthy
- Focused

## Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F7F5EE` | main background |
| Surface | `#FFFFFF` | cards/panels |
| Ink | `#20221F` | primary text |
| Muted | `#6C706B` | secondary text |
| Teal | `#2C776D` | brand |
| Teal Dark | `#225F58` | CTA / accessible text |
| Teal Soft | `#DCEBE6` | tinted cards |
| Amber | `#F4AA13` | accent |
| Amber Soft | `#FFF0C7` | highlight |
| Line | `#DCDED7` | border/divider |
| Error | `#B5473C` | error states only |
| Success | `#287A5A` | success states only |

## Typography

Primary brand/UI: **Be Vietnam Pro**

- Hero H1: 64–72 desktop / 42–48 tablet / 34–40 mobile
- H2: 44–52 desktop / 34–40 tablet / 30–34 mobile
- H3: 24–30
- Body large: 18
- Body: 15–16
- Caption: 12–13
- Heading tracking: approximately `-0.025em` to `-0.04em`

Numeric/timer: **IBM Plex Mono**

Long Reading passage optional: **Source Serif 4**

## Components

- Card radius: 16–20px
- Buttons: 12–14px radius
- Border: subtle 1px
- Shadow: minimal, only for elevation hierarchy
- Doodle: SVG, 1.5–2px line weight
- Icons: consistent outline set
- No emoji as UI icons
- Avoid gradient unless there is a strong functional reason

## Layout

- Max content width: 1240–1280px
- Desktop: 12-column grid
- Page gutters: 24–32px desktop, 16–20px mobile
- Hero text max width: 620–700px
- Long prose line length: 60–75ch
- Practice passage: width chosen for readability, not full viewport

---

# 10. App Screen Specifications

## Today

Primary card dominates.

Required:
- Greeting
- Target band
- Exam date/countdown if known
- Planned study time
- Next Best Action
- Review due
- Band gap snapshot
- Weekly streak/consistency

## Learn

First screen shows:
- Recommended path
- Current stage
- 4 skill status
- Continue current lesson
- Browse all only as secondary action

## Skill Page

Example:

```text
READING
Current readiness 6.0–6.5
Target 7.0

Weakest area
Matching Headings

Main error pattern
Choosing by repeated keywords

NEXT BEST ACTION
Recognising paragraph purpose
12 min

[ CONTINUE LESSON ]
```

Then:
- Skill map
- Lesson groups
- Recent errors
- Review due
- Practice history

## Lesson

Recommended structure:
1. Objective
2. Why this matters
3. Concept
4. Worked example
5. Guided practice
6. Independent practice
7. Mini check
8. Summary
9. Schedule review

## Review

Queues:
- Due today
- Overdue
- Weak skill
- Recent mock errors

Each review item must show reason for review, not just a random question.

## Progress

Avoid decorative charts with no action.

Priority:
- Current readiness by skill
- Target
- Band gap
- Skill heatmap
- Error patterns
- Accuracy over time
- Mock history
- Study consistency
- “What improved”
- “What is holding you back”

## Mock

Distinct visual mode.

**Learn Mode:** hints, explanations, strategy, feedback.  
**Exam Mode:** no hints, timer, navigator, autosave, word count, test rules.

---

# 11. Writing Feedback UX

Do not show only one big AI number.

Recommended:

```text
Estimated readiness: 6.0–6.5
Confidence: Medium

Task Response              6.0
Coherence & Cohesion       6.0–6.5
Lexical Resource           6.0
Grammar Range & Accuracy   6.0
```

For every dimension show:

- Evidence from user response
- What worked
- What reduced the estimate
- One high-impact improvement
- One rewrite / retry task

Task 1 and Task 2 must be differentiated.

No invented criterion such as “Creativity Score”.

---

# 12. Speaking Feedback UX

Display:
- Estimated readiness range
- Confidence
- Fluency & Coherence
- Lexical Resource
- Grammatical Range & Accuracy
- Pronunciation

Feedback should separate:
- Content / response development
- Language quality
- Delivery / pronunciation

If speech-to-text confidence is low, do not present exact grammar claims without a caveat.

For pronunciation:
- word stress
- sentence stress
- intelligibility
- intonation
- problematic sounds only when evidence is sufficient

---

# 13. Official IELTS Facts to Encode

Verified against IELTS.org on 2026-10-03.

## Test structure — IELTS Academic

- Listening: approximately 30 minutes
- Reading: 60 minutes
- Writing: 60 minutes
- Speaking: 11–14 minutes
- Reading: 40 questions
- Speaking: 3 parts

## Listening raw-score examples published by IELTS

Average marks out of 40:
- Band 5: 16
- Band 6: 23
- Band 7: 30
- Band 8: 35

## Academic Reading raw-score examples published by IELTS

Average marks out of 40:
- Band 5: 15
- Band 6: 23
- Band 7: 30
- Band 8: 35

Always show disclaimer:

> Approximate conversion. Exact thresholds may vary slightly by test version.

## Writing assessment dimensions

- Task Achievement (Task 1) / Task Response (Task 2)
- Coherence & Cohesion
- Lexical Resource
- Grammatical Range & Accuracy

Task 2 carries more weight than Task 1 in the overall Writing score.

## Speaking assessment dimensions

- Fluency & Coherence
- Lexical Resource
- Grammatical Range & Accuracy
- Pronunciation

## Overall band

Overall band is the average of four component bands with IELTS rounding rules. Implement from official logic, not an arbitrary average display.

### Sources

- https://www.ielts.org/take-a-test/your-results/ielts-scoring-in-detail
- https://ielts.org/take-a-test/test-types/ielts-academic-test
- https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading
- https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening
- https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-speaking
- https://ielts.org/cdn/ielts-guides/ielts-writing-band-descriptors.pdf

Do not scrape or reproduce large amounts of official copyrighted test material. Use original practice content or properly licensed/public sample material.

---

# 14. Content Voice

Default UI language: Vietnamese, giữ thuật ngữ IELTS bằng English khi thuật ngữ đó quen thuộc.

Tone:
- concise
- specific
- credible
- instructional
- non-hype

Avoid:
- “hack IELTS”
- “cam kết band 8”
- “AI chấm chuẩn 100%”
- “học 30 ngày chắc chắn tăng 2 band”

Prefer:
- “estimated readiness”
- “current evidence suggests”
- “high-impact improvement”
- “recommended next action”

---

# 15. Image System

Images are generated separately and uploaded later.

Antigravity must create image slots first and use graceful placeholders.

Expected root:

```text
/public/assets/deepielts/
```

If current framework uses another public/static root, adapt the path but preserve the semantic folder names.

Required assets are listed in `data/asset-manifest.json` and prompts in `01_IMAGE_PROMPTS.md`.

### Important

- Keep all visible text as HTML, never baked into images.
- Generated subject images should use transparent backgrounds.
- Antigravity should not invent missing images; use placeholder blocks until files exist.
- Optimize via build pipeline to WebP/AVIF where supported.
- Preserve transparent PNG originals as source assets if useful.

---

# 16. Implementation Phases

## PHASE 0 — Repository Audit & Baseline

### Tasks

- Inspect framework, package manager, build scripts.
- Map routes.
- Map auth.
- Map APIs / backend services.
- Map data storage.
- Map current learning content.
- Map progress / scores / attempts.
- Map AI integrations.
- Map existing design system.
- Capture desktop/mobile screenshots of critical screens.
- Run current tests/build.

### Output

Create:
- `docs/audit/current-state.md`
- `docs/audit/route-map.md`
- `docs/audit/data-map.md`
- `docs/audit/risk-register.md`

### Gate

Do not start destructive UI refactor before build baseline is green or existing failures are documented.

---

## PHASE 1 — Design Foundation

### Tasks

- Install/use Be Vietnam Pro, IBM Plex Mono, optional Source Serif 4.
- Create tokens from `data/design-tokens.json`.
- Normalize spacing, radius, borders, focus states.
- Build base components:
  - Button
  - Link
  - Card
  - Tag
  - Progress bar
  - Skill badge
  - Score/range display
  - Empty state
  - Skeleton
  - Error state
  - Modal/dialog
- Build responsive page container/grid.

### Acceptance

- No regression in existing route navigation.
- WCAG-aware contrast.
- Keyboard focus visible.
- Mobile 390px has no horizontal overflow.

---

## PHASE 2 — Public Landing Redesign

### Tasks

Build sections in exact sequence from Section 8.

Use placeholders for images matching final aspect ratios.

### Acceptance

- Hero CTA visible at 1440×900 and 390×844 without confusing competing CTA.
- No fake metrics.
- No generated text inside images.
- Layout resembles editorial education reference through composition, not copying exact artwork.

---

## PHASE 3 — App Shell + Today

### Tasks

- Implement primary nav Today/Learn/Review/Mock/Progress.
- Convert home into command center.
- Add Next Best Action component.
- Add study-plan summary.
- Add Review Due.
- Add Band Gap mini component.

### Data

Use existing user/progress data via adapter. If missing, seed mock data only in dev mode.

### Acceptance

Within 5 seconds, a user should know what to do next.

---

## PHASE 4 — Learn + Skill Pages

### Tasks

- Introduce Foundation → Band target path.
- Build skill overview.
- Build skill page template.
- Preserve all current exercises by mapping them to taxonomy, not deleting them.
- Mark unmapped content as `legacy/unmapped` until classified.

### Acceptance

All existing learning content remains reachable.

---

## PHASE 5 — Error-to-Skill + Review

### Tasks

- Standardize error event model through adapter.
- Add error explanation layout.
- Add skill mapping.
- Add retry similar action.
- Add review queue.
- Add due/overdue state.

### Acceptance

For supported question types, a wrong answer can route to at least:
`reason → skill → strategy → retry`.

---

## PHASE 6 — Writing + Speaking Feedback

### Tasks

- Replace single-number AI score emphasis with range + confidence.
- Align UI to official assessment dimensions.
- Add evidence snippets.
- Add improvement priority.
- Add retry task.

### Acceptance

No AI band claim appears without evidence/confidence context.

---

## PHASE 7 — Mock Mode

### Tasks

- Separate Learn Mode and Exam Mode visually/functionally.
- Implement computer-first interactions.
- Timer.
- Navigation.
- Autosave.
- Word count.
- State restoration.
- Submission confirmation.

### Acceptance

Refresh/reopen does not unexpectedly lose an in-progress attempt if persistence already exists or can be safely added.

---

## PHASE 8 — Progress + Band Gap + Parent

### Tasks

- Band Gap component.
- Skill heatmap.
- Error pattern summary.
- Mock trend.
- Weekly consistency.
- Parent summary.

### Acceptance

Every major chart must answer a decision question or link to an action.

---

## PHASE 9 — Image Asset Integration

### Tasks

- User uploads generated images into prepared folders.
- Validate dimensions/transparency.
- Integrate exact assets from manifest.
- Optimize.
- Add meaningful alt text.

### Acceptance

Missing image does not break layout. CLS kept low through reserved dimensions/aspect ratios.

---

## PHASE 10 — QA, Accessibility, Performance, Regression

### Test sizes

- 1440×900
- 1280×800
- 1024×768
- 768×1024
- 390×844
- 360×800

### QA

- Auth
- Navigation
- Persistence
- Diagnostic
- Lesson resume
- Review queue
- Mock resume/submission
- Writing input
- Speaking recording if applicable
- Progress
- Parent access
- Responsive
- Keyboard navigation
- Focus states
- Reduced motion
- Loading/error/empty states

### Performance targets

Use as engineering targets, not release blockers if current architecture prevents them initially:
- LCP ≤ ~2.5s on reasonable mobile conditions
- CLS < 0.1
- INP < 200ms where feasible
- Lazy-load below-fold media
- No unnecessary animation framework

---

# 17. Data Migration Strategy

## Classification

Every datum must be classified as one of:

1. `EXISTING_PRODUCTION_DATA` — never overwrite.
2. `EXISTING_CONTENT` — preserve, map gradually.
3. `OFFICIAL_REFERENCE` — verified facts only.
4. `INTERNAL_PEDAGOGY` — DeepIELTS taxonomy/learning logic.
5. `DEMO_ONLY` — mock/example data; production must not show it.

## Rule

Antigravity must not silently convert DEMO_ONLY into production content.

---

# 18. Suggested Data Models

These are target shapes. Adapt through interfaces/adapters before database migration.

## User Learning Profile

```ts
interface LearningProfile {
  userId: string;
  targetBand?: number;
  examDate?: string;
  weeklyMinutesGoal?: number;
  currentStage?: 'foundation' | 'target5' | 'target6' | 'target7' | 'target8';
  diagnosticCompleted: boolean;
  readiness?: {
    listening?: RangeScore;
    reading?: RangeScore;
    writing?: RangeScore;
    speaking?: RangeScore;
  };
}
```

## Range Score

```ts
interface RangeScore {
  low: number;
  high: number;
  confidence: 'low' | 'medium' | 'high';
  evidenceCount?: number;
  updatedAt: string;
}
```

## Learning Item

```ts
interface LearningItem {
  id: string;
  skill: 'listening' | 'reading' | 'writing' | 'speaking' | 'foundation';
  subskillId: string;
  stage: string;
  title: string;
  type: 'lesson' | 'worked-example' | 'guided-practice' | 'practice' | 'timed' | 'review' | 'mock';
  estimatedMinutes: number;
  prerequisites?: string[];
}
```

## Error Event

```ts
interface ErrorEvent {
  id: string;
  userId: string;
  attemptId: string;
  skill: string;
  subskillId: string;
  sourceItemId: string;
  errorType: string;
  evidence?: string;
  explanation?: string;
  strategy?: string;
  createdAt: string;
  reviewDueAt?: string;
  resolved: boolean;
}
```

---

# 19. UX States That Must Exist

For all data-driven modules:

- loading
- empty
- populated
- error
- offline/connection lost where relevant
- stale data if applicable
- first-time user
- returning user

Examples:

**No Band Gap yet**  
`Hoàn thành Diagnostic để DeepIELTS ước tính khoảng năng lực hiện tại.`

**No review due**  
`Hôm nay chưa có nội dung cần ôn lại. Tiếp tục bài được đề xuất.`

**AI feedback unavailable**  
`Bài của bạn đã được lưu. Phản hồi AI hiện chưa khả dụng; hãy thử lại sau.`

Never show a blank card.

---

# 20. Accessibility

- Semantic headings.
- Button/link semantics must be correct.
- Focus visible.
- Touch target ~44px where practical.
- Do not rely on color alone for right/wrong.
- Captions/transcript support for listening content where pedagogically appropriate outside exam simulation.
- Labels for form fields.
- Announce timer warnings accessibly.
- Respect `prefers-reduced-motion`.
- Amber should not be used for small text on white unless contrast passes.

---

# 21. Motion

Landing:
- subtle 150–300ms
- small stagger only
- doodle draw-on optional
- cut-out image parallax very subtle or none on mobile

App:
- functional motion only
- 150–250ms
- no continuous decorative animation during reading/writing practice

Mock:
- almost no decorative motion

---

# 22. Analytics Events

If analytics already exists, map instead of replacing.

Recommended events:
- `diagnostic_started`
- `diagnostic_completed`
- `today_action_started`
- `lesson_started`
- `lesson_completed`
- `practice_submitted`
- `error_review_opened`
- `retry_started`
- `review_completed`
- `mock_started`
- `mock_completed`
- `writing_feedback_viewed`
- `speaking_feedback_viewed`
- `band_gap_action_clicked`

Do not log essay/speaking raw content into analytics unless privacy design explicitly allows it.

---

# 23. Image Upload Contract

Antigravity should look for assets by **logical key**, not random filenames.

Example:

```ts
const imageAssets = {
  heroStudent: '/assets/deepielts/hero/hero-student.png',
  readingStudent: '/assets/deepielts/skills/reading-student.png',
  listeningStudent: '/assets/deepielts/skills/listening-student.png',
  writingStudent: '/assets/deepielts/skills/writing-student.png',
  speakingStudent: '/assets/deepielts/skills/speaking-student.png',
  teacherCoach: '/assets/deepielts/coach/teacher-coach.png'
};
```

If asset not found:
- keep reserved aspect-ratio box
- use neutral abstract placeholder
- do not render broken image icon

---

# 24. Definition of Done

Project is not done because landing page looks good.

Done requires:

- Existing functions preserved.
- Today has one obvious next action.
- Learning content is organized into a coherent journey.
- Errors can route back to learning/review.
- 4 skill areas share a consistent information architecture.
- Writing/Speaking feedback uses credible assessment dimensions.
- Mock mode is distinct from learn mode.
- Progress leads to actions.
- Landing and app share visual DNA without making learning screens decorative.
- Mobile works.
- Accessibility basics work.
- Image slots are ready and can be replaced without code redesign.
- Production contains no demo statistics or invented IELTS claims.
- Build and regression checks pass.

---

# 25. Antigravity Execution Prompt

Copy the block below into Antigravity together with this package:

```text
Read 00_ANTIGRAVITY_MASTER_PLAN.md as the product/UX implementation specification.

Do not rebuild the app from scratch.

PHASE 0 FIRST:
Audit the existing repository, routes, authentication, APIs, persistence,
learning content, user progress, scoring, AI integrations, and current UI.
Create a concise current-state report and risk register.

Then compare the repository against the target architecture in the master plan.
Preserve all working business logic and production data.
Use adapters before destructive schema changes.

Execute phases sequentially:
0 Audit
1 Design Foundation
2 Landing
3 App Shell + Today
4 Learn + Skill Pages
5 Error-to-Skill + Review
6 Writing/Speaking Feedback
7 Mock
8 Progress + Parent
9 Image Integration
10 QA/Regression

At the end of each phase:
- run build/tests
- verify critical flows
- report files changed
- report data/schema changes
- report unresolved risks

Use /data files in this package as implementation seed/reference data.
Use image paths from data/asset-manifest.json.
Do not invent missing image assets; use placeholders until files are uploaded.
Do not invent marketing statistics.
Do not claim official IELTS affiliation.
Do not copy the official IELTS interface.

Before final acceptance run full regression on desktop, tablet, and mobile.
```

---

# 26. Recommended Build Order — Summary

| Priority | Work | Why |
|---|---|---|
| P0 | Audit + data safety | tránh phá hệ thống hiện tại |
| P0 | Today + Learning Loop | tạo giá trị học tập cốt lõi |
| P0 | Error → Skill → Review | biến luyện đề thành học có hệ thống |
| P1 | Visual system | thống nhất trải nghiệm |
| P1 | Landing redesign | thương hiệu + conversion |
| P1 | Skill pages | giảm overload |
| P1 | Writing/Speaking feedback | tăng academic credibility |
| P1 | Mock mode | readiness thực tế |
| P2 | Band Gap + advanced progress | cá nhân hóa rõ hơn |
| P2 | Parent dashboard | theo dõi ở layer riêng |
| P2 | Generated image assets | tăng sức sống cho public site |

---

# 27. Final Acceptance Questions

Antigravity must answer YES to all before declaring completion:

1. User mới có biết bắt đầu ở đâu không?
2. User quay lại có thấy ngay việc cần làm tiếp theo không?
3. Một lỗi sai có dẫn tới kỹ năng cần học không?
4. Review có lý do và lịch ôn rõ không?
5. Target band có được tách khỏi “guaranteed score” không?
6. Writing/Speaking feedback có evidence không?
7. Learn và Exam mode có phân biệt không?
8. Mọi content cũ có còn truy cập được không?
9. Auth/progress/persistence có còn hoạt động không?
10. Mobile có usable không?
11. Landing có đúng DNA editorial tham chiếu nhưng không sao chép không?
12. Ảnh chưa upload có làm vỡ layout không?
13. Không có fake statistic chứ?
14. Không có claim IELTS không kiểm chứng chứ?
15. Build/tests/regression đã chạy chứ?

---

**End of master plan.**
