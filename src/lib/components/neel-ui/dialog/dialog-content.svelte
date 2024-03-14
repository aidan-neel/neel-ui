<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn, flyAndScale } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { fade } from 'svelte/transition'
  import { getContext } from "svelte";
  import { dialogState } from ".";

    type $$Props = DefaultProps;

    const key = getContext('key');
    $: open = $dialogState[key].open;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    function CloseDialog() {
        dialogState.setOpenState(key, false);
    }


    // Unexported variables
    let mouseEntered: boolean = false;
</script>

{#if open}
    <div 
    transition:fade={{ duration: 90 }}
    on:click={() => {
        if(!mouseEntered) {
            CloseDialog();
        }
    }}
    class="h-screen w-screen  backdrop-blur-md bg-background bg-opacity-60 z-[98] fixed top-0 left-0">
        <div transition:flyAndScale class={cn(className, ` centered absolute bg-background
            shadow-background/50  flex-col border relative
            p-6 z-[999] rounded-[0.5rem] sm:max-w-[500px]`)}
        on:mouseenter={() => {
            mouseEntered = true;
        }}
        on:mouseleave={() => {
            mouseEntered = false;
        }}
        >
            <slot />
        </div>
    </div>
{/if}