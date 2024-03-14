<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { dialogState } from ".";
    import { getContext } from "svelte";

    type $$Props = DefaultProps;
    const key = getContext("key");
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            dialogState.setOpenState(key, true);
            console.log("Dialog closed");
        }
    }

    let data: Event = {
        event: "dialog",
        hooks: [MouseDownHook],
    }

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<slot data={data} />