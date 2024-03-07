<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button'
    import CaretSort from "svelte-radix/CaretSort.svelte"
    import { getContext } from 'svelte';
    import { Item, selectState, type selectStateType } from '.';
	import { Builder } from '../confirm';
    import { openSide } from '$lib/utils';

    let className: string | undefined = undefined;

    const BuilderData = getContext<selectStateType>("SelectBuilderData")
    $: ItemIsSelected = $selectState[BuilderData.key]?.selectedValue !== undefined
    $: ItemIsOpen = $selectState[BuilderData.key].open
    
import { cn } from '$lib/utils'    

export {
        className as class
    }

    function HandleClick() {
        openSide(`select-${BuilderData.key}`, selectState, BuilderData.key)
        BuilderData.open = !ItemIsOpen
        selectState.update((state) => {
            return {
                ...state,
                [BuilderData.key]: BuilderData
            }
        })
    }
</script>

<Button on:click={HandleClick} class={cn(className, ` flex flex-row justify-between pl-2 pr-2`)} variant="secondary">
    {#if ItemIsSelected}
        {$selectState[BuilderData.key].selectedLabel}
    {:else}
        <slot />
    {/if}
    <CaretSort class="w-4 h-4 ml-1 opacity-50" />
</Button>