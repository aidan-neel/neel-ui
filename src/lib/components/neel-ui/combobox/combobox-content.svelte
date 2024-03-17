<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import { getContext, setContext } from "svelte";
    import * as Popout from '$lib/components/neel-ui/popout'

    type $$Props = DefaultProps;

    const key = getContext("key");
    $: open = $comboboxState[key].open;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

<Popout.Content {...$$restProps} padding={"pb-1"} class={cn(className, `min-h-[3rem] max-h-[19.5rem] overflow-y-auto`)} state={comboboxState}>
    <slot />
</Popout.Content>