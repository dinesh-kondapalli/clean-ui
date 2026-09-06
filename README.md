# Clean UI

`clean-ui` is an agent skill for designing and implementing distinctive React and Next.js interfaces with curated, editable components.

It analyzes the product before styling, researches relevant references, establishes a product-specific visual thesis, and then installs and visibly uses components from at least one approved library:

- [OpenSourceUI](https://opensourceui.in/components)
- [Unlumen](https://ui.unlumen.com/components)
- [Morphin](https://morphin.dev/components/)
- Skiper UI (`@skiper-ui/<component-name>` registry)
- [Beautiful UI / beUI](https://www.beautifului.dev/)

Lucide Animated may supply icons, Transitions.dev may refine meaningful motion, Recent.design supplies inspiration, and Cuelume may supply restrained interaction sounds. These supporting sources do not replace the mandatory component-library adoption rule.

## Install the skill

```bash
npx skills add dinesh-kondapalli/clean-ui --skill clean-ui -g
```

Restart or open a new agent session after installation if the current provider does not refresh its skill list automatically.

## Invoke it

From a React or Next.js project, ask your agent explicitly:

```text
Use $clean-ui to analyze this entire product and redesign the interface.
Select a primary approved component library, visibly use as many suitable
components from it as the product needs, and verify the result in the browser.
```

The skill's agent instructions live in [`skills/clean-ui/SKILL.md`](skills/clean-ui/SKILL.md). Most installers intentionally copy only the skill directory, so the repository README may not appear inside `.agents/skills/clean-ui`; `SKILL.md` is the installed skill's entry point.

## OpenSourceUI CLI

This repository also contains the `opensourceui` Bun CLI, which copies editable components into an existing shadcn UI directory or into `src/components/ui` / `components/ui` when no target exists.

```bash
opensourceui list
opensourceui add tactile-3d
opensourceui tactile-3d-icon
```

The CLI is used by the skill when an OpenSourceUI component is selected and the command is available. Other approved libraries use their documented installers or manual source-copy workflows.

## Quality contract

For a new UI or substantial redesign, the skill requires at least one approved library component to be installed, imported, and rendered in a real product route. It targets three or more suitable components from the primary library for substantial work, while allowing multiple libraries when they remain visually cohesive. Installed but unused components do not count.
