<script lang="ts">
    import { flyAndScale } from "$lib/utils";
    import { dropdownState, type dropdownStateType } from ".";
    import { getContext } from "svelte";
    import { onMount } from "svelte";

    const BuilderData = getContext<dropdownStateType>("DropdownBuilderData")

    $: open = $dropdownState[BuilderData.key].open;
    $: openSide = $dropdownState[BuilderData.key].openSide === "top" ? "top-12" : "bottom-12";

    let entered: boolean = false;
    let className: string | undefined = undefined;
    let componentElement: HTMLElement; 

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
    on:mouseenter={() => { entered = true; }}
    on:mouseleave={() => {entered = false;} }
    bind:this={componentElement}
    {...$$restProps}
    class={`${className} shadow-class rounded-lg z-50 py-1 border bg-background ${openSide} absolute w-full`}>
        <slot></slot>
    </div>
{/if}

