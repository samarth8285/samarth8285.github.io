---
name: Samarth Bhatt — Data Engineer Portfolio
description: Proof-as-structure — claims pinned to a force diagram, not asserted as marketing copy.
colors:
  concrete-ground: "#e8e5df"
  concrete-raised: "#dedad2"
  carbon-ink: "#16140f"
  carbon-ink-secondary: "#5b564b"
  taut-red: "#b3261a"
  ash-slack: "#a6a197"
  hairline-stroke: "#cbc6bc"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 3rem + 3vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  lede:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  mono-value:
    fontFamily: "Space Mono, monospace"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)"
    fontWeight: 700
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.5rem"
  4: "2.5rem"
  5: "4rem"
  6: "6rem"
  7: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.concrete-ground}"
    typography: "{typography.body}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.taut-red}"
    textColor: "{colors.concrete-ground}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.carbon-ink-secondary}"
    typography: "{typography.label}"
    padding: "0.85rem 0"
  button-ghost-hover:
    textColor: "{colors.taut-red}"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.carbon-ink-secondary}"
    typography: "{typography.label}"
---

# Design System: Samarth Bhatt — Data Engineer Portfolio

## Overview

**Creative North Star: "The Engineering Force Diagram"**

The site reads as a tensegrity structure, not a résumé page: every claim is a labeled node pinned to the page by a leader line, and the line itself is the proof. A taut red cord marks a claim that is load-bearing and verified; an ash-gray slack cord marks one that hasn't been tested yet (the current, just-started role). Nothing is asserted as marketing copy — it's annotated like an engineering drawing, on a matte concrete-gray ground with carbon-black linework. The world is flat and structural: no gradients, no icon tiles, no drop shadows. Depth comes from stroke weight and hairline dividers, not elevation.

The build confirms this world holds under real content: the same dot-plus-polyline leader-line mechanism carries the hero metrics, every experience entry, and the single project's branch connector, with no second animation idiom introduced anywhere on the page.

**Key Characteristics:**
- Flat, matte, stroke-based — no shadows, no gradients, no icon glyphs.
- One reveal mechanism (fade/rise + dash-draw leader line) reused everywhere, never re-invented per section.
- Taut red is a semantic truth marker, not a decorative accent.
- Monospace carries every label and measured value; Archivo carries every voice statement.

## Colors

A two-neutral, one-accent, one-semantic-exception palette: pale concrete ground, carbon-black ink, and a single red reserved for marking proof.

### Primary
- **Taut Red** (`#b3261a`): the load-bearing-claim marker. Used on leader-line dots/strokes for every *proven* member (hero metrics, completed roles, the project branch), on CTA hover, on the focus ring, and on the status readout text. It is a semantic signal, not a brand flourish.

### Neutral
- **Concrete Ground** (`#e8e5df`): page background.
- **Concrete Raised** (`#dedad2`): defined as a raised/secondary surface tone; not yet called out by any component on this surface — reserve for a future raised panel rather than introducing a new neutral.
- **Carbon Ink** (`#16140f`): primary text, heading color, primary-button fill, the bottom "ground" bar under the contact section.
- **Carbon Ink Secondary** (`#5b564b`): body copy (lede), secondary nav links, bullet text, tag text, meta lines — anything subordinate to a heading or a value.
- **Hairline Stroke** (`#cbc6bc`): section dividers, the vertical spine rule, dashed sub-dividers, header bottom border.

### Named Rules
**The Taut/Slack Rule.** Red marks a claim that is proven and complete; ash-gray (`#a6a197`) marks a claim that exists but hasn't been load-tested yet (only the in-progress current role uses it today). Never use red decoratively and never use ash-gray for a completed claim — the color *is* the verification status.

**The One Accent Rule.** Red appears only on leader-line members, CTA hover/focus, and the status readout — never as a background fill, section divider, or body-text color.

## Typography

**Display Font:** Archivo (400/500/600/700/800), with a sans-serif fallback
**Label/Mono Font:** Space Mono (400/700), with a monospace fallback

