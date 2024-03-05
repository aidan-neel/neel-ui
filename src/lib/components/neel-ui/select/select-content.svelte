<script lang="ts">
    import { clickOutside, flyAndScale } from "$lib/utils";
    import { getContext } from "svelte";
    import { selectState } from ".";
    import { Builder } from "../confirm";
    import { onMount } from "svelte";
    let className: string | undefined = undefined;
    export let offset: number = 12
    let componentElement: HTMLElement; // Added line

    const BuilderData = getContext("SelectBuilderData");
    let isTop: boolean = true; // Initial state: Open at the top

    $: IsOpen = $selectState[BuilderData.key]?.open || false;
</script>
<!-- Adjusted part -->
{#if IsOpen}
    <div use:clickOutside={() => {
        $selectState[BuilderData.key].open = false;
    }} bind:this={componentElement} transition:flyAndScale={{ y: isTop ? -8 : 0, x: 0, start: 0.9, duration: 150 }} {...$$restProps} class={`${className} absolute w-full bg-primary-muted_bg rounded-lg border border-primary-muted_border my-2 ${isTop ? `top-${offset}` : `bottom-${offset}`}`}>
        <slot></slot>
    </div>
{/if}