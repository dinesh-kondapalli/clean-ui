# Minimal interaction sound with Cuelume

Read when sound could provide meaningful feedback. Cuelume is an ESM-only, SSR-safe, MIT-licensed Web Audio package with no runtime dependencies. It synthesizes cues and supports declarative attributes plus `bind()`, `play()`, `setVolume()`, and `setEnabled()`.

## Decision gate

Use sound only when it reinforces a meaningful event such as a tactile press, mode toggle, successful action, recoverable error, user-started loading, or completed result. Omit it for content-heavy reading, routine enterprise data entry, accessibility-sensitive contexts, or when the product tone calls for silence. Sound must never carry information by itself.

Install with the project's package manager:

```bash
bun add cuelume
```

Call `bind()` once in client startup; it is idempotent and handles later-rendered elements. Prefer a few intentional cues over attributes on every control:

```tsx
import { bind, setEnabled, setVolume } from "cuelume";

bind();
setVolume(0.25);
setEnabled(savedSoundPreference);
```

Use `data-cuelume-press` with `data-cuelume-release` for a tactile control, `data-cuelume-toggle` for a real toggle, or `play("success")` / `play("error")` after the corresponding application result. Do not play arrival audio on the initial page load; browsers block audio before interaction.

Persist the app's sound preference because Cuelume does not persist it. Recurring UI sound requires an obvious mute setting. Default to a restrained volume, preserve visible feedback, and verify keyboard and touch behavior while muted.
