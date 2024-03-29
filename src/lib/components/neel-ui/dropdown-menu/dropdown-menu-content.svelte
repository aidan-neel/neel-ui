<script lang="ts">
    import { cn, flyAndScale } from "$lib/utils";
    import { dropdownState, type dropdownStateType } from ".";
    import { getContext } from "svelte";
    import { onMount } from "svelte";

    const BuilderData = getContext<dropdownStateType>("DropdownBuilderData")

    $: open = $dropdownState[BuilderData.key].open;
    $: triggerHeight = $dropdownState[BuilderData.key].triggerHeight;

    let entered: boolean = false;
    let className: string | undefined = undefined;
    let componentElement: HTMLElement; 
    let openSide: string = `bottom`;
    export let openFrom: string | undefined = undefined;

    function calculateOpenDirection(node) {
        if(openFrom) {
            openSide = openFrom;
        } else {
            const windowHeight = window.innerHeight;
            const rect = node.getBoundingClientRect();
            const spaceBelow = windowHeight - rect.bottom;
            const spaceAbove = rect.top;
            if(spaceBelow < 200 && spaceAbove > 200) {
                openSide = `top`;
            }
        }
    }

    // Detect whether to open top or bottom by calculating available space
    // If there is not enough space at the bottom, open at the top
    onMount(() => {
        const handleClick = event => {
            if (componentElement && !componentElement.contains(event.target) && !entered) {
                BuilderData.open = false;
                dropdownState.setOpenState(BuilderData.key, false);
                open = false;
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });

    export {
        className as class,
    }
    </script>

{#if open}
    <div
    role="menu"
    tabindex="-1"
    id={`dropdown-${BuilderData.key}`}
    aria-roledescription="menu"
    aria-labelledby="dropdown"
    transition:flyAndScale
    data-dropdown-menu={BuilderData.key}
    on:mouseenter={() => { entered = true; }}
    on:mouseleave={() => {entered = false;} }
    bind:this={componentElement}
    use:calculateOpenDirection
    {...$$restProps}
    class={cn(className, `shadow-class rounded-lg z-50 py-1 border
    bg-background min-w-[12.5rem] absolute h-auto max-w-[45rem]`)}
    style={openSide === `bottom` ? `top:  calc(${triggerHeight}px + 0.45rem)` : `bottom: calc(${triggerHeight}px + 0.45rem)`}
    >
        <slot></slot>
    </div>
{/if}

