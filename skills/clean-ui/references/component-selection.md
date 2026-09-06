# Component selection and installation

Read this when choosing or installing external components.

## Selection order

First choose one primary component system for primitives and visual consistency. Then choose one primary icon family. Existing project systems count as selections and should normally remain authoritative. A specialist component may come from another source only when its capability is genuinely missing; restyle it into the primary system.

Candidate roles:

1. Existing project components or shadcn/Radix: primary system when already established.
2. OpenSourceUI: tactile controls, editorial elements, widgets, notifications, mockups, and unusual interaction patterns.
3. beUI / Beautiful UI registry: crafted primitives such as metallic buttons, file trees, expandable controls, and AI-native patterns.
4. Unlumen: restrained animated navigation, lists, image effects, and backgrounds. Confirm that the selected item is Free; never copy Pro source without access.
5. Beautiful UI's showcase: reference for AI-native streaming, approvals, tool activity, prompt bars, agent status, context cards, and diffs. Install only registry items whose terms and command are known.
6. Morphin: animated dashboard elements with an official installer.
7. Skiper UI: distinctive marketing or showcase interactions.
8. Lucide or Lucide Animated: default icon family when it matches the product; use animated variants only when motion communicates state.
9. Custom components: when no catalog option fits without heavy restyling or dependency cost.

Score candidates by functional fit, visual consistency, accessibility, dependency and runtime cost, responsiveness, motion appropriateness, license, and maintenance burden. Novelty alone is not a reason to select a component.

## Installation adapters

Use the repository's package manager unless the user names one.

```bash
bunx opensourceui add tactile-3d
bunx --bun shadcn add @beui/button-metallic
npx @morphin/cli add <component-name>
bunx --bun shadcn add @skiper-ui/<component-name>
bunx --bun shadcn add @lucide-animated/<icon-name>
```

For OpenSourceUI, prefer the local CLI at `packages/opensourceui-cli`. It detects an existing shadcn target or defaults to `src/components/ui` / `components/ui`, creates the directory, installs missing dependencies, and refuses overwrite unless explicitly requested.

After any installer runs, inspect its changes. Adapt imports and theme tokens, remove demo content, and confirm it did not rewrite unrelated project configuration.

Do not install candidate libraries merely because they are listed here. Record the chosen primary component system, icon family, any specialist, and a one-line product-specific reason for each.

## Provenance

Keep license notices required by copied source. Record the source URL and license in registry metadata. If distribution rights are unclear, link to the source for human selection rather than copying it into the registry.
