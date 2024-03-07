<script lang="ts">
    import { clickOutside, cn, flyAndScale } from "$lib/utils";
    import { getContext } from "svelte";
    import { selectState } from ".";
    import { Builder } from "../confirm";
    import { onMount } from "svelte";
    let className: string | undefined = undefined;
    export let offset: number = 10
    let componentElement: HTMLElement; // Added line
    
    const BuilderData = getContext("SelectBuilderData");
    let entered = false;

    $: IsOpen = $selectState[BuilderData.key]?.open || false;
    $: openSide = $selectState[BuilderData.key].openSide === "top" ? `top-${offset}` : `bottom-${offset}`;
    
    onMount(() => {
        const handleClick = event => {
            if (componentElement && !componentElement.contains(event.target) && !entered) {
                BuilderData.open = false;
                selectState.update((state) => {
                    return {
                        ...state,
                        [BuilderData.key]: BuilderData
                    }
                });
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
    id={`select-${BuilderData.key}`}
    on:mouseenter={() => { entered = true; }}
    on:mouseleave={() => {entered = false;} }
    bind:this={componentElement}
    transition:flyAndScale
    {...$$restProps}
    class={cn(className, ` absolute w-full z-50 bg-popover-bg rounded-lg border  my-2 ${openSide}`)}>
        <slot></slot>
    </div>
{/if}