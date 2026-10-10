# Soreti Wellness & Spa — Design System

Soreti Wellness & Spa is a luxury day spa founded in Addis Ababa in 2016 by Creative Director Atklit Lemma. It runs four locations — Wollo Sefer (Africa Ave / Bole Rd), Hyatt Regency Addis Ababa, Ramada by Wyndham Addis Ababa, and UN Crescent Road, Nairobi — and describes itself as 90% women-led. Treatments blend Ethiopian and wider-African rituals (coffee, black cumin, Nug oil, moringa, Rhassoul clay, Beldi soap, Dilka) with modern spa technology: massage journeys, hammam/Moroccan baths, Vichy hydrotherapy, facials, hair, nails, lashes, waxing, packages and gift vouchers.

"Soreti" is an Oromo name meaning abundance, the eldest daughter, one who brings people together. The brand positions itself as **"A sanctuary for the senses"** and "Where culture meets calm."

## Surfaces
- **Website** — soretispa.com (WordPress/Elementor). Home, About, Services (long priced menu), Explore, Booking, Branches (ET / KE). Recreated in `ui_kits/website/`.
- **Social** — Instagram `@soreti_spa`, Facebook `SoretiWellnessandSpa`. The guideline has a "Social media design" section but shows only tone examples, no layouts.
- **Physical** — signage, packaging, robes/textiles, in-room branding (pattern guidance only).

## Sources
- `uploads/Soreti Wellness and Spa Brand Guideline February 2026.pdf` — 12-page guideline (cover says "Brand Guideline 2025"). Foundation, personality & voice, logo usage, typography, colours, pattern. All logo/motif SVGs in `assets/` were extracted from its vector artwork.
- `uploads/ElMessiri-*.ttf`, `uploads/NeueMontreal-*.otf` — font files supplied by the user (copied to `fonts/`).
- https://www.instagram.com/soreti_spa/ — not accessible from here; not reviewed.
- https://soretispa.com/home, /services, /about — read for copy, IA and service names (text only; no imagery copied).

> **Font note.** The PDF names *Playfair Display* (headings) and *Helvetica Neue* (body). The user supplied *El Messiri* and *Neue Montreal*; this system uses the supplied files as primary and keeps Playfair/Helvetica as fallbacks in the stacks. Confirm which pairing is current.

---

## Content fundamentals

Voice is **calm, respectful and informed**. The guideline asks for "poetic simplicity, welcoming phrases, and sensory language that mirrors the spa experience" and avoids anything casual, cold or salesy.

**Personality:** Elegant · Warm · Knowledgeable · Intentional · Empowering.

**Person.** Soreti speaks as **"we"** to the guest as **"you"**. Warm first person plural: "we're so glad you're here", "let's make this right".

**On-brand examples (verbatim from guideline):**
- Welcome — "Welcome to Soreti, we're so glad you're here."
- Booking confirmation — "Your moment of calm is confirmed. We look forward to welcoming you at your scheduled time."
- Rebooking — "Would you like us to reserve a follow-up to continue your care?"
- Apology — "We're truly sorry for the inconvenience; let's make this right."
- Social — "Where culture meets calm. Soreti at Ramada opens May 23, 2025."
- Website sign-off — "This moment is yours. Carefully chosen. Carefully offered."

**Do:** soft, descriptive language that evokes calm and care; greet warmly; explain treatments with confidence and respect; stay consistent across verbal/written/visual.
**Don't:** technical or harsh terms; robotic, rushed or overly casual phrasing; overpromising; slang or abbreviations in formal copy.

**Naming treatments.** Services carry evocative, title-cased names that pair a ritual with an ingredient or feeling: "Swedish Harmony", "Volcanic Hot Stone Harmony", "Chia Bliss Body Cocoon", "Crown & Shoulder Repose", "Sole Sanctuary — Foot Retreat", "Soreti Veil Facial". The *Soreti Signature* prefix marks house rituals. Descriptions follow in parentheses or a short sentence naming the ingredient and benefit: "(Coffee oil stimulates circulation, firms skin, and fights fatigue.)"

**Casing.** Section labels and eyebrows are UPPERCASE ("OUR VISION", "MASSAGE JOURNEYS", "HAMMAM JOURNEYS"). Treatment names are Title Case. Body is sentence case. Prices: `3,400 ETB`, durations `60 MIN`, joined with `|` or `·`.

**Punctuation.** Em-dashes join a name to its descriptor ("Deep Tissue Release — Chia Oil"). Middots separate lists of ingredients/steps. Quotes are curly.

**Emoji.** Not used in brand copy. (The live site uses 🇰🇪 🇪🇹 flags in the branch menu only.)

---

## Visual foundations

