<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { toastState } from ".";
    import { Button } from '$lib/components/neel-ui/button'

    type $$Props = DefaultProps & {
        variant: string,
        action: () => void,
        key: string
    };
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let variant: $$Props["variant"] = "primary";
    export let action: $$Props["action"] = () => {};
    export let key: $$Props["key"] = "";
    export { className as class }

    function callback() {
        toastState.setOpenState(key, false);
        action();
    }

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<Button on:click={callback} variant={variant} {...$$restProps} class={cn(className, `h-10 w-full`)}>
    <slot />
</Button>