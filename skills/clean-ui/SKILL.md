---
name: clean-ui
description: Design, build, or substantially refine polished React and Next.js interfaces. Use when creating pages, dashboards, application shells, or component systems where visual direction, component selection, responsive behavior, accessibility, and restrained motion matter. Do not use for narrow logic-only changes or trivial CSS fixes.
---

# Clean UI

Create a cohesive, product-specific interface, not a collage of attractive components. Preserve the product's requirements and existing brand; treat external libraries and inspiration as source material, never as a template to copy.

## Workflow

1. Analyze the entire product before choosing aesthetics: product docs, every user-facing route, shared layouts, navigation, core workflows, data density, existing components, states, styling, assets, dependencies, and technical constraints. Run `scripts/inspect-project.ts [project-root]` when Bun is available, then inspect the important files it identifies. Do not infer the whole product from the current page alone.
2. Summarize the product model internally: subject, audience, primary jobs, route families, repeated interaction patterns, brand signals, constraints, and gaps. Infer low-risk details; ask only when a missing product decision would materially change the result.
3. For a new design or substantial redesign, research relevant references on Recent.design. Read [references/inspiration.md](references/inspiration.md). Extract principles from several relevant examples; never reproduce a reference's layout, copy, branding, or distinctive signature.
4. Define a compact visual thesis grounded in this product: typography, palette, density, layout logic, radius, elevation, motion character, and one defensible signature idea. Read [references/design-system.md](references/design-system.md). Critique the thesis for generic or previously repeated patterns before building.
5. Map the product to semantic component roles. Choose one primary component library and one primary icon family for consistency; existing project systems count as a choice. Add a specialist library only for a capability the primary system cannot supply. Read [references/component-selection.md](references/component-selection.md).
6. Decide whether auditory feedback adds meaningful confirmation or orientation. When it does, use Cuelume sparingly according to [references/sound.md](references/sound.md); otherwise keep the interface silent.
7. Implement complete interaction states: default, hover, focus, pressed, disabled, loading, empty, error, and success where applicable.
8. Verify the rendered product across its affected routes at mobile and desktop sizes. Read [references/verification.md](references/verification.md) before finalizing substantial UI work.

## Non-negotiables

- Never silently overwrite a modified component. Inspect, adapt, or ask before replacement.
- Do not mix unrelated visual languages merely to use more libraries. One dominant system plus a restrained accent pattern is usually enough.
- Do not automatically reuse the same library, palette, hero composition, typography pairing, or signature interaction from prior work. Let product fit determine each choice and document the reason.
- Avoid generic dashboard output: repetitive floating cards, arbitrary gradients, excessive pills, and ornamental charts without product meaning.
- Use semantic HTML, visible keyboard focus, adequate contrast, descriptive control labels, and reduced-motion behavior.
- Keep copied components editable in the project and adapt demo content, imports, tokens, and states to the application.
- Verify license and free/paid status before copying source. Never bypass authentication or copy Pro components without access.
- Do not add animation unless it explains hierarchy, continuity, causality, or feedback.
- Do not add sound as decoration, autoplay it on first load, or make it the only signal for a state.

## Motion

When meaningful state changes would benefit from motion and the Transitions.dev skill is installed, use it as a separate optional skill: `transitions apply` for a new interaction, `transitions review` for an audit, `transitions refine` for timing cleanup, and `transitions polish` for a final pass.

Do not block the UI task if that skill is unavailable. Use restrained CSS transitions and `prefers-reduced-motion` as the fallback.

## Completion

Run the project's typecheck, lint, tests, and production build when available. Inspect browser output, console errors, overflow, keyboard flow, focus, loading/empty/error states, and reduced motion. Report material design choices, installed components, verification performed, and any remaining limitation.
