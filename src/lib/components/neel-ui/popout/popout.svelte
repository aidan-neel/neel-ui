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

    type $$Props = DefaultProps;
    const builder = popoutBuilder();
    setContext("key", builder.key);
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    onDestroy(() => {
        popoutState[builder.key] = undefined;
    })

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<div {...$$restProps} class={cn(className, `relative flex justify-center flex-col items-center`)}>
    <slot></slot>
</div>