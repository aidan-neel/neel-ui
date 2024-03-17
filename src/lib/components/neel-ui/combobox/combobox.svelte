<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import { getContext, setContext } from "svelte";
    import * as Popout from "$lib/components/neel-ui/popout";

    const builder = comboboxBuilder();
    const key = builder.key;
    
    setContext("key", key)

    type $$Props = DefaultProps;
    
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

<Popout.Root stateBuilder={builder} class="relative" state={comboboxState}>
    <slot />
</Popout.Root>