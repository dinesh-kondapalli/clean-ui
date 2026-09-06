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
- For a substantial page or app, confirm three or more distinct rendered components from the primary library when its catalog had three suitable choices. If fewer were suitable, name the catalog gaps rather than silently substituting custom equivalents.
- Inspect the actual routes containing each component.
- Verify components were adapted to shared tokens and do not look like pasted demos.
- List any secondary library components and the capability each adds.

If no qualifying component is rendered, the work is incomplete regardless of typecheck, build, or screenshot quality.

## Rendered checks

- Inspect at a narrow mobile viewport and a representative desktop viewport.
- Check overflow, clipping, sticky/fixed elements, long labels, empty data, and loading transitions.
- Navigate all interactive controls with the keyboard; verify logical order and visible focus.
- Confirm icon-only controls have accessible names and form controls have labels.
- Check contrast in light and dark themes when both exist.
- Enable reduced motion and confirm the interface remains understandable.
- If sound was added, verify the app remains fully understandable while muted, no cue plays before user interaction, volume is restrained, and a persisted enable/disable preference is available where sound is recurring.
- Exercise destructive, error, disabled, loading, empty, and success states that the task introduced.
- Compare the final render against the visual thesis and inspiration synthesis. Reject a result that is merely tidy, generic, or indistinguishable from a default admin template.

Do not declare visual completion from source inspection alone when a runnable preview is available.