**Character:** Archivo carries every voice statement (name, headings, body, CTAs) with a tight, confident grotesque weight; Space Mono carries every measured value and label in uppercase caps, so the page reads like instrument callouts annotating the Archivo structure underneath.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 3rem + 3vw, 5.5rem)`, line-height 0.98, letter-spacing -0.02em): the h1 name only.
- **Headline** (700, `clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)`, line-height 1.05, letter-spacing -0.02em): section titles (h2).
- **Title** (600, 1.25rem; project title scales `clamp(1.375rem, 1.1rem + 1vw, 1.875rem)`): job role / project name (h3).
- **Body / Lede** (400, 1.0625rem base, lede `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)`, color carbon-ink-secondary): paragraph copy, capped at 70ch (`--measure`) generally and 54ch for lede intros.
- **Label** (400, 0.75rem, letter-spacing 0.02em, uppercase, Space Mono, color carbon-ink-secondary): metric labels, nav links, status readout, skill-group headings, cert dates row heading, education line.
- **Mono Value** (700, `clamp(1.5rem, 1.1rem + 1.4vw, 2rem)`, Space Mono, tabular numerals): hero metric values and any number that must line up.

### Named Rules
**The Measured-Value Rule.** Any number presented as a verified outcome ($170K, 100%, 500+, 40%) is set in Space Mono with `font-variant-numeric: tabular-nums`, never in Archivo — the typeface switch itself signals "this is an instrument reading."

## Layout

A single-column, left-aligned document with one container (`.wrap`, max-width 76rem, inline padding 1.5rem under 640px / 2.5rem at 640px+) and one breakpoint (640px) governing nav collapse and container padding — no intermediate tablet breakpoint exists. Sections stack vertically with generous block padding (6rem, `--space-6`) and are separated by a single hairline rule (`1px solid var(--stroke)`) rather than background-color changes or shadows. The hero gets extra top padding (9rem, `--space-7`) to establish the opening "structure" before the first divider.

Spacing runs on a custom seven-step rem scale (0.5 / 1 / 1.5 / 2.5 / 4 / 6 / 9rem) rather than a strict power-of-two system; it is used consistently for block rhythm (section padding, spine-segment gaps) and inline gaps (CTA row, tag row).

## Elevation & Depth

Flat by design: no `box-shadow` appears anywhere in the build. Depth and hierarchy are conveyed structurally instead — stroke weight (1px hairlines vs. 1.5px leader-line strokes), a dashed hairline to mark a sub-boundary within a section (the hero metrics' top rule, the certifications block), and the vertical spine itself, which reads as a load-bearing line rather than a shadowed card stack.

### Named Rules
**The No-Shadow Rule.** Depth comes from line weight and stroke color (ink vs. accent vs. slack vs. stroke), never from a shadow, blur, or gradient. A future component that reaches for `box-shadow` has left the world.

## Shapes

Square-edged by default — no `border-radius` is used on any content element (the one `border-radius: 999px` in the codebase is the browser scrollbar thumb, not a UI token). The sole exception is the primary CTA, which is chamfered with a `clip-path` notch (10px cut corners, diagonal top-left and bottom-right) — a drafting-table "cut corner" silhouette reserved for the strongest, most stable call-to-action on the page. Ghost/secondary links stay unclipped, flat text links. Structural lines (the spine, the branch connector, leader-line ticks) are thin SVG strokes (1–1.5px), never boxes, cards, or filled shapes.

## Components

### Buttons
- **Shape:** primary is chamfered (`clip-path` 10px corner notches); ghost is a plain underline-free text link, no shape treatment.
- **Primary:** carbon-ink background, concrete-ground text, 600 weight, 0.85rem/1.5rem padding.
- **Hover / Focus:** primary hover shifts background to taut-red and lifts 2px (`translateY(-2px)`, `ease-out-expo` 0.2s); focus-visible everywhere gets a 2px taut-red outline, 3px offset.
- **Ghost:** transparent background, carbon-ink-secondary text, Space Mono, hover turns taut-red with no lift (text-only emphasis, since it's a secondary action).

### Chips (Tech Tags)
- **Style:** bracketed Space Mono text (`[ Label ]`), carbon-ink-secondary, 0.8125rem, no background or border — a label, not a filled pill.
- **State:** static/display-only; no selected or interactive state exists today.

### Navigation
- **Style:** Space Mono uppercase label links (`.mono-label`), carbon-ink-secondary default, carbon-ink on hover, no underline.
- **Mobile treatment:** below 640px, the link list collapses behind a two-bar hamburger disclosure (`.nav-toggle`) that morphs into an X on open (`aria-expanded` driven); the open menu drops as a bordered panel anchored to the header, closes on link click, outside interaction is not required since Escape and link-choice both close it.

### Leader-Line Spine (signature component)
The one custom mechanism the whole page is built from: a small SVG (circle node + straight/angled polyline) sits beside a content block, with the line's `stroke-dashoffset` animated from its full measured length to 0 on scroll-into-view (measured via `getTotalLength()`, not a guessed value). Used identically in three places — the hero metrics list, each experience entry, and the single project's branch connector (there the polyline bends at an angle instead of running straight). Taut red = proven; ash-gray = unresolved. This is the one authored entrance animation (`.reveal` + `.reveal-line`) on the page; nothing else gets a bespoke transition, and the whole system is disabled under `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** reuse the leader-line spine (dot + dash-draw polyline) for any new list of verifiable claims; don't invent a second "connector" visual.
- **Do** set every measured value and label in Space Mono with tabular numerals; keep Archivo for voice and headings only.
- **Do** separate sections with a single 1px hairline rule, not a background-color or shadow change.
- **Do** reserve the chamfered `clip-path` cut-corner treatment for the single strongest call-to-action per view.

### Don't:
- **Don't** use taut red for anything that isn't a verified, completed claim — it is a status marker, not a decorative accent.
- **Don't** add `box-shadow`, blur, or gradient anywhere; this world conveys depth through stroke weight only.
- **Don't** introduce `border-radius` on content elements; the world is square-edged except the one chamfered CTA shape.
- **Don't** add icon glyphs, icon fonts, or decorative SVG imagery (e.g. literal pipe/pipeline icons) — the only SVG vocabulary is thin structural line + node.
