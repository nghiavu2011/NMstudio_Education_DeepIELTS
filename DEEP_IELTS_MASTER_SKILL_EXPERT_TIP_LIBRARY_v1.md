# DEEP IELTS — MASTER SKILL & EXPERT TIP LIBRARY v1.0

> **Purpose:** Academic Brain / Content Specification for Antigravity implementation  
> **Project:** Deep IELTS — N&Mstudio Education  
> **Target implementation:** https://n-mstudio-education-deep-ielts.vercel.app/  
> **Source basis:** Huy Forum IELTS 9.0 transcript corpus uploaded by project owner  
> **Role split:** ChatGPT = Academic Brain / Knowledge Architect; Antigravity = Product Builder / UI / Logic / Database / Deployment  
> **Version:** v1.0 — One-pass synthesis

---

# 0. EXECUTIVE INTENT

Deep IELTS should not become another IELTS website that mainly contains:

- long theory pages,
- vocabulary lists,
- model essays,
- random mock tests,
- static tips,
- answer keys without diagnosis.

The core product idea extracted from the Huy Forum corpus is different:

> **Teach the decision process behind high-level IELTS performance.**

The recurring pattern across the transcripts is not simply “use this phrase” or “memorise this template”. The stronger pattern is:

1. identify what the task is really asking;
2. isolate the decisive information;
3. make the reasoning explicit;
4. choose only useful evidence/data;
5. express the idea accurately rather than artificially;
6. diagnose why an answer fails;
7. practise the exact micro-skill again.

Therefore Deep IELTS should be designed as a **Reasoning Coach + Expert Strategy System**, not just a question bank.

---

# 1. SOURCE / KNOWLEDGE GOVERNANCE

## 1.1 Three knowledge labels

Every content unit stored in Deep IELTS should have one of these provenance labels:

### A. `HUY_DERIVED`
A strategy, teaching heuristic, explanation pattern, worked example logic, or exam behaviour directly extracted from the Huy Forum transcript corpus.

### B. `DEEP_IELTS_DESIGN`
A product-learning design added by the Deep IELTS Academic Brain, e.g. spaced recall, skill-following, micro-practice, progress states, UI sequence.

### C. `OFFICIAL_VALIDATED`
A rule later checked against official IELTS / British Council / IDP / Cambridge public assessment criteria or preparation guidance.

**Important:** v1.0 is primarily built from `HUY_DERIVED` + `DEEP_IELTS_DESIGN`.

Do not silently turn a Huy heuristic into an “official IELTS rule”.

---

## 1.2 Content transformation rule

Never upload raw livestream transcript directly as learner-facing knowledge.

Use:

```text
RAW TRANSCRIPT
    ↓
REMOVE LIVESTREAM NOISE
    ↓
EXTRACT EXPERT INSIGHT
    ↓
NORMALISE TERMINOLOGY
    ↓
MAP TO SKILL
    ↓
ADD EXAMPLE
    ↓
ADD MICRO-PRACTICE
    ↓
ADD FEEDBACK RULE
    ↓
STORE AS STRATEGY CARD
```

Remove:

- greetings,
- course advertising,
- livestream logistics,
- unrelated personal chat,
- repetition caused by live teaching,
- jokes that do not carry pedagogical value.

Preserve:

- reasoning,
- method,
- explanation sequence,
- examples,
- useful wording,
- common-error diagnosis,
- test-execution logic.

---

# 2. PRODUCT LEARNING MODEL

## 2.1 Core loop

Every important strategy should follow:

```text
DISCOVER
  ↓
TIP / STRATEGY
  ↓
WHY IT WORKS
  ↓
WORKED EXAMPLE
  ↓
TRY IT
  ↓
FEEDBACK
  ↓
RECALL
  ↓
APPLY IN FULL TASK
```

A learner should almost never read a tip and immediately press “Next”.

---

## 2.2 Three learning layers

### LAYER 1 — LEARN
Understand the method.

### LAYER 2 — THINK
Use the method on a constrained micro-task.

### LAYER 3 — PERFORM
Apply it inside a realistic IELTS task under time pressure.

---

# 3. DEEP IELTS SKILL ONTOLOGY

```text
DEEP IELTS
│
├── 01 QUESTION INTELLIGENCE
│   ├── Task recognition
│   ├── Instruction parsing
│   ├── Scope detection
│   ├── Hidden assumption detection
│   ├── Absolute-language detection
│   └── Position consistency
│
├── 02 WRITING TASK 1 VISUAL REASONING
│   ├── Introduction safety
│   ├── Main-feature detection
│   ├── Overview construction
│   ├── Ranking
│   ├── Trend detection
│   ├── Comparison
│   ├── Data selection
│   ├── Grouping
│   ├── Forecast language
│   ├── Line / Bar / Pie
│   ├── Table
│   ├── Map
│   └── Process
│
├── 03 WRITING TASK 2 REASONING
│   ├── Position selection
│   ├── Idea specificity
│   ├── Mechanism building
│   ├── Cause-effect chains
│   ├── Counterargument
│   ├── Limitation
│   ├── Extreme-case test
│   ├── Stakeholder analysis
│   ├── Example construction
│   ├── Ethical vs practical reasoning
│   └── Conclusion logic
│
├── 04 READING EVIDENCE ENGINE
│   ├── Question-first reading
│   ├── Keyword anchoring
│   ├── Evidence localisation
│   ├── Local-context reading
│   ├── Paraphrase matching
│   ├── Elimination
│   ├── Inference
│   ├── Summary / main idea
│   └── Time triage
│
├── 05 LISTENING CONTROL ENGINE
│   ├── Prediction
│   ├── Answer-type anticipation
│   ├── Distractor detection
│   ├── Comparison cues
│   ├── Correction cues
│   ├── Transition recovery
│   └── Miss-one-and-move-on control
│
├── 06 SPEAKING RESPONSE ENGINE
│   ├── Direct answer
│   ├── Reason
│   ├── Example
│   ├── Extension
│   ├── Contextualisation
│   ├── Natural vocabulary
│   ├── Controlled length
│   └── Avoiding memorised answers
│
├── 07 LANGUAGE CONTROL
│   ├── Context vocabulary
│   ├── Collocations
│   ├── Functional grammar
│   ├── Tense by visual context
│   ├── Precision over complexity
│   └── Paraphrase safety
│
└── 08 EXAM EXECUTION
    ├── Time management
    ├── Easy-first triage
    ├── Error containment
    ├── Recovery after a miss
    └── Accuracy before ornament
```

