# UI verification

Read before completing substantial implementation or redesign work.

## Automated checks

- Run the existing typecheck, lint, test, and production build commands.
- Check that imports resolve and no component dependency is duplicated unnecessarily.
- Treat new console errors, hydration warnings, and accessibility warnings as failures.

## Rendered checks

- Inspect at a narrow mobile viewport and a representative desktop viewport.
- Check overflow, clipping, sticky/fixed elements, long labels, empty data, and loading transitions.
- Navigate all interactive controls with the keyboard; verify logical order and visible focus.
- Confirm icon-only controls have accessible names and form controls have labels.
- Check contrast in light and dark themes when both exist.
- Enable reduced motion and confirm the interface remains understandable.
- If sound was added, verify the app remains fully understandable while muted, no cue plays before user interaction, volume is restrained, and a persisted enable/disable preference is available where sound is recurring.
- Exercise destructive, error, disabled, loading, empty, and success states that the task introduced.

Do not declare visual completion from source inspection alone when a runnable preview is available.
