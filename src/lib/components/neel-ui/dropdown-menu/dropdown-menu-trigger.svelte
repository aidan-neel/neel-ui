<script lang="ts">
    import { getContext } from "svelte";
    import { dropdownBuilder, dropdownState, type dropdownStateType } from ".";
    import type { Event, EventProps, Hook } from '$lib/event-handler'

    const BuilderData: dropdownStateType = getContext<dropdownStateType>("DropdownBuilderData")
    const Key = BuilderData?.key;

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            const open = dropdownState.getOpenState(Key);
            dropdownState.setOpenState(Key, !open);
            dropdownState.set(Key, "triggerHeight", props.Component.clientHeight);
        }
    }

    let data: Event = {
        event: "dropdown",
        hooks: [MouseDownHook]
    }

    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot data={data}></slot>
</div>