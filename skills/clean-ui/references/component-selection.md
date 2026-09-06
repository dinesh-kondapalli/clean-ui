# Component selection and installation

Read this when choosing or installing external components.

## Mandatory adoption contract

Every new UI or substantial redesign must use at least one qualifying library from this list:

- OpenSourceUI
- Unlumen
- Morphin
- Skiper UI
- Beautiful UI / beUI

The existing project primitives, shadcn/Radix, custom code, Lucide or Lucide Animated, Transitions.dev, Cuelume, and Recent.design do not satisfy the component-library requirement by themselves.

Before implementation, produce an internal component coverage plan that maps visible roles to catalog candidates:

```text
Role                 Candidate             Source          Decision
Primary action       Metallic Button       beUI            use
Status summary       Animated Status       Morphin         use
Navigation control   existing tabs         project system  retain
Empty state          no fitting candidate  custom          build
```

Browse all approved catalogs at the category level, then inspect the relevant component pages. Select a primary curated library whose catalog covers the largest number of meaningful roles for this product. For a substantial page or app, use at least three distinct components from that library when three suitable components exist. For a narrow component task, one qualifying component is sufficient.

Maximize useful coverage, not raw count: reuse the chosen library for matching buttons, navigation, feedback, tables, cards, loaders, menus, inputs, and signature interactions instead of rebuilding equivalent components from scratch. Do not install irrelevant components merely to reach a number.

Multiple qualifying libraries are allowed. Use a secondary library when it provides a strong product-specific interaction or a role the primary catalog cannot cover. Normalize typography, color, spacing, radii, and motion so the libraries read as one system.

If no qualifying library is technically compatible, legally usable, or installable after reasonable attempts, do not silently fall back to a zero-library UI. Explain the concrete blocker and leave the library requirement visibly unresolved.

## Approved catalogs

- OpenSourceUI: <https://opensourceui.in/components>
- Unlumen: <https://ui.unlumen.com/components>
- Morphin: <https://morphin.dev/components/>
- Beautiful UI / beUI: <https://www.beautifului.dev/>
- Skiper UI: use the `@skiper-ui/<component-name>` shadcn registry namespace and inspect the component source before installation.

Open the live catalogs during selection because names, availability, install commands, dependencies, and free/paid status can change. Do not rely only on examples in this file.

## Candidate roles

Candidate roles:

1. OpenSourceUI: tactile controls, editorial elements, widgets, notifications, mockups, tables, inputs, galleries, and unusual interaction patterns.
2. beUI / Beautiful UI registry: crafted primitives such as metallic buttons, file trees, expandable controls, and AI-native patterns.
3. Unlumen: animated navigation, lists, image effects, backgrounds, icons, marketing sections, and motion-driven controls. Confirm that the selected item is Free; never copy Pro source without access.
4. Morphin: animated dashboard elements and status/data components with an official installer.
5. Skiper UI: distinctive marketing, navigation, media, and showcase interactions.
6. Existing project components or shadcn/Radix: supporting primitives and infrastructure; preserve them when useful but do not count them as the qualifying curated library.
7. Lucide or Lucide Animated: select one primary icon family; use animated variants when motion communicates state.
8. Custom components: fill genuine gaps after catalog review, rather than recreating an available approved component.

Score candidates by functional fit, visual consistency, accessibility, dependency and runtime cost, responsiveness, motion appropriateness, license, and maintenance burden. Novelty alone is not a reason to select a component.

## Installation adapters

Use the repository's package manager unless the user names one.

```bash
opensourceui add tactile-3d
bunx --bun shadcn add @beui/button-metallic
npx @morphin/cli add <component-name>
bunx --bun shadcn add @skiper-ui/<component-name>
bunx --bun shadcn add @lucide-animated/<icon-name>
```

For OpenSourceUI, use the globally installed `opensourceui` command when available, or run the local CLI from `packages/opensourceui-cli`. Do not assume a public `bunx opensourceui` package exists. The CLI detects an existing shadcn target or defaults to `src/components/ui` / `components/ui`, creates the directory, installs missing dependencies, and refuses overwrite unless explicitly requested. If the CLI is unavailable outside this repository, copy an eligible component manually with its required dependencies and provenance, or select another qualifying catalog.

After any installer runs, inspect its changes. Adapt imports and theme tokens, remove demo content, and confirm it did not rewrite unrelated project configuration.

Record the chosen primary curated library, primary icon family, any secondary libraries, and a one-line product-specific reason for each. Make at least one library component part of the main workflow or signature visual moment; do not hide all library usage in an incidental settings page.

## Proof of real usage

After implementation, verify all of the following:

1. The installer or copy step created source files or package dependencies from a qualifying library.
2. Product files import the selected components.
3. The components render in a real route with product content, not an unused demo.
4. The rendered UI visibly benefits from the component behavior or aesthetic.
5. The final report names each component and its route or parent feature.

An installation command alone is not evidence of adoption.

## Provenance

Keep license notices required by copied source. Record the source URL and license in registry metadata. If distribution rights are unclear, link to the source for human selection rather than copying it into the registry.
