<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { popoutBuilder, popoutState } from ".";
    import { onDestroy, setContext } from "svelte";

    type $$Props = DefaultProps & {
        stateBuilder?: any;
        state?: any;
    };

    let usedState;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let stateBuilder: $$Props["stateBuilder"] = undefined;
    export let state: $$Props["state"] = undefined;
    export { className as class }

    let builder;

    if (state) {
        usedState = state;
    } else {
        usedState = popoutState;
    }

    if (stateBuilder) {
        builder = stateBuilder;
    } else {
        builder = popoutBuilder();
    }

    setContext("key", builder.key);

    onDestroy(() => {
        $usedState[builder.key] = undefined;
    })  

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<div {...$$restProps} class={cn(className, `relative flex justify-center flex-col items-center`)}>
    <slot></slot>
</div>