---

# 4. STANDARD STRATEGY CARD FORMAT

Every tip / strategy should become a structured card:

```yaml
id: W1-OV-001
provenance: HUY_DERIVED
skill: Writing Task 1
subskill: Overview
title: Capture the main features before compressing
band_range: 6.0-9.0

hook:
  "An overview is not a race to write the shortest paragraph."

core_rule:
  "Identify and include the major trends / differences first. Optimise length only after coverage is secure."

why_it_works:
  "Forcing several patterns into one sentence can create unclear or incomplete reporting."

common_mistake:
  "The learner tries to keep the overview extremely short and drops an important trend."

worked_example:
  input: "A rises strongly; B falls; C remains stable."
  weak: "Overall, there were changes."
  better: "Overall, A increased markedly, while B declined and C remained broadly stable."

practice:
  type: "select_main_features"
  time_seconds: 45

feedback_rule:
  if_detail_selected:
    "You selected a data point rather than an overall feature."
  if_major_pattern_missing:
    "You have not yet captured the dominant trend."

recall_prompt:
  "What comes first in an overview: brevity or coverage of main features?"

related_skills:
  - W1-DATA-001
  - W1-GROUP-001
```

---

# 5. EXPERT STRATEGY LIBRARY

---

# A. WRITING TASK 1

## W1-INTRO-001 — Keep the introduction safe

**Provenance:** HUY_DERIVED

### Core rule
Paraphrase within a controlled range.

Do not transform a simple task statement into a complex sentence merely to appear advanced.

### Huy-derived reasoning
The introduction is written before the learner has fully processed the visual. Over-paraphrasing can introduce a factual or grammatical error before the real report begins.

### Common mistake

```text
Complexity ↑
Accuracy ↓
```

### Better rule

```text
Meaning preservation
    >
Vocabulary display
```

### Micro-practice
Show 3 introductions for the same chart. Ask learner to choose the most accurate paraphrase, not the most sophisticated one.

---

## W1-OV-001 — Overview = main trend + main difference

**Provenance:** HUY_DERIVED

### Core rule
The overview should capture the strongest overall patterns, not list individual values.

### Ask
- What is highest / lowest?
- What changes most?
- What remains stable?
- Does ranking change?
- Is there one dominant contrast?

### Micro-practice
Given four observations, select the two that belong in an overview.

---

## W1-OV-002 — Do not force the overview to be short

**Provenance:** HUY_DERIVED

### Core rule
Coverage first, compression second.

### Common mistake
A learner tries to fit several important trends into one overloaded sentence.

### Micro-practice
Give a chart with 3 legitimate overview features:
- learner writes max 2 sentences;
- AI checks whether each major feature is present;
- length is secondary.

---

## W1-OV-003 — No detailed numbers in overview unless genuinely necessary

**Provenance:** HUY_DERIVED

### Core rule
Overview is pattern recognition.

### Wrong
> A rose from 20% to 47%.

### Better
> A experienced the most substantial increase.

### Practice
Classify 8 statements into:
- OVERVIEW,
- BODY DETAIL.

---

## W1-DATA-001 — Compare, do not list

**Provenance:** HUY_DERIVED

### Weak
```text
A = 20
B = 30
C = 40
```

### Better
> C recorded the highest figure, followed by B, while A remained substantially lower.

### Micro-practice
Turn a 4-line data list into one comparison sentence.

---

## W1-DATA-002 — Find the ranking

**Provenance:** HUY_DERIVED

### Questions
- Who starts first?
- Who ends first?
- Is anyone overtaken?
- Is the lowest category consistently lowest?

### Useful language
- lead
- dominate
- overtake
- remain the largest
- finish in first place
- rank second
- remain negligible

### Practice
Drag categories into rank order at 3 time points.

---

## W1-DATA-003 — Data selection over data dumping

**Provenance:** HUY_DERIVED

### Core rule
You do not need to narrate every point if the significant pattern can be reported clearly.

### Selection priority
1. start,
2. end,
3. peak / trough,
4. crossover,
5. major exception.

### Micro-practice
A graph has 8 values. Learner can select only 4 to build a body paragraph.

---

## W1-TREND-001 — Separate movement from rank

**Provenance:** HUY_DERIVED

A category can:
- decrease but remain highest;
- increase but remain lowest;
- fluctuate but never change rank.

Deep IELTS should train both dimensions.

### Practice
For each series answer:
1. movement?
2. rank?

---

## W1-FORECAST-001 — Forecast data requires forecast language

**Provenance:** HUY_DERIVED

### Preferred structures
- is expected to
- is projected to
- is forecast to

### Core reasoning
A visual can contain historical values and projected values in the same graph. The learner must signal which part is forecast.

