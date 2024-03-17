<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import { getContext, setContext } from "svelte";

    type $$Props = DefaultProps;

    const key = getContext("key");
    $: resultsFound = $comboboxState[key]?.results?.length > 0;
    $: searchPerformed = $comboboxState[key]?.searchPerformed;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

{#if searchPerformed === true}
    {#if resultsFound === false}
        <div {...$$restProps} class={cn(className, ` w-full flex items-center justify-center text-sm text-muted-foreground py-4`)}>
            <slot></slot>
        </div>
    {/if}
{/if}