# Component selection and installation

Read this when choosing or installing external components.

## Mandatory adoption contract

Every new UI or substantial redesign must use at least one qualifying library from this list:

- OpenSourceUI
- Unlumen
- Morphin
- Skiper UI
- beUI (first priority) and Beautiful UI

The existing project primitives, shadcn/Radix, custom code, Lucide or Lucide Animated, Transitions.dev, Cuelume, and Recent.design do not satisfy the component-library requirement by themselves.

Before implementation, analyze existing routes for a redesign or proposed routes for a new app. Identify navigation depth, recurring actions, data relationships, and desktop/mobile regions. Produce a component placement plan and briefly show the meaningful choices to the user:

```text
Region / route | User task | Exact component + source URL | Fit / adaptation | Decision
```

Inspect beUI first: start at https://beui.dev/llms.txt and https://beui.dev/r, then read the documentation and source for components that match the planned regions. Make beUI the primary library when compatible. Check structural components before decorative controls: application navigation, sidebar, content organization, forms, data presentation, overlays, and feedback. Consult the other approved catalogs for roles beUI cannot suitably cover, recording a concrete reason such as missing behavior, incompatible dependencies, or an unsuitable interaction. Do not skip beUI because another library is more familiar. If discovery fails, try its public documentation and registry endpoints, then report the limitation honestly.

Reuse suitable beUI components consistently wherever the same role recurs. Do not use a component quota. At least one approved source must still be visibly used, but a component only earns its place when it supports an existing user task, fits its region and density, and works with real product state. Do not invent a feature or add an ornamental widget to demonstrate library usage. A metallic button is an available variant, not the default for every action.

Multiple qualifying libraries are allowed. Use a secondary library when it provides a strong product-specific interaction or a role the primary catalog cannot cover. Normalize typography, color, spacing, radii, and motion so the libraries read as one system.

If no qualifying library is technically compatible, legally usable, or installable after reasonable attempts, do not silently fall back to a zero-library UI. Explain the concrete blocker and leave the library requirement visibly unresolved.

## Approved catalogs

- beUI, first priority: <https://beui.dev/>; discovery: <https://beui.dev/llms.txt>; registry: <https://beui.dev/r>. Inspect detail at `/r/{slug}` and source at `/r/{slug}/raw`; use exact identifiers returned by the live documentation.
- OpenSourceUI: <https://opensourceui.in/components>
- Unlumen: <https://ui.unlumen.com/components>
- Morphin: <https://morphin.dev/components/>
- Beautiful UI, a separate supplied catalog: <https://www.beautifului.dev/>. Do not substitute this URL for beui.dev or assume the catalogs are interchangeable.
- Skiper UI: use the `@skiper-ui/<component-name>` shadcn registry namespace and inspect the component source before installation.

Open the live catalogs during selection because names, availability, install commands, dependencies, and free/paid status can change. Do not rely only on examples in this file.

## Candidate roles

Candidate roles:

1. OpenSourceUI: tactile controls, editorial elements, widgets, notifications, mockups, tables, inputs, galleries, and unusual interaction patterns.
2. beUI: first evaluate navigation and structural components, then appropriate controls and feedback; discover current options from its index rather than assuming it only provides decorative buttons.
3. Unlumen: animated navigation, lists, image effects, backgrounds, icons, marketing sections, and motion-driven controls. Confirm that the selected item is Free; never copy Pro source without access.
4. Morphin: animated dashboard elements and status/data components with an official installer.
5. Skiper UI: distinctive marketing, navigation, media, and showcase interactions.
6. Existing project components or shadcn/Radix: supporting primitives and infrastructure; preserve them when useful but do not count them as the qualifying curated library.
7. Lucide or Lucide Animated: select one primary icon family; use animated variants when motion communicates state.
8. Custom components: fill genuine gaps after catalog review, rather than recreating an available approved component.

Score candidates by functional fit, visual consistency, accessibility, dependency and runtime cost, responsiveness, motion appropriateness, license, and maintenance burden. Novelty alone is not a reason to select a component.

## Sidebar and shell selection

When a sidebar is required, inspect beUI's Animated Sidebar (`https://beui.dev/components/motion/animated-sidebar.md`) first. Also compare Bounce Sidebar (`https://beui.dev/components/motion/bounce-sidebar.md`) for simple navigation and AI Sidebar (`https://beui.dev/components/agents/ai-sidebar.md`) when the product actually organizes projects or files. Verify current availability and installation instructions; do not guess registry identifiers from display names.

Choose based on route hierarchy, label length, nested groups, active states, collapse behavior, and mobile navigation. A compact icon rail is appropriate only when destinations remain understandable through accessible names and hover/focus labels; use expanded labels when the navigation needs them. Do not replace a necessary hierarchy with unlabeled icons to save space.

Adapt the selected shell with real routes, grouped destinations, deliberate widths, consistent row heights and icon sizes, and separated account/utility actions. Keep the active treatment restrained. Check expanded, collapsed, nested, and mobile states where supported. Preserve useful library behavior while tuning tokens; do not stack heavy shadows, oversized active tiles, and competing borders on a small rail.

Build and inspect the shell with one representative content region before filling every page. Fix spacing, alignment, hierarchy, and responsive behavior at this stage so defects are not repeated throughout the app.

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