### Micro-practice
Highlight historical section and forecast section; choose tense / reporting structure for each.

---

## W1-TENSE-001 — Let the timeline determine tense

**Provenance:** HUY_DERIVED

### Typical mapping
- completed historical period → past simple;
- present state after a change → present perfect can be useful;
- projection → forecast structures.

Do not teach tense as a decorative grammar choice.

---

## W1-TABLE-001 — A table without time has comparison, not trend

**Provenance:** HUY_DERIVED

### Core rule
If all figures belong to one time point:
- compare,
- rank,
- identify gaps.

Do not invent “increase/decrease”.

### Practice
Give one-year table. Learner must block all trend verbs.

---

## W1-MAP-001 — Map is spatial transformation

**Provenance:** HUY_DERIVED

### Core rule
Do not describe every object independently.

Think:

```text
ZONE
  ↓
PAST STATE
  ↓
CHANGE
  ↓
PRESENT STATE / FUNCTION
```

### Practice
Click a zone and identify:
- unchanged,
- removed,
- replaced,
- expanded,
- converted.

---

## W1-MAP-002 — Describe by zones

**Provenance:** HUY_DERIVED

Possible scan directions:
- north → south,
- top → bottom,
- entrance → centre → rear.

### Purpose
Reduce omission.

### Practice
Learner chooses a scan route before writing.

---

## W1-MAP-003 — Delay the overview when necessary

**Provenance:** HUY_DERIVED

### Core rule
For complex maps, first identify transformations. Then write the overview.

### Why
Writing the overview immediately can cause the learner to miss a more important structural change.

### Product behaviour
UI can allow:
`Scan map first → Pin 3 main changes → Build overview`.

---

## W1-MAP-004 — Transformation verbs

**HUY_DERIVED language set**

- has been converted into
- has been replaced by
- has been expanded
- has been removed
- remained unchanged
- was located
- occupied
- contained

Practice should connect verb choice to visual transformation, not to memorisation.

---

## W1-PROCESS-001 — Process = input → transformation → output

**Provenance:** HUY_DERIVED

### Core mental model

```text
INPUT
  ↓
SEQUENCE OF STAGES
  ↓
OUTPUT
```

### Practice
Reorder scrambled process stages.

---

## W1-PROCESS-002 — Article tracking matters

**Provenance:** HUY_DERIVED

First introduction:
> a hole

Later reference:
> the hole

Use process tasks to teach reference control.

---

## W1-BODY-001 — Group before writing

**Provenance:** HUY_DERIVED

Possible grouping:
- rising vs falling,
- large vs small,
- old year vs new year,
- related categories,
- geographic zones.

No single grouping rule fits all visuals.

### Practice
Show one chart and 3 possible groupings. Ask learner which produces clearest comparison.

---

## W1-BODY-002 — Body paragraph length does not need artificial symmetry

**Provenance:** HUY_DERIVED

Focus on logic and coverage.

Do not force equal sentence counts if the data does not support equal complexity.

---

## W1-TIME-001 — Task 1 must be executable quickly

**Provenance:** HUY_DERIVED

The repeated teaching behaviour in the corpus favours:
- rapid visual analysis,
- immediate grouping,
- accurate reporting,
- avoiding unnecessary complexity.

### Deep IELTS design
Timed micro-practice should progressively reduce allowed analysis time.

---

# B. WRITING TASK 2

## W2-Q-001 — Answer the question actually asked

**Provenance:** HUY_DERIVED

### Core rule
Do not add a whole paragraph answering a question the prompt never asked.

### Practice
Show prompt + 5 possible paragraph purposes. Learner selects only relevant ones.

---

## W2-Q-002 — Detect absolute language

**Provenance:** HUY_DERIVED + DEEP_IELTS_DESIGN

Watch for:
- only,
- all,
- always,
- never,
- the best,
- the sole way.

These often create an argument opportunity.

### Practice
Highlight the word that creates the strongest assumption.

---

## W2-Q-003 — Challenge vague definitions

**Provenance:** HUY_DERIVED

Example:
> Only useful animals should be protected.

Ask:
- Useful to whom?
- Directly useful?
- Economically useful?
- Ecologically useful?
- Can usefulness be observed immediately?

### Skill name
`Definition Challenge`

---

## W2-POS-001 — Position must remain consistent

**Provenance:** HUY_DERIVED

A frequent risk:
Introduction says “partly disagree” while body logic actually rejects the proposal completely.

### Practice
Given thesis + body outline, determine whether position is consistent.

---

## W2-IDEA-001 — Break the obvious idea

**Provenance:** HUY_DERIVED

### Weak
> Cars make travel easier.

### Expand
- easier for whom?
- in what context?
- compared with what?
- what does that access change?

### Micro-practice
AI refuses vague idea until learner adds at least one mechanism.

---

## W2-IDEA-002 — Ask “useful in what situation?”

**Provenance:** HUY_DERIVED

Instead of:
> Is self-treatment beneficial?

Ask:
> In what situation can self-treatment be beneficial?

This shift generates usable boundaries and examples.

---

## W2-IDEA-003 — Specificity unlocks writing

**Provenance:** HUY_DERIVED

“Computer skills” is too broad.

Better:
- create a document,
- use a formula,
- edit a video,
- solve a specific software problem.

### Micro-practice
Turn broad noun into 3 concrete instances.

---

## W2-MECH-001 — Claim → mechanism → consequence

**Provenance:** HUY_DERIVED

### Standard reasoning chain

```text
CLAIM
  ↓
HOW?
  ↓
MECHANISM
  ↓
WHO IS AFFECTED?
  ↓
CONSEQUENCE
```

