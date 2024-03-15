<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button'
    import CaretSort from "svelte-radix/CaretSort.svelte"
    import { getContext } from 'svelte';
    import { Item, selectState, type selectStateType } from '.';
	import { Builder } from '../confirm';
    import { openSide } from '$lib/utils';
    import type { Event, EventProps, Hook } from '$lib/event-handler'

    let className: string | undefined = undefined;

    const BuilderData = getContext<selectStateType>("SelectBuilderData")
    $: ItemIsSelected = $selectState[BuilderData.key]?.selectedValue !== undefined
    $: ItemIsOpen = $selectState[BuilderData.key]?.open
    
    import { cn } from '$lib/utils'    

    export {
        className as class
    }

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            selectState.setOpenState(BuilderData.key, !ItemIsOpen)
            selectState.set(BuilderData.key, "triggerHeight", props.Component.clientHeight)
        }
    }

    let data: Event = {
        event: "select",
        hooks: [MouseDownHook]
    }
</script>

<Button data={data} class={cn(className, `flex flex-row hover:bg-background justify-between pl-2 pr-2`)} variant="secondary">
    {#if ItemIsSelected}
        {$selectState[BuilderData.key].selectedLabel}
    {:else}
        <slot />
    {/if}
    <CaretSort class="w-4 h-4 ml-1 opacity-50" />
</Button>