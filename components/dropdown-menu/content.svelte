<script lang="ts">
    import { cn } from "$library/utils";
    import { PopoverContent } from "$ui/popover";
    import type { Placement } from "@popperjs/core";

    let className: string | undefined = undefined;
    export let placement: Placement = "bottom";
    export { className as class };
</script>

<PopoverContent {placement} {...$$restProps} class={cn(`p-0 py-1`, className)}>
    <slot />
</PopoverContent>