### Example
Economic growth:
```text
growth
→ higher tax revenue
→ public investment
→ services / infrastructure
→ poverty reduction
```

---

## W2-MECH-002 — Root-cause chain

**Provenance:** HUY_DERIVED

Use when a claim feels shallow.

```text
VISIBLE EFFECT
   ↑
SYSTEM / INSTITUTION
   ↑
MECHANISM
   ↑
ROOT CAUSE
```

Practice: learner must complete missing links.

---

## W2-STAKE-001 — Identify the affected stakeholder

**Provenance:** HUY_DERIVED

Ask:
- individual?
- family?
- business?
- government?
- healthcare system?
- community?
- environment?

### Important
The argument must answer impact on the population named in the prompt.

---

## W2-EX-001 — Example = situation, not random person

**Provenance:** HUY_DERIVED

Do not assume an example must be:
> “For example, John…”

A stronger example can be:
> a realistic situation in which the mechanism is visible.

### Practice
Convert personal anecdote into generalised scenario.

---

## W2-EXTREME-001 — Extreme-case test

**Provenance:** HUY_DERIVED

When an idea is hard to evaluate:

> What happens if this is taken too far?

Example:
Highly independent employees:
- may ignore procedure,
- may damage coordination,
- can become dangerous in safety-critical industries.

### Practice
Choose a policy and identify its failure mode when pushed to the extreme.

---

## W2-BAL-001 — Balanced does not mean 50/50

**Provenance:** HUY_DERIVED

A nuanced position can:
- acknowledge benefit,
- identify limitation,
- still reach a dominant judgement.

Do not mechanically split every essay into equal positive/negative weight.

---

## W2-SYS-001 — Social value ≠ market value

**Provenance:** HUY_DERIVED

Used in salary / profession discussion.

### Concept
A profession can have:
- high social necessity,
- lower monetisation capacity.

An entertainer can have:
- debatable social necessity,
- very high market reach / monetisation.

### Practice
Classify arguments as:
- social value,
- market mechanism.

---

## W2-ETH-001 — Ethical vs practical reasoning

**Provenance:** HUY_DERIVED

Example: species conservation.

Two distinct arguments:
1. ecological function;
2. moral responsibility when human activity causes the harm.

Teach learners not to mix ethical and economic claims accidentally.

---

## W2-PRIORITY-001 — Priority ≠ exclusion

**Provenance:** HUY_DERIVED

Governments may prioritise limited conservation resources.

This does not logically mean:
> unprioritised species have no value.

### Practice
Distinguish:
- “protect first”
from
- “protect only”.

---

## W2-COUNTER-001 — Test the premise before accepting it

**Provenance:** HUY_DERIVED

Before arguing:
> Doctors should earn more than celebrities.

Ask:
- Are they paid through the same reward system?
- Is income determined only by social contribution?
- What market mechanism is operating?

### Skill
`False Comparison Detection`

---

## W2-SCENARIO-001 — Negative scenario strengthens mechanism

**Provenance:** HUY_DERIVED

Instead of:
> Doctors are important.

Use:
```text
failure to retain doctors
→ staffing shortage
→ reduced care capacity
→ long-term public impact
```

### Practice
Build a “what if the system fails?” chain.

---

## W2-CONC-001 — Conclusion should resolve the reasoning

**Provenance:** HUY_DERIVED

Avoid merely duplicating the introduction.

A strong conclusion can:
- restate judgement,
- clarify condition,
- expose the wider principle.

---

# C. READING

## R-QF-001 — Question first

**Provenance:** HUY_DERIVED

Core flow:

```text
QUESTION
  ↓
DISTINCTIVE KEYWORD / PHRASE
  ↓
LOCATE
  ↓
READ LOCAL CONTEXT
  ↓
VERIFY
```

Do not default to reading the entire passage in detail before answering.

---

## R-KEY-001 — Anchor on a distinctive phrase

**Provenance:** HUY_DERIVED

A phrase such as:
> technological acceleration

is more useful for locating evidence than a generic word such as:
> people.

### Practice
Select the best anchor phrase from each question.

---

## R-EVID-001 — Locate before interpreting

**Provenance:** HUY_DERIVED

If the learner is confused by a difficult question:
1. identify likely location;
2. then interpret the smaller evidence window.

This reduces cognitive load.

---

## R-PARA-001 — Match meaning, not surface vocabulary

**Provenance:** HUY_DERIVED

The passage and option may use different wording.

Train:
- synonym,
- cause/effect equivalence,
- contrast,
- definition,
- restatement.

---

## R-ELIM-001 — Eliminate impossible options

**Provenance:** HUY_DERIVED

Useful dimensions:
- positive vs negative meaning,
- mentioned vs not mentioned,
- absolute vs qualified,
- wrong causal direction.

### Practice
Learner must explain why 3 distractors fail.

---

## R-INFER-001 — Inference is bounded by evidence

**Provenance:** HUY_DERIVED

Do not use world knowledge to invent a conclusion.

Ask:
> What conclusion follows from this local evidence?

---

## R-MAIN-001 — Abstract questions should often be delayed

**Provenance:** HUY_DERIVED

When a question asks for:
- best summary,
- broad inference,
- paragraph paraphrase,

information gathered from more local questions can help.

### Product behaviour
Allow learner to mark `RETURN LATER`.

---

## R-TIME-001 — Easy / locatable questions first

**Provenance:** HUY_DERIVED

The corpus repeatedly uses a triage logic:
- do directly locatable items first,
- postpone expensive abstract items.

This should become an explicit exam-execution drill.

---

# D. LISTENING

## L-PRED-001 — Predict answer type

