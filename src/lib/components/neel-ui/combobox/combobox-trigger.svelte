<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import * as Popout from "$lib/components/neel-ui/popout";
    import { getContext, setContext } from "svelte";

    type $$Props = DefaultProps;

    const key = getContext("key");
    $: selectedLabel = $comboboxState[key].selectedItem.label;

    let MDHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            const openState = comboboxState.getOpenState(key);
            comboboxState.setOpenState(key, !openState);
            comboboxState.set(key, "triggerHeight", props.Component.clientHeight);
        }
    }

    let data: Event = {
        hooks: [MDHook]
    }
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

<Popout.Trigger {...$$restProps} class={cn(className, ``)}>
    <slot data={data} label={selectedLabel}></slot>
</Popout.Trigger>