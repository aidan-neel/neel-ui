<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";
    import { PopoverContent } from "$ui/popover";
    import type { Placement } from "@popperjs/core";
    import { ComboboxItem } from ".";
    import { getContext } from "svelte";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
        placement?: Placement;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let placement: $$Props["placement"] = "bottom";
    export { className as class };

    $: results =
        $globalStateStore["combobox"][key]?.data.results.filter(
            (item, index, self) =>
                self.findIndex((t) => t.name === item.name) === index,
        ) || [];
    $: searchPerformed =
        $globalStateStore["combobox"][key]?.data.searchPerformed;
</script>

<div class={cn("", className)} {...$$restProps}>
    {#if searchPerformed === true}
        {#if results && results.length > 0}
            {#each results as result}
                <ComboboxItem item={result.name} />
            {/each}
        {:else}
            <slot name="empty" />
        {/if}
    {:else}
        <slot />
    {/if}
</div>