**Provenance:** HUY_DERIVED

Before audio:
- number?
- address?
- noun?
- name?
- place?
- reason?

Prediction reduces search space.

---

## L-DIST-001 — The audio may mention several options

**Provenance:** HUY_DERIVED

For multiple choice:
Do not select an option because you heard its words.

Listen for:
- evaluation,
- correction,
- comparison,
- final decision.

---

## L-COMP-001 — Comparative language can reveal the answer

**Provenance:** HUY_DERIVED

Example cue:
> superior

This can distinguish “a different material” from “a better material”.

### Practice
Learner hears short clips and identifies the decisive comparison word.

---

## L-CORR-001 — Old information vs corrected information

**Provenance:** HUY_DERIVED

Numbers / prices / arrangements may be mentioned and then changed.

Deep IELTS should train:
- first value,
- correction cue,
- final value.

---

## L-TRANS-001 — Part transition is a risk zone

**Provenance:** HUY_DERIVED

The transcript specifically highlights the danger of carrying confusion from Part 2 into Part 3.

### Strategy
At section transition:
1. reset attention;
2. preview next items;
3. do not mentally continue solving the missed previous item.

---

## L-REC-001 — Missing one answer must not create a chain failure

**Provenance:** HUY_DERIVED + DEEP_IELTS_DESIGN

### Training mode
Audio continues after a forced missed item.

Score includes:
- recovery speed,
- number of subsequent items preserved.

---

# E. SPEAKING

## S-NOMEM-001 — Do not rely on memorised answers

**Provenance:** HUY_DERIVED

The corpus notes that speaking examiners are not trying to make the candidate fail; overly memorised / unnatural performance can create difficulty when follow-ups vary.

### Deep IELTS behaviour
Do not teach one “perfect answer”.
Teach adaptable response structures.

---

## S-EXP-001 — Direct answer → reason → example → extension

**Provenance:** HUY_DERIVED

Use as a flexible response engine, not a mandatory four-sentence template.

---

## S-CONTEXT-001 — Context makes vocabulary natural

**Provenance:** HUY_DERIVED

Examples from transcript include expressions such as:
- hold my attention,
- have a clear purpose,
- force myself to do something.

Teach chunks inside an answer context.

---

## S-LENGTH-001 — Good speaking can be shortened without losing logic

**Provenance:** HUY_DERIVED

The transcript demonstrates a long native-like response, then a more concise version preserving:
- clear stance,
- contrast,
- reason,
- context.

### Practice
Compress a 90-word answer to 45 words without losing core meaning.

---

## S-READ-001 — Match reading style to consequence

**Provenance:** HUY_DERIVED

A useful speaking reasoning pattern from the corpus:
- important material → read carefully;
- casual messages / ads / general news → skim;
- attention depends on the consequence of misunderstanding.

This is both a speaking content example and a model of conditional reasoning.

---

# F. VOCABULARY / LANGUAGE LEARNING

## V-CONTEXT-001 — Learn words in context, not isolation

**Provenance:** HUY_DERIVED

Recommended behaviour extracted from corpus:
- encounter word in reading,
- preserve sentence / screenshot,
- store context,
- review repeatedly.

### Deep IELTS implementation
Every saved vocabulary item should store:
- phrase,
- original sentence,
- topic,
- function,
- learner-created sentence.

---

## V-CHUNK-001 — Prefer chunks / collocations

**Provenance:** HUY_DERIVED

Examples:
- hold my attention
- clear purpose
- reduce unnecessary pressure
- access to opportunities
- life expectancy
- local economy
- public services
- food chain
- moral responsibility

Do not reduce these to isolated word translations.

---

## V-FUNCTION-001 — Vocabulary by concept

**DEEP_IELTS_DESIGN based on corpus**

Organise by reasoning function:

### Cause
- lead to
- result in
- contribute to

### Contrast
- whereas
- in contrast
- follow the opposite pattern

### Ranking
- dominate
- rank second
- overtake

### Uncertainty / forecast
- is projected to
- is expected to

### Small quantity
- negligible

This supports transfer across topics.

---

# 6. MICRO-PRACTICE SYSTEM

Every Strategy Card must have at least one micro-practice.

Prefer 30–120 seconds.

---

## TYPE 1 — RECOGNISE

Goal: identify the right pattern.

Examples:
- Which sentence belongs in an overview?
- Which phrase is the best Reading anchor?
- Which option shows a mechanism rather than a claim?

---

## TYPE 2 — DIAGNOSE

Goal: find why something is weak.

Examples:
- thesis says “partly agree”, body fully rejects;
- map paragraph misses a major replacement;
- Reading answer matches words but contradicts meaning.

---

## TYPE 3 — REPAIR

Goal: improve an existing answer.

Examples:
- convert data listing into comparison;
- turn vague idea into a mechanism;
- replace unsafe paraphrase with accurate introduction.

---

## TYPE 4 — PRODUCE

Goal: generate a response from scratch.

Examples:
- write one overview;
- generate one cause-effect chain;
- answer one Speaking Part 1 question.

---

## TYPE 5 — TIMED EXECUTION

Goal: perform strategy under exam pressure.

Examples:
- 45 sec to find Reading evidence;
- 60 sec to choose Task 1 main features;
- 90 sec to brainstorm Task 2 mechanism.

---

## TYPE 6 — RECALL

Goal: retrieve the strategy later.

Examples:
> “When a Task 1 overview becomes too long, what should you protect first: brevity or main-feature coverage?”

No source material should be visible during Recall.

---

# 7. SPACED REVIEW / FOLLOW SKILL

Learners should be able to **Follow Skill**, not merely bookmark a page.

