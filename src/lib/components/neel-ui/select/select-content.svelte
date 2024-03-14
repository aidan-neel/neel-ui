<script lang="ts">
    import { clickOutside, cn, flyAndScale, calculateOpenDirection } from "$lib/utils";
    import { getContext } from "svelte";
    import { selectState } from ".";
    import { Builder } from "../confirm";
    import { onMount } from "svelte";
    let className: string | undefined = undefined;
    let componentElement: HTMLElement; // Added line
    
    const BuilderData = getContext("SelectBuilderData");
    let entered = false;
    let padding = 0.5;

    $: IsOpen = $selectState[BuilderData.key]?.open || false;
    
    let openSide: string = "bottom";
    $: triggerHeight = $selectState[BuilderData.key].triggerHeight;
    
    onMount(() => {
        const handleClick = event => {
            if (componentElement && !componentElement.contains(event.target) && !entered) {
                selectState.set(BuilderData.key, "open", false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            // Cleanup the listener when the component is destroyed
            document.removeEventListener('click', handleClick);
        };
    });
</script>

{#if IsOpen}
    <div 
    role="menu"
    tabindex="-1"
    aria-roledescription="menu"
    aria-labelledby="select"
    use:calculateOpenDirection
    id={`select-${BuilderData.key}`}
    on:mouseenter={() => { entered = true; }}
    on:mouseleave={() => {entered = false;} }
    bind:this={componentElement}
    transition:flyAndScale
    {...$$restProps}
    style={openSide === `bottom` ? `top:  calc(${triggerHeight}px + ${padding}rem)` : `bottom: calc(${triggerHeight}px + ${padding}rem)`}
    class={cn(className, ` absolute w-full z-50 bg-background rounded-lg border my-2`)}>
        <slot></slot>
    </div>
{/if}