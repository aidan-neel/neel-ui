<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button'
    import { CaretSort } from 'radix-icons-svelte';
    import { getContext } from 'svelte';
    import { selectState, type selectStateType } from '.';
	import { Builder } from '../confirm';

    let className: string | undefined = undefined;

    const BuilderData = getContext<selectStateType>("SelectBuilderData")
    $: ItemIsSelected = $selectState[BuilderData.key]?.selectedValue !== undefined
    
    export {
        className as class
    }

    function HandleClick() {
        if(BuilderData.open === true ) { CloseSelect() } else { OpenSelect() }
    }

    function OpenSelect() {
        BuilderData.open = true
        selectState.update((state) => {
            return {
                [BuilderData.key]: BuilderData
            }
        })
    }

    function CloseSelect() {
        BuilderData.open = false
        selectState.update((state) => {
            return {
                [BuilderData.key]: BuilderData
            }
        })
    }
</script>

<Button on:click={HandleClick} class={`${className} flex flex-row justify-between pl-2 pr-2`} variant="secondary">
    {#if ItemIsSelected}
        {$selectState[BuilderData.key].selectedLabel}
    {:else}
        <slot />
    {/if}
    <CaretSort class="w-4 h-4 ml-1" />
</Button>