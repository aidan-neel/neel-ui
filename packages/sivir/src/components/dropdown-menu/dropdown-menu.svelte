<script lang="ts">
    import * as Popover from '@sivir-ui/svelte/components/popover';
    import type { DropdownMenuProps } from '.';
    import { setDropdownMenuContext } from './context.svelte';

    let { children, open = $bindable(false), onOpenChange }: DropdownMenuProps = $props();

    /**
     * Must run during init: Content reads this via `getContext()` while it
     * initializes, which happens before any `$effect` fires.
     */
    setDropdownMenuContext({ ancestors: [], submenus: [] });
</script>

<Popover.Root placement="bottom-start" bind:open {onOpenChange}>
    {@render children?.()}
</Popover.Root>
