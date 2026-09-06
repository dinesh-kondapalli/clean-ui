# Design system decisions

Read this for a new interface or substantial redesign.

Write a one-sentence visual thesis tied to the product and audience. Spend distinctiveness in one memorable, product-derived signature and keep the surrounding system disciplined. Then establish only the tokens needed to make implementation consistent:

- Typography: one expressive or branded face and one highly readable UI/body face at most; define a deliberate type scale and line lengths.
- Color: neutral canvas, readable foreground, semantic feedback colors, and one primary accent. Add a second accent only when it encodes meaning.
- Spacing: choose a base rhythm and use tighter spacing within components than between groups.
- Shape: use a small radius scale. Avoid turning every surface and control into a pill.
- Elevation: borders and tonal contrast first; shadows should communicate layering.
- Motion: choose a restrained timing/easing family and use it consistently.

Match density to the task. Operational tools may be compact; marketing and onboarding surfaces can breathe. Make hierarchy visible through alignment, typography, grouping, and whitespace before adding containers.

Use cards only when a bounded surface has semantic meaning. Do not wrap every section in a card. Charts must answer a product question and include readable labels or summaries.

At least one approved library component should carry or reinforce the signature idea. Adapt it rather than reproducing its catalog demo. The surrounding composition, content, typography, and interaction should make it feel native to this product.

Responsive design is recomposition, not uniform shrinking. Preserve the primary task, collapse secondary controls deliberately, prevent horizontal overflow, and keep touch targets usable.

Before implementation, run a repetition critique: could the same thesis plausibly have been generated for an unrelated SaaS, portfolio, or AI app? If yes, replace the generic palette, type pairing, layout device, or signature with something derived from the product's own objects, language, or workflows. Avoid defaulting to cream-and-serif, near-black-and-acid, or broadsheet treatments unless the subject specifically justifies them.

Also reject the generic enterprise-workbench fallback: a white canvas, thin gray borders, evenly divided panels, blue primary accents, and interchangeable icon tiles are not a complete visual direction. If that structure is functionally appropriate, add a product-derived spatial model, typographic voice, material treatment, or interaction signature strong enough that the interface could not be mistaken for another dashboard.