Skill state:

```text
NEW
↓
LEARNING
↓
PRACTISING
↓
REVIEW DUE
↓
STABLE
↓
MASTERED
```

Suggested triggers:

- failed micro-practice → review soon;
- repeated error in mock test → skill becomes `WEAK`;
- 3 correct recalls across separated sessions → `STABLE`;
- successful full-task transfer → `MASTERED`.

---

# 8. ERROR → TIP LOOP

This is a key differentiator.

```text
FULL TASK
   ↓
ERROR DETECTED
   ↓
ERROR CODE
   ↓
RELATED STRATEGY CARD
   ↓
MICRO-PRACTICE
   ↓
RETRY
```

Example:

```text
Writing Task 1
Error:
"Overview contains details but misses dominant trend."

Error code:
W1-OV-MISS-MAJOR

Route:
W1-OV-001
→ 45 sec recognise task
→ 60 sec rewrite
→ retry original overview
```

---

# 9. QUESTION GENERATOR MODEL

Question generation should be **skill-targeted**, not random.

Input object:

```json
{
  "skill_id": "W1-OV-001",
  "band_target": "7.0",
  "difficulty": "medium",
  "topic": "population",
  "practice_type": "produce",
  "time_limit_sec": 60
}
```

Output should contain:

```json
{
  "question",
  "stimulus",
  "expected_features",
  "distractors",
  "feedback_rules",
  "difficulty_reason",
  "next_skill"
}
```

---

# 10. VISUAL TASK GENERATION RULES

## 10.1 Critical principle

**Do not use free-form AI-generated images as the authoritative data source for scored IELTS visual tasks.**

Reason:
- labels may mutate,
- proportions may become visually inconsistent,
- objects can disappear,
- the generated image may contradict the underlying answer key.

Use structured data as the source of truth.

---

## 10.2 Line / Bar / Pie charts

Preferred architecture:

```text
QUESTION JSON
     ↓
NUMERIC DATA
     ↓
SVG / CHART RENDERER
```

Example:

```json
{
  "type": "line",
  "series": [
    {"name": "A", "values": [20,30,45,55]},
    {"name": "B", "values": [50,47,42,35]}
  ],
  "years": [2000,2005,2010,2015]
}
```

The answer key is generated from the same JSON.

---

## 10.3 Table

Render as semantic HTML / accessible table.

No image generation required.

---

## 10.4 Map

Preferred:

```text
STRUCTURED MAP STATE
      ↓
SVG MAP RENDERER
```

Example:

```yaml
zones:
  north:
    past: garden
    present: car_park
    change: replaced
  centre:
    past: classroom_block
    present: expanded_classroom_block
    change: expanded
  south:
    past: playing_field
    present: playing_field
    change: unchanged
```

The renderer generates 2 clean IELTS-style maps.

### AI image generation
May be used only for:
- lesson illustration,
- concept explanation,
- non-scored visual storytelling.

---

## 10.5 Process diagram

Preferred:

```text
STAGE JSON
   ↓
SVG FLOW DIAGRAM
```

Example:

```json
{
  "input": "raw water",
  "stages": [
    "screening",
    "filtration",
    "treatment",
    "storage"
  ],
  "output": "drinking water"
}
```

---

# 11. VISUAL QA RULES

Before publishing any generated chart/map/process:

### Must verify
- label consistency,
- all answer-key features are visible,
- scale is not misleading,
- start/end values match source data,
- no accidental extra category,
- map old/new objects correspond correctly,
- process arrows have valid direction,
- no decorative visual that changes interpretation.

If QA fails: regenerate from structured data, not manual text correction.

---

# 12. BAND PROGRESSION MODEL

This model is a Deep IELTS design layer inspired by the corpus.

It should not be presented as an official band descriptor replacement.

---

## LEVEL A — FOUNDATION

Learner can:
- understand task type,
- identify obvious main feature,
- produce direct sentence,
- locate explicit Reading evidence.

Focus:
`accuracy + task compliance`

---

## LEVEL B — CONTROL

Learner can:
- compare,
- group data,
- develop a reason,
- distinguish evidence from distractor,
- expand Speaking answer naturally.

Focus:
`clarity + control`

---

## LEVEL C — REASONING

Learner can:
- identify hidden premise,
- explain mechanism,
- select significant features,
- infer within evidence,
- manage counterargument.

Focus:
`depth + selectivity`

---

## LEVEL D — FLEXIBILITY

Learner can:
- handle unfamiliar topics,
- choose among multiple valid structures,
- qualify claims,
- create nuanced position,
- recover quickly under pressure.

Focus:
`adaptability + precision`

---

# 13. EXPERT PLAYBOOK UX

Create one product area:

# EXPERT PLAYBOOK

Do not name it only “Tips”.

Suggested structure:

```text
Expert Playbook
│
├── Writing Task 1
│   ├── Read the visual
│   ├── Build the overview
│   ├── Compare data
│   ├── Map strategy
│   └── Process strategy
│
├── Writing Task 2
│   ├── Understand the claim
│   ├── Generate ideas
│   ├── Build mechanisms
│   ├── Counterargument
│   └── Position control
│
├── Reading
│   ├── Locate
│   ├── Match meaning
│   ├── Eliminate
│   └── Infer
│
├── Listening
│   ├── Predict
│   ├── Catch distractors
│   └── Recover
│
└── Speaking
    ├── Answer naturally
    ├── Expand
    ├── Use chunks
    └── Stay flexible
```

---

# 14. TIP CARD UI REQUIREMENT

Each card screen:

