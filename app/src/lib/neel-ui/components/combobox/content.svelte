<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";
    import { PopoverContent } from "$ui/popover";
    import type { Placement } from "@popperjs/core";
    import { getContext } from "svelte";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
        placement?: Placement;
        selected?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let placement: $$Props["placement"] = "bottom";
    export { className as class };

    export let selected: $$Props["selected"] =
        $globalStateStore["combobox"][key]?.data.selected;
    $: selected = $globalStateStore["combobox"][key]?.data.selected;
</script>

<PopoverContent
    {placement}
    role="listbox"
    tabIndex={-1}
    class={cn(`p-0 py-1 pt-0 w-full`, className)}
>
    <slot />
</PopoverContent>
