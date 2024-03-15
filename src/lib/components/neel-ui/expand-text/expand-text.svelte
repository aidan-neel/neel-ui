<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { Button } from '$lib/components/neel-ui/button'
    import { expandBuilder, expandState } from ".";
    import { slide } from "svelte/transition";
  import { onDestroy } from "svelte";

    type $$Props = DefaultProps & {
        height: string;
    };
    const builder = expandBuilder();
    const key = builder.key;
    $: open = $expandState[key].open;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let height: $$Props["height"] = "150px";
    export { className as class }

    function expand() {
        expandState.setOpenState(key, !open);
    }

    function close() {
        if (open) {
            expandState.setOpenState(key, false);
        }
    }

    onDestroy(() => {
        expandState[key] = undefined;
    })

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

{#key open}
    <div {...$$restProps} class={cn(`${open ? 'h-auto' : height}`, className, `bg-background hover:cursor-pointer rounded-lg overflow-hidden absolute border flex`)}>
        <div class="h-full w-full relative">
            <p in:slide={{ }} class="{open ? 'overflow-visible' : 'overflow-hidden'} h-full opacity-80 text-[14px] p-4">
                <slot></slot>
                <!-- Blur -->
            </p>
            {#if !open}
            <div on:click={expand} class="w-full hover:cursor-pointer h-full absolute flex items-start justify-center bottom-0 left-0 rounded-b-lg from-background to-background/10 via-background/70 bg-gradient-to-b rotate-180">
            </div>
            {/if}
        </div>
    </div>
{/key}