```text
┌─────────────────────────────┐
│ EXPERT STRATEGY             │
│ "Compare, don't list"       │
│ Writing Task 1              │
├─────────────────────────────┤
│ 01 RULE                     │
│ concise explanation         │
│                             │
│ 02 WHY                      │
│ why this works              │
│                             │
│ 03 SEE IT                   │
│ weak vs better example      │
│                             │
│ 04 TRY IT                   │
│ interactive micro-practice  │
│                             │
│ 05 FEEDBACK                 │
│ diagnostic response         │
│                             │
│ 06 REMEMBER                 │
│ one-line memory anchor      │
└─────────────────────────────┘
```

CTA:
- `Try another`
- `Follow this skill`
- `Apply in full task`

---

# 15. HOME PAGE LEARNING WIDGET

Recommended:

## TODAY'S STRATEGY

One 2–3 minute lesson.

Example:

> **Don't ask “Is this useful?”  
> Ask “Useful in what situation?”**

Buttons:
- Learn 30s
- Try 45s
- Save Skill

This converts the transcript knowledge into daily habit.

---

# 16. AI TUTOR BEHAVIOUR

## 16.1 Do not immediately give the answer

For reasoning skills, use guided prompts.

Example:

Student:
> Technology is useful.

Tutor:
1. Useful to whom?
2. What becomes easier?
3. Through what mechanism?
4. What changes as a result?

Only show a model sentence after learner attempts expansion.

---

## 16.2 Feedback hierarchy

Feedback should prefer:

```text
TASK ERROR
↓
REASONING ERROR
↓
EVIDENCE / DATA ERROR
↓
LANGUAGE ERROR
↓
STYLE UPGRADE
```

Do not correct fancy vocabulary while the learner is answering the wrong question.

---

## 16.3 Feedback must point to a skill

Bad:
> Your overview is weak.

Good:
> You reported two values but missed the dominant trend. Review `W1-OV-001 — Main Feature Selection`.

---

# 17. CONTENT DATA MODEL

Suggested JSON object:

```json
{
  "id": "W2-MECH-001",
  "version": 1,
  "provenance": "HUY_DERIVED",
  "skill": "writing_task_2",
  "subskill": "mechanism_building",
  "title": "Move from claim to mechanism",
  "band_range": ["6.5","9.0"],
  "difficulty": "medium",
  "hook": "A good idea is not enough until you explain how it works.",
  "core_rule": "Claim → Mechanism → Consequence",
  "why": "...",
  "common_errors": [
    "repeating the claim",
    "jumping directly to example"
  ],
  "worked_examples": [],
  "micro_practices": [],
  "feedback_rules": [],
  "recall_prompts": [],
  "related_skill_ids": [],
  "source_note": "Huy Forum transcript corpus"
}
```

---

# 18. PRACTICE DATA MODEL

```json
{
  "id": "P-W2-MECH-001-01",
  "skill_id": "W2-MECH-001",
  "type": "repair",
  "time_limit_sec": 60,
  "prompt": "Technology improves education. Improve the reasoning.",
  "expected_components": [
    "specific mechanism",
    "affected learner",
    "consequence"
  ],
  "feedback": {
    "missing_mechanism": "...",
    "too_general": "...",
    "good": "..."
  }
}
```

---

# 19. ERROR TAXONOMY — MVP

## Writing Task 1

```text
W1-INTRO-OVERPARAPHRASE
W1-OV-MISSING
W1-OV-DETAIL-ONLY
W1-OV-MISS-MAJOR
W1-DATA-LISTING
W1-DATA-WRONG-RANK
W1-TREND-INVENTED
W1-TENSE-MISMATCH
W1-MAP-OMISSION
W1-MAP-WRONG-TRANSFORMATION
W1-PROCESS-SEQUENCE
```

## Writing Task 2

```text
W2-OFF-TASK
W2-POSITION-INCONSISTENT
W2-IDEA-VAGUE
W2-MECHANISM-MISSING
W2-EXAMPLE-IRRELEVANT
W2-STAKEHOLDER-WRONG
W2-ASSUMPTION-UNTESTED
W2-COUNTER-MISSING
W2-CONCLUSION-REPEAT
```

## Reading

```text
R-NO-LOCATION
R-KEYWORD-TOO-GENERIC
R-WORD-MATCH-TRAP
R-LOCAL-EVIDENCE-IGNORED
R-INFERENCE-OVERREACH
R-ABSOLUTE-OPTION-TRAP
```

## Listening

```text
L-NO-PREDICTION
L-FIRST-MENTION-TRAP
L-CORRECTION-MISSED
L-COMPARISON-MISSED
L-TRANSITION-CARRYOVER
L-CHAIN-FAILURE
```

## Speaking

```text
S-MEMORISED
S-NO-DIRECT-ANSWER
S-NO-REASON
S-OVERLONG
S-VOCAB-FORCED
S-NO-CONTEXT
```

---

# 20. MVP CONTENT SCOPE

Do not attempt 500 tips immediately.

Recommended first release:

## Writing Task 1
12–15 strategy cards

## Writing Task 2
15–18 strategy cards

## Reading
8–10 strategy cards

## Listening
6–8 strategy cards

## Speaking
6–8 strategy cards

Total MVP:
**~50–55 high-quality cards**

Each must contain:
- 1 worked example,
- minimum 1 practice,
- feedback,
- recall prompt.

Quality > quantity.

---

# 21. FIRST MVP COLLECTION

Suggested first 30 cards:

### Writing Task 1
1. Safe Introduction
2. Overview Main Features
3. Coverage Before Brevity
4. Detail vs Overview
5. Compare Don't List
6. Ranking
7. Data Selection
8. Trend vs Rank
9. Forecast Data
10. Table Without Trend
11. Map by Zones
12. Map Transformation
13. Process Sequence

