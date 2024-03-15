<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn, flyAndScale } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { popoutState } from ".";
    import { getContext } from "svelte";
    import { onMount } from "svelte";

    type $$Props = DefaultProps;
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export { className as class }

    const key = getContext("key");

    $: open = $popoutState[key].open;
    $: triggerHeight = $popoutState[key].triggerHeight;

    let openSide: string = `bottom`;

    function calculateOpenDirection(node) {
        if (!node) return; // Ensure node exists
      
            const windowHeight = window.innerHeight;
            const rect = node.getBoundingClientRect();
            const spaceBelow = windowHeight - rect.bottom;
            const spaceAbove = rect.top;
            if(spaceBelow < 200 && spaceAbove > 200) {
                openSide = `top`;
            }
    }

    onMount(() => {
        const handleClick = event => {
            if (componentElement && !componentElement.contains(event.target) && !entered) {
                popoutState.setOpenState(key, false);
                open = false;
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
    let componentElement: HTMLElement | undefined;
    let entered: boolean = false;
</script>

{#if open}
<div 
tabindex="-1"
role="menu"
use:calculateOpenDirection
bind:this={componentElement} 
{...$$restProps} 
on:mouseenter={() => { entered = true; }}
on:mouseleave={() => {entered = false;} }
transition:flyAndScale
class={cn(className, `p-4 bg-background shadow-class rounded-lg border absolute z-50`)}
style={openSide === `bottom` ? `top:  calc(${triggerHeight}px + 0.45rem)` : `bottom: calc(${triggerHeight}px + 0.45rem)`}
>
    <slot></slot>
</div>
{/if}