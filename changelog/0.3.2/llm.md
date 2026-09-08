## Borders follow `--border-size`

Do not use bare `border`, `border-t/b/r/l`, `border-x/y`, or `divide-x/y` width
utilities in Sivir components. Every bordered surface must resolve its width
from the token:

```svelte
class="rounded-[var(--radius-lg)] border-[length:var(--border-size)] border-border"
```

Side and divider widths take the same treatment
(`border-b-[length:var(--border-size)]`,
`divide-y-[length:var(--border-size)]`). Menu separators and frame chrome
already use `var(--border-size)` in `ui.css`. Fixed decorative widths (slider
and color-picker thumbs, scrollbar thumbs, the drag-and-drop overlay, text
carets) and focus rings intentionally stay fixed.

## Overlay movement tokens

`panelIn`/`panelOut` read `--motion-menu-y`, `--motion-menu-scale-start`, and
`--motion-menu-blur`, falling back to the legacy `--motion-panel-y` and
`--motion-panel-scale-start` overrides. `dialogIn`/`dialogOut` read
`--motion-modal-y`, `--motion-modal-scale-start`, and `--motion-modal-blur`.
Both paths read the shared `--motion-opacity-start` (0 means fade from
transparent). Dialog exits travel upward by the modal offset and shrink a
 quarter as far as enters grow, so one start-scale token drives both
 directions. Defaults preserve the previous look; only dialog exits shift
 slightly (4px up instead of 3px).

 ## Composer is a panel, not a flat card

 Composer.Root renders `sivir-modal-frame` with the dense
 `--sivir-modal-inset: calc(var(--spacing) * 0.5)` Popover/Sheet use, not a
 hand-built bordered card. Composer.Input carries `sivir-inset-surface` (the
 card fill) while Composer.Toolbar defaults to `variant="chrome"` in the
 frame outside the well, the same split as Modal footer and Code Block
 header. Do not rebuild the frame with border utilities.

 `variant="inset"` merges the toolbar into the input's well instead of
 giving it a second surface: the toolbar takes `sivir-inset-surface` with
 `rounded-t-none` and a negative top margin equal to
 `--sivir-modal-inset` to swallow the frame gap, and it flips an internal
 context flag so the input drops its bottom radius (`rounded-b-none`). The
 two read as one card. Do not wrap Input and Toolbar in a hand-rolled
 surface div, and do not copy the merge with ad-hoc negative margins
 elsewhere -- use the variant.

 Composer.Submit drives the shared Button `loading` state with
 `loadingLabel="Sending"` (overridable) while pending, so the Send-to-sending
 swap crossfades on Button's stacked faces. Do not render a custom spinner
 branch for the pending action or disable the button while pending; Button
  stays focusable and refuses activation itself. Example triggers size to
  content (`w-auto` with a `max-w-*` cap), never a fixed `w-*`.

## Dropdown Menu has no invert

Do not pass `inverted` to `DropdownMenu.Root`. The prop is gone. Menu chrome
reads `--color-panel`, `--color-border`, and `--color-foreground` from the
active theme. To get a dark menu on a light page, invert those tokens on a
wrapper or in the theme — do not reintroduce a hardcoded `hsl` palette on
the menu root.

## Syntax colors are theme tokens

Code Block and File Diff no longer paint GitHub hexes onto the component.
`--color-code-comment` through `--color-code-meta` live on the theme, with
`--code-block-token-*` and `--file-diff-token-*` aliasing them. Recolor by
setting those variables on `:root` or a wrapper. `theme="custom"` still
skips the `hljs-*` selectors so a consumer stylesheet can paint instead.
Do not put `dark:[--code-block-token-*:#…]` on the component.

Image rings, switch knobs, and similar chrome use
`color-mix(..., var(--color-foreground), …)` or `--color-on-primary`. Do
not use `black` / `white` Tailwind palette classes for those edges.
