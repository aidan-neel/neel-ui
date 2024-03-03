<script lang="ts">
    import { clickOutside, flyAndScale } from "$lib/utils";
    import { getContext } from "svelte";
    import { selectState } from ".";
    import { Builder } from "../confirm";
    import { onMount } from "svelte";
    let className: string | undefined = undefined;
    export let offset: number = 12

    const BuilderData = getContext("SelectBuilderData");
    let isTop: boolean = true; // Initial state: Open at the top

    $: IsOpen = $selectState[BuilderData.key]?.open || false;

    // Calculate available space for dropdown placement
    function calculateAvailableSpace(): number {
        const windowHeight = window.innerHeight;
        const triggerElement = this.$el.previousElementSibling; // Assuming the trigger element (button) is above
        const triggerRect = triggerElement?.getBoundingClientRect();
        const triggerTop = triggerRect?.top || 0; // Handle potential undefined triggerRect
        return windowHeight - triggerTop;
    }

    function handleOpen() {
        const availableSpace = calculateAvailableSpace();
        // Adjust available height for dropdown element and potential padding/border
        const dropdownHeight = this.$el.offsetHeight + 20; // Adjust for padding/border if needed
        isTop = availableSpace >= dropdownHeight;
    }

    onMount(handleOpen); // Calculate space on component mount
</script>

{#if IsOpen}
    <div transition:flyAndScale={{ y: isTop ? -8 : 0, x: 0, start: 0.9, duration: 150 }} {...$$restProps} class={`${className} absolute w-full bg-primary-muted_bg rounded-lg border border-primary-muted_border ${isTop ? `top-${offset}` : `bottom-${offset}`}`}>
        <slot></slot>
    </div>
{/if}