### Writing Task 2
14. Answer the Actual Question
15. Absolute Words
16. Challenge Definitions
17. Position Consistency
18. Break Obvious Idea
19. Situation-Based Thinking
20. Specificity
21. Mechanism Chain
22. Stakeholder
23. Extreme Case
24. Priority vs Exclusion

### Reading
25. Question First
26. Anchor Phrase
27. Locate Before Interpret
28. Meaning Not Word Match
29. Elimination
30. Delay Abstract Questions

Then expand Listening and Speaking in v1.1.

---

# 22. QUALITY GATES

A Strategy Card cannot be published unless:

### Academic
- core rule is clear;
- not presented as official unless validated;
- no contradiction between rule and example;
- example actually demonstrates the skill.

### Learning design
- has an action, not only explanation;
- practice targets the exact skill;
- feedback explains the cause of error;
- recall prompt exists.

### Product
- card ID is stable;
- skill relation is defined;
- difficulty set;
- visual dependency set;
- answer / expected feature is machine-readable.

---

# 23. DO NOT DO

Antigravity should NOT:

1. invent new IELTS academic rules without data approval;
2. convert every transcript sentence into a tip;
3. create decorative AI charts and score them;
4. show model answer immediately before learner attempts;
5. use one generic feedback:
   > “Good job / Try again”;
6. treat vocabulary difficulty as band score;
7. create a “1000 tips” feed without skill hierarchy;
8. let AI change chart/map facts during rendering;
9. label Huy heuristics as official IELTS requirements;
10. overwrite Academic Brain content without versioning.

---

# 24. ANTIGRAVITY IMPLEMENTATION CONTRACT

Antigravity receives this document as **academic specification**.

Its responsibilities:

### Build
- Expert Playbook page;
- Strategy Card component;
- Try It component;
- Follow Skill;
- Skill state;
- Review queue;
- feedback routing;
- visual renderer;
- data storage;
- progress UI.

### Do not reinterpret
- skill definitions;
- academic rule;
- expected answer logic;
- error taxonomy.

If UI implementation requires changing academic meaning:
**flag it; do not silently rewrite it.**

---

# 25. SUGGESTED FILE / DATA STRUCTURE IN PROJECT

```text
/content
  /academic
    skill-tree.json
    strategies.json
    error-taxonomy.json
    feedback-rules.json

  /practice
    writing-task1.json
    writing-task2.json
    reading.json
    listening.json
    speaking.json

  /visual-spec
    charts.schema.json
    maps.schema.json
    processes.schema.json

  /curriculum
    progression.json

/docs
  DEEP_IELTS_MASTER_SKILL_EXPERT_TIP_LIBRARY_v1.md
```

---

# 26. ANTIGRAVITY INGESTION PROMPT

Use the following instruction with Antigravity together with this Markdown file:

```text
You are implementing the academic content system for the existing Deep IELTS project.

SOURCE OF TRUTH:
DEEP_IELTS_MASTER_SKILL_EXPERT_TIP_LIBRARY_v1.md

IMPORTANT ROLE BOUNDARY:
The Markdown file is the Academic Brain.
Do not invent, rewrite, merge, or reinterpret academic rules unless required for data normalisation.
Your role is product implementation.

GOAL:
Turn the Expert Strategy / Skill framework into a reusable learning system inside the existing Deep IELTS web application.

IMPLEMENT FIRST:
1. Expert Playbook
2. Strategy Card
3. Micro Practice
4. Feedback linked to skill IDs
5. Follow Skill
6. My Skills / Review Due
7. Today's Strategy widget

DATA:
Create structured JSON/TypeScript data from the Markdown specification.
Preserve stable Skill IDs.

VISUAL TASKS:
- line/bar/pie → structured data + chart renderer
- table → semantic HTML
- map → structured state + SVG renderer
- process → stage data + SVG flow renderer
Do not use generative AI images as the scoring source of truth.

UX LOOP:
Tip → Why → Example → Try It → Feedback → Recall → Apply.

AI TUTOR:
Do not immediately reveal model answers.
Use guided questions first.
Feedback must reference a Skill ID / Error Code.

GUARDRAIL:
Do not claim a Huy-derived strategy is an official IELTS rule.
Keep provenance metadata.

DELIVER:
- implementation
- sample seeded Strategy Cards
- sample micro-practices
- working progress state
- no regression to existing Deep IELTS features.
```

---

# 27. NEXT ACADEMIC EXPANSION

After Antigravity successfully implements this v1 architecture, the Academic Brain should provide:

## v1.1
- full Listening card library;
- full Speaking card library;
- additional Task 1 types;
- more Huy-derived strategies.

## v1.2
- Band progression rules;
- skill prerequisites;
- difficulty matrix.

## v1.3
- large practice library;
- generator templates;
- mock-test error routing.

## v2.0
- personalised learning path;
- automatic weak-skill detection;
- adaptive practice generation.

---

# 28. FINAL PRODUCT PRINCIPLE

The distinctive value of Deep IELTS should be:

> **Do not merely tell the learner what the answer is.  
> Teach the learner what decision to make next.**

The Huy Forum corpus should therefore become:

```text
EXPERT EXPERIENCE
       ↓
STRATEGY
       ↓
SKILL
       ↓
PRACTICE
       ↓
FEEDBACK
       ↓
RECALL
       ↓
TRANSFER TO TEST
```

That is the Academic Brain to be implemented by Antigravity.

---

# END — DEEP IELTS MASTER SKILL & EXPERT TIP LIBRARY v1.0
