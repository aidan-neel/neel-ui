<script lang="ts">
  import { cn } from "$lib/utils";
    import { selectBuilder, selectState } from ".";
    import { writable } from "svelte/store";
    import { getContext, onDestroy, setContext } from "svelte";

    let className: string | undefined = undefined;
    const BuilderData = selectBuilder()
    export const key = BuilderData.key
    export let defaultValue: string | undefined
    export let defaultLabel: string | undefined
    BuilderData.selectedValue = defaultValue
    BuilderData.selectedLabel = defaultLabel
    setContext("SelectBuilderData", BuilderData)

    // Create a writable store for value
    export const value = writable($selectState[BuilderData.key]);
    
    // Update value reactively
    $: $value = $selectState[BuilderData.key], $selectState[BuilderData.key];

    onDestroy(() => {
        selectState[BuilderData.key] = undefined;
    })

    export {    
        className as class,
    }
</script>

<div {...$$restProps} class={cn(className, ` relative`)}>
    <slot></slot>
</div>