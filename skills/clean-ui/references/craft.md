# Craft checks for real product interfaces

Read during implementation and visual review. These checks supplement beUI-first component selection. They do not require installing additional skills or changing the product's stack.

## Composition and continuity

Identify the main task in each view and make its entry point easy to find. Choose how secondary information supports it; do not give every panel the same prominence. For redesigns, inspect the current design documentation and the components actually used by the affected routes. Preserve intentional differences between task types. Fix shared styles at their owning component when appropriate, then check its other consumers.

Implement one representative shell and task before propagating it. If the result feels wrong, revisit proportions, navigation, grouping, and reading order before adding visual effects. Keep the visual thesis and component placement notes available throughout implementation so later pages follow the same decisions.

## Typography and content

- Define readable roles for headings, values, labels, and supporting copy. Check the rendered font has loaded before judging spacing.
- Align comparable numeric values and use tabular numerals where changing digits would disturb alignment. Keep units and time periods understandable.
- Check long names, large amounts, negative values, missing values, and translated-length labels. Never solve collisions by shrinking all text.
- Allow text containers to shrink or wrap deliberately. Truncate only when the full value remains available through an accessible interaction.
- Use specific action labels and helpful empty/error messages that explain the next available step. Avoid decorative technical jargon and meaningless sample metrics.

## Surfaces and control details

- Check icon and text alignment by eye as well as CSS geometry. Keep icon size and stroke treatment consistent within a role.
- For inset rounded surfaces, relate the inner curve to the outer curve and intervening padding; inspect the result at actual size.
- Use restrained elevation for layers and dividers for grouping. Avoid adding another ring or shadow to every nested element.
- Compare sibling controls together: heights, padding, baselines, focus treatment, and disabled appearance must form a consistent family.

## Responsive and interaction stress cases

- Test a narrow phone, an intermediate width where panels compete, and a wide desktop. Also check enlarged text or browser zoom. Recompose secondary panels when the primary task becomes cramped.
- Reserve space for asynchronously loaded media and content. Loading states should preserve useful geometry without flashing or shifting nearby controls.
- Test keyboard entry, activation, dismissal, and focus return for dialogs and menus. Do not let hidden collapsed navigation remain focusable.
- Ensure touch actions do not depend on hover. Give small visible icons sufficiently generous hit areas without overlapping adjacent actions.
- Connect controls to actual state. Test repeat clicks, pending operations, failed requests, and recovery; do not present a decorative button as a working feature.

## Motion under real use

Test rapid switching and interrupted open/close sequences. The final state should follow the latest input. Keep routine actions prompt; avoid repeatedly staging the whole page. Transition only intended properties. Check that animation does not move focus, hide feedback, or delay access to content. Inspect expensive blur and large animated surfaces if scrolling stutters. Reduced motion must retain clear state changes.

## Research provenance

This reference synthesizes applicable ideas from [UI Skills](https://www.ui-skills.com/), especially [better-ui](https://www.ui-skills.com/skills/jakubkrehel/better-ui), [interface-design](https://www.ui-skills.com/skills/dammyjay93/interface-design), and [improve-ui](https://www.ui-skills.com/skills/ibelick/improve-ui). It keeps clean-ui's implementation scope and beUI priority; external audit-only workflows and fixed aesthetic recipes are not inherited.
