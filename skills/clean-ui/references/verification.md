# UI verification

Read before completing substantial implementation or redesign work.

## Automated checks

- Run the existing typecheck, lint, test, and production build commands.
- Check that imports resolve and no component dependency is duplicated unnecessarily.
- Treat new console errors, hydration warnings, and accessibility warnings as failures.

## Component-library adoption gate

This gate is mandatory for a new UI or substantial redesign:

- Name at least one qualifying source: OpenSourceUI, Unlumen, Morphin, Skiper UI, or Beautiful UI/beUI.
- Confirm at least one component from that source is imported and rendered. A package installation or copied unused file fails the gate.
- Confirm beui.dev was inspected first and selections correspond to the component placement plan. Explain any fallback to another catalog with a specific fit or compatibility reason.
- For each rendered component, confirm its purpose, location, real state, and visual treatment fit the surrounding region. Arbitrary placement fails even if the component is imported and functional. Remove decorative additions that exist only to increase library usage.
- If there is a sidebar, confirm beUI sidebar candidates were reviewed and test the selected navigation with real routes, long labels, active/nested states, keyboard focus, collapse, and mobile behavior as applicable.
- Inspect the actual routes containing each component.
- Verify components were adapted to shared tokens and do not look like pasted demos.
- List any secondary library components and the capability each adds.

If no qualifying component is rendered, the work is incomplete regardless of typecheck, build, or screenshot quality.

## Rendered checks

- Apply [craft.md](craft.md) to the affected routes and their relevant states.
- Apply [rejected-ui.md](rejected-ui.md), including its sidebar and whole-page review. Visually compare the bundled negative example with the implemented shell and final layout; record any repeated problems and recheck corrections. Library provenance alone does not pass this check.
- Inspect at a narrow mobile viewport and a representative desktop viewport.
- Check overflow, clipping, sticky/fixed elements, long labels, empty data, and loading transitions.
- Navigate all interactive controls with the keyboard; verify logical order and visible focus.
- Confirm icon-only controls have accessible names and form controls have labels.
- Check contrast in light and dark themes when both exist.
- Enable reduced motion and confirm the interface remains understandable.
- If sound was added, verify the app remains fully understandable while muted, no cue plays before user interaction, volume is restrained, and a persisted enable/disable preference is available where sound is recurring.
- Exercise destructive, error, disabled, loading, empty, and success states that the task introduced.
- Compare the final render against the visual thesis and inspiration synthesis. Reject a result that is merely tidy, generic, or indistinguishable from a default admin template.
- Review the whole page and close views of navigation, toolbars, and dense content. Fix misaligned baselines, crowded label/value pairs, oversized controls, inconsistent radii, excessive shadows, competing active states, and accidental empty space. A recolor or extra animation does not resolve these composition defects.
- After correcting visual defects, inspect the render again. Report any unavailable browser verification; never claim the interface is visually polished based on imports or a passing build alone.

Do not declare visual completion from source inspection alone when a runnable preview is available.

## Evidence and correction loop

Capture a baseline for redesigns when runnable, then inspect the implemented shell and final affected views. Keep a short working record of concrete defects: route, viewport/state, observed problem, owning component, correction, and recheck result. Distinguish a visible problem from a stylistic preference; do not rewrite unrelated surfaces to satisfy an invented rule.

Fix issues in order of impact: blocked or misleading interaction, overflow and unreadable content, layout hierarchy, inconsistent components, then small decorative details. Re-render after corrections and check shared consumers for regressions. Repeatedly checking unchanged code is not visual evidence.

Completion requires no known unresolved defects in the affected primary workflow, readable responsive layouts, appropriate component placement, and a final visual recheck. If a defect cannot be resolved within scope, report its exact location and impact. If rendering is unavailable after reasonable setup attempts, report visual quality as unverified and list what was checked in source. Do not substitute a self-assigned quality score, a component count, or a claim of perfection for observed results.
