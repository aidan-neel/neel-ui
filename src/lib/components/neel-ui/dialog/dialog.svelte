<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { dialogBuilder, dialogState, type dialogStateType } from ".";
    import { setContext } from "svelte";

    type $$Props = DefaultProps;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    const builder: dialogStateType = dialogBuilder();
    setContext("key", builder.key);

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot></slot>
</div>