**Colour.** Three named colours with 6-step tint ramps (100/80/60/40/20/10% feel):
- **Royal Violet `#4d2177`** — the foundation. Dominant backgrounds, key brand moments, headers, uniforms. Full-violet pages alternate with white pages in the guideline.
- **Heritage Gold `#B78F2E`** — warmth and prestige: CTAs, hairline borders, highlights, headings on violet.
- **Terra Ember `#b13d25`** — seasonal emphasis only. Use sparingly.
- The lotus mark uses its own marigold `#d39b29` + ember `#b34830`; reserve these for the logo/pattern.
- Body text is near-black `#0d0d0d` on white; white on violet.
- The guideline text cites "Deep Purple #4e1942" for the logo, but the actual logo artwork is `#4d2177`. We use `#4d2177`.

**Type.** Display: El Messiri (supplied), set UPPERCASE for section titles, violet on white or gold on violet, tight 1.05–1.15 leading, stacked over two lines ("BRAND / FOUNDATION"). Subheads: display face, uppercase, ~18px, semibold. Body: Neue Montreal, left-aligned, generous line-height (1.6+), "softly spaced, calm, never rushed". Italic is used for quoted on-brand language.

**Spacing & layout.** Wide margins (~9% each side), two- or three-column text grids with large gutters, lots of air. Avoid tight or cluttered layouts. Content left-aligned; the logo is the only centred element on covers.

**Backgrounds.** Solid white or solid Royal Violet. No gradients. Optional lotus pattern tone-on-tone (violet on light violet tint, gold on deep violet) at 5–15% opacity, generously spaced. Photography (from the website) is warm, natural-light spa imagery — skin, oils, flowers, stone.

**Signature motifs** (all in `assets/motifs/`):
- A **1px Heritage Gold arc** sweeping across the top of the page like a hanging garland.
- A **violet leaf/petal** tucked into the bottom-left corner.
- A **fanned lotus corner** (marigold + ember petals) bleeding off the bottom-right on covers.

**Borders.** 1px Heritage Gold hairlines frame white cards (logo cards on p.5). Fields use a light violet border.

**Corner radii.** Small and soft: 2px swatches, 6px fields/don't-cards, 10px cards, 16px app-icon tile. Pills for buttons.

**Cards.** White, 1px gold hairline, 10px radius, no shadow. On violet: solid violet tile with no border. Shadows are reserved for floating layers (dialogs, toasts) and are violet-tinted and soft.

**Shadows / transparency / blur.** The brand is flat. No drop shadows on logo or type (explicit don't). Transparency only for the pattern watermark and modal scrims (violet at ~55%). No glassmorphism.

**Motion.** Slow and calm: 280–600ms, ease-out, fades and gentle 4–8px rises. No bounces or springs.

**Hover / press.** Hover: violet darkens one step (`--violet-800`), gold buttons darken to `--gold-800`, text links turn gold. Press: one more step darker, no scale change. Focus: 2px gold ring offset 2px.

**Logo rules.** Primary vertical lockup in Royal Violet on white, or white wordmark (lotus keeps its colours) on violet. Min 120px wide digital / 1.25in print. Clear space = height of the "S". Never recolour, stretch, outline, shadow, blur or rearrange. Lotus symbol alone: favicon, watermark, social avatar; min 50px.

---

## Iconography

The guideline defines **no icon set**. The only brand symbol is the **lotus** (`assets/logo/soreti-lotus.svg`), used as favicon, watermark, social avatar and pattern unit. The live website uses Font Awesome brand glyphs for Facebook/Instagram via Elementor.

**Substitution (flagged):** this system uses **Lucide** from CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) at **1.25–1.5px stroke** to echo the thin wordmark strokes. Render through the `Icon` component (`components/icons/`). Keep icons small, violet or gold, never filled, never in coloured circles. No emoji, no unicode-as-icon except `·` and `|` as separators.

---

## Index

- `styles.css` — global entry (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — El Messiri (400–700), Neue Montreal (300–700 + italics)
- `assets/logo/` — `soreti-logo-primary.svg`, `soreti-logo-white.svg`, `soreti-lotus.svg`, `soreti-app-icon.svg`
- `assets/motifs/` — `gold-arc.svg`, `leaf-violet.svg`, `corner-lotus.svg`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/`
  - `brand/` — Logo, LotusPattern, SectionHeading
  - `icons/` — Icon
  - `actions/` — Button, IconButton
  - `forms/` — Input, Select, Checkbox, Radio, Switch
  - `display/` — Card, Badge, Tag, PriceRow
  - `navigation/` — Tabs
  - `feedback/` — Dialog, Toast, Tooltip
- `ui_kits/website/` — soretispa.com recreation (Home, Services, About, Booking)
- `SKILL.md` — agent skill entry point

### Intentional additions
No source defines a component inventory, so a standard set was authored. Brand-specific additions:
- **Icon** — wraps the Lucide substitute so stroke weight stays consistent.
- **LotusPattern** — the guideline's repeat-pattern rules as a component.
- **SectionHeading** — the stacked uppercase title + eyebrow seen on every guideline page.
- **PriceRow** — the treatment / duration / price line that dominates the Services menu.
