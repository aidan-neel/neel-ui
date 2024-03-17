<script lang="ts">
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils';
    import { getContext } from "svelte";
    import Combobox from "./combobox.svelte";
    import ComboboxItem from "./combobox-item.svelte";
    import { comboboxState } from ".";

    type $$Props = DefaultProps;

    const key = getContext("key");

    $: results = $comboboxState[key]?.results;
    $: searchPerformed = $comboboxState[key]?.searchPerformed;
    $: isEmpty = results?.length === 0 && searchPerformed;

    $: uniqueResults = results ? deduplicateResults(results) : [];

    function deduplicateResults(results) {
        const unique = [];
        const map = new Map();

        for (const result of results) {
            if (!map.has(result.value)) { // Replace 'value' with 'value' or 'label' if more appropriate
                map.set(result.value, true); // Replace 'value' with 'value' or 'label' if more appropriate
                unique.push(result);
            }
        }

        return unique;
    }

    // Function to generate a unique key for each result
    // If the result.id is undefined or not unique, it generates a new key based on the index
    function generateKey(result, index) {
        return result.id ?? `unique-key-${index}`;
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            if (results.length > 0) {
                $comboboxState[key].selectedItem = results[0];
                results[0].callback?.();
            }
        } else if (event.key === "Escape") {
            $comboboxState[key].open = false;
        }
    }
    
    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<svelte:body on:keydown={handleKeyDown} />

<div {...$$restProps} class={cn(className, `flex flex-col gap-0.5 mt-1`)}>
    {#if searchPerformed === false}
        <slot></slot>
    {:else}
        {#if !isEmpty}
            {#each uniqueResults as result}
                <ComboboxItem value={result.value} label={result.label} callback={result.callback} />
            {/each}
        {/if}
    {/if}
</div>
