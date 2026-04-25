# Product Guidelines

## Tone & Voice

### Personality
Warm, empathetic, and reassuring. The copy acknowledges the weight of a major home purchase and
speaks like a trusted advisor — knowledgeable, calm, and clearly on the buyer's side.

### Principles
- **Empathize first.** Acknowledge the stress of buying a new home before presenting the solution.
- **Teach, don't sell.** Educate the reader on what they don't know; let understanding drive the
  booking decision.
- **Confidence without pressure.** Be direct about the value without urgency tactics or FOMO.
- **Human over corporate.** Write like a person talking to a person, not a brand talking at a
  consumer.

### Examples
- ✓ "Your builder means well — but their inspector works for them, not for you."
- ✓ "We've seen what hides behind drywall. You deserve to see it too."
- ✗ "ACT NOW — limited inspection slots available!"
- ✗ "Our proprietary ISO/IEC 17025-accredited multi-phase thermal inspection protocol..."

---

## Visual Guidelines

### Personality
Clean, professional, and calm. White space is used generously. Borders are subtle (0.5px). The
design earns trust by not competing with the content.

### Layout
- Desktop: multi-column grids (2-col, 3-col) for comparison and bundle cards
- Mobile: single-column stacked layout; no horizontal scrolling
- Sections alternate between white and light secondary backgrounds to create rhythm without noise

### Color Usage
| Role | Color | Usage |
|---|---|---|
| HomeKey positive | `#085041` / `#E1F5EE` | Trust signals, HomeKey comparison card, bundle discount |
| Builder contrast | `#791F1F` / `#FCEBEB` | Builder's inspector comparison card |
| Bundle stage badges | `#26215C` / `#AFA9EC` | Stage number circles (1, 2, 3) |
| Primary text | System dark | Headlines, body |
| Secondary text | System muted | Subtitles, captions, labels |

### Typography
- Headlines: medium weight (500), tight line-height (1.15–1.3)
- Body: regular weight, relaxed line-height (1.6)
- Section labels: 11px, uppercase, letter-spacing 1px, tertiary color — used to introduce each section
- No all-caps headlines; section labels are the only uppercase element

### Spacing
- Section padding: 48px vertical on desktop, 24px on mobile
- Card padding: 20px desktop, 14–16px mobile
- Consistent 28px horizontal gutters on desktop, 16px on mobile

---

## Calls to Action

### Style
Action-forward and low-pressure. CTAs invite the reader to take the next step; they never push or
create artificial urgency.

### Primary CTA Pattern
`[Verb] [object] →`
- "Reserve your bundle →"
- "Get bundle pricing →"
- "Book inspection"

### Secondary CTA Pattern
Outlined or ghost style, softer language:
- "Watch 90-sec overview"
- "View all communities →"

### Placement Rules
- One primary CTA per section maximum
- Hero always has both a primary and a secondary CTA
- Mobile: primary CTA is full-width; sticky bottom bar appears on scroll

---

## Copy Guidelines

### Technical Terminology
Plain language comes first; credentials follow as proof, not as the lead.

- ✓ "An independent check before your walls close up (ASHI ACI certified)"
- ✓ "Lab-tested for mold using an ISO-accredited facility"
- ✗ "ISO/IEC 17025-accredited multi-parameter mycological analysis"

Acronyms (ACI, ASHI, NRS, BBB) are permitted in trust bars, credential lists, and footnotes
without explanation — context makes them credible shorthand there.

### Numbers & Proof Points
Always prefer concrete numbers over vague claims:
- ✓ "4.9/5 across 500+ reviews"
- ✓ "$18K of framing defects caught at pre-drywall"
- ✗ "Highly rated by satisfied customers"

### Testimonials
- Use first initial + last name + city (e.g., "— M. Rodriguez, Ashburn")
- Include at least one Spanish-language testimonial displayed in its original Spanish on both EN
  and ES versions
- Feature the most dollar-specific testimonial as the pull quote

---

## Bilingual Strategy

### Structure
The Spanish version of the page lives at `/new-construction/es`. The English version lives at
`/new-construction`. The EN|ES toggle in the navigation navigates between these two URLs.

### Content
- All sections are fully translated — no partial translations or inline bilingual mixing
- The Spanish version is a true translation, not a machine-translated copy; tone and warmth must
  be preserved
- The Spanish testimonial from L. Martínez appears in Spanish on both versions (it is authentic
  proof of bilingual service)

### SEO
- Each URL has its own `<html lang>` attribute (`en` / `es`)
- Each URL has a canonical tag pointing to itself and an `hreflang` alternate pointing to the other
- Meta titles and descriptions are fully translated

---

## Imagery

### Style
Photography preferred over illustration. Images should feel real and documentary, not stock-photo
polished.

### Subjects
- Inspector with thermal camera at framing/rough-in stage
- Close-up of thermal imaging screen showing a defect
- Inspector walking through a new-build site with a homeowner
- Avoid: generic handshake photos, hard hats on office workers, CGI home renderings

### Alt Text
All images must have descriptive alt text in both EN and ES versions.
