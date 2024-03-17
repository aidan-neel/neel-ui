<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { popoutState } from ".";
    import { getContext } from "svelte";

    type $$Props = DefaultProps;
    const key = getContext("key");
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            const open = popoutState.getOpenState(key);
            popoutState.setOpenState(key, !open);
            popoutState.set(key, "triggerHeight", props.Component.clientHeight);
        }
    }

    let data: Event = {
        event: "dropdown",
        hooks: [MouseDownHook]
    }

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot data={data}></slot>
</div>