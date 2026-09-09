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

## Question inset cards and step content

Question.Root accepts `variant="inset"` to use the shared Card inset surface and footer chrome. The omitted variant remains `default`, rendered as a plain Card. Do not wrap an inset Question in another Card to recreate its frame. Question.Actions uses Card.Footer; keep it outside Question.Content so navigation stays in the footer instead of moving with the answers. Actions remains inside the form even when rendered in inset chrome.

Wrap the title, optional description, and options or input in Question.Content. It is a static fieldset, so Question.Title remains a legend for the answer group. Content has no built-in navigation animation and does not own step state. Store answers per step in the parent and change the index from existing Submit and Cancel controls. When using Cancel for Back, call `event.preventDefault()` to suppress the Root onCancel callback.

Keep Actions outside Question.Content. Changing Root's answer type still resets its value; for mixed-type flows, key the Root per question and restore each saved answer from parent state.

## Tag Input required and labelling

`required` on `TagInput.Root` is enforced by `setCustomValidity` on the visible
`TagInput.Input`, not by the per-tag `name` inputs — those are `type="hidden"`,
which the HTML spec bars from constraint validation, and they do not exist at
all while the list is empty. Do not move `required` onto the hidden inputs, and
do not add a `display:none`, `readonly`, or `aria-hidden` proxy input to carry
it: the first three are barred from validation and the last hides a focusable
control from assistive tech. The `required` attribute itself stays off the
input, so a typed draft never satisfies the constraint — only a committed tag
clears it. Override the message with `requiredMessage`.

Enter commits only when the draft is non-blank. On an empty draft the event is
left alone so an enclosing form submits. Do not restore an unconditional
`preventDefault()` on Enter.

`TagInput.Input` sets `aria-label` only when Root renders no `label`. When a
label exists, the `<label for>` is the accessible name and an `aria-label` would
outrank it, dropping the visible text out of the name (WCAG 2.5.3). Pass an
explicit `aria-label` only for an unlabelled field.

Rejections are announced: `duplicate`, `invalid`, and `max-tags` reasons go to
the same polite live region as additions and removals, in addition to
`onReject`. Do not add a second announcement mechanism.

## Traveling highlight mounts everywhere

`travelingHighlight` mounts on every device, coarse pointer included. Touch is
handled by the `pointerType === 'touch'` guards inside the pointer listeners, so
the highlight follows keyboard focus and never the finger. Do not add an early
return for `(hover: none)` / `(pointer: coarse)`: it drops the highlight
entirely on hybrid machines that have both a touchscreen and a keyboard, which
contradicts the documented contract that the highlight still tracks focus there.
