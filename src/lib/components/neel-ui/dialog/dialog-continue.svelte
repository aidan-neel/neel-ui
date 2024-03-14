<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import { Button } from '$lib/components/neel-ui/button'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { setContext, getContext } from "svelte";
    import { dialogState, type dialogStateType } from ".";

    type $$Props = DefaultProps & {
        variant?: string;
        callback?: () => void;
    };

    const key = getContext<string>('key');

    function Callback() {
        dialogState.setOpenState(key, false);
        props.callback();
    }
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let variant: $$Props["variant"] = "primary";
    export { className as class }

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<Button on:click={Callback} variant={variant} class="w-full sm:w-auto">
    <slot />
</Button>