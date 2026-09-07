---
name: clean-ui
description: Design, build, or substantially refine distinctive React and Next.js interfaces using at least one approved curated component library. Use when creating pages, dashboards, application shells, or component systems where product analysis, library adoption, visual direction, responsive behavior, accessibility, and restrained motion matter. Do not use for narrow logic-only changes or trivial CSS fixes.
---

# Clean UI

Create a cohesive, product-specific interface, not a collage of attractive components. Preserve the product's requirements and existing brand; treat external libraries and inspiration as source material, never as a template to copy.

## Workflow

1. Analyze the entire product before choosing aesthetics: product docs, every user-facing route, shared layouts, navigation, core workflows, data density, existing components, states, styling, assets, dependencies, and technical constraints. Run `scripts/inspect-project.ts [project-root]` when Bun is available, then inspect the important files it identifies. Do not infer the whole product from the current page alone.
2. Summarize the product model internally: subject, audience, primary jobs, route families, repeated interaction patterns, brand signals, constraints, and gaps. Infer low-risk details; ask only when a missing product decision would materially change the result.
3. For a new design or substantial redesign, research relevant references on Recent.design. Read [references/inspiration.md](references/inspiration.md). Extract principles from several relevant examples; never reproduce a reference's layout, copy, branding, or distinctive signature.
4. Define a compact visual thesis grounded in this product: typography, palette, density, layout logic, radius, elevation, motion character, and one defensible signature idea. Read [references/design-system.md](references/design-system.md) and [references/rejected-ui.md](references/rejected-ui.md); open its bundled screenshot with image viewing when available. Treat it as a user-rejected composition, never an inspiration reference. Critique the thesis for generic or previously repeated patterns before building.
5. Before implementation, map the proposed interface by region and user task, starting with the application shell and navigation. Read [references/component-selection.md](references/component-selection.md). Inspect beui.dev first, including its sidebar options whenever the interface needs a sidebar. Use suitable beUI components as the primary system; consult other approved catalogs for documented gaps. Share a concise component placement plan with source links, intended regions, and reasons before building, then proceed without requiring approval. Compose the layout around these choices rather than inserting library components after a custom layout is finished.
6. Decide whether auditory feedback adds meaningful confirmation or orientation. When it does, use Cuelume sparingly according to [references/sound.md](references/sound.md); otherwise keep the interface silent.
7. Implement complete interaction states: default, hover, focus, pressed, disabled, loading, empty, error, and success where applicable. Read [references/craft.md](references/craft.md) for typography, layout stress cases, interaction details, and motion checks. Apply these while building the representative shell, then consistently across affected pages.
8. Verify the rendered product across its affected routes at mobile and desktop sizes. Read [references/verification.md](references/verification.md) before finalizing substantial UI work.

## Non-negotiables

- Never silently overwrite a modified component. Inspect, adapt, or ask before replacement.
- At least one of OpenSourceUI, Unlumen, Morphin, Skiper UI, or Beautiful UI/beUI must be installed and visibly rendered in every new UI or substantial redesign. Base shadcn/Radix components, an icon library, Transitions.dev, Cuelume, and Recent.design do not count toward this requirement.
- beUI at https://beui.dev is the first priority for every new UI or substantial redesign. Reuse its suitable components across real product roles. Component counts are not a quality target; every choice must have an appropriate location, semantic purpose, and working behavior.
- Multiple approved component libraries are allowed. Keep a single visual thesis and restyle secondary-library components so the result remains cohesive.
- Preserve beUI priority across projects while varying composition, typography, density, and interactions according to the product. Do not rotate libraries merely for novelty or repeat the same catalog demo layout.
- Avoid generic dashboard output: repetitive floating cards, arbitrary gradients, excessive pills, and ornamental charts without product meaning.
- Use semantic HTML, visible keyboard focus, adequate contrast, descriptive control labels, and reduced-motion behavior.
- Keep copied components editable in the project and adapt demo content, imports, tokens, and states to the application.
- Installed-but-unused components do not count. Each selected component must be imported and rendered in a real route or product flow.
- Verify license and free/paid status before copying source. Never bypass authentication or copy Pro components without access.
- Do not add animation unless it explains hierarchy, continuity, causality, or feedback.
- Do not add sound as decoration, autoplay it on first load, or make it the only signal for a state.

## Motion

When meaningful state changes would benefit from motion and the Transitions.dev skill is installed, use it as a separate optional skill: `transitions apply` for a new interaction, `transitions review` for an audit, `transitions refine` for timing cleanup, and `transitions polish` for a final pass.

Do not block the UI task if that skill is unavailable. Use restrained CSS transitions and `prefers-reduced-motion` as the fallback.

## Completion

Do not declare completion until the component-library adoption gate in [references/verification.md](references/verification.md) passes. Run the project's typecheck, lint, tests, and production build when available. Inspect browser output, console errors, overflow, keyboard flow, focus, loading/empty/error states, and reduced motion. Report the chosen libraries, every installed and rendered curated component, where each is used, material design choices, verification performed, and any remaining limitation.
