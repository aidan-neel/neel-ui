<script lang="ts">
    let className: string | undefined = undefined;
    import { flyAndScale } from "$lib/utils";
    import { getContext } from "svelte";
    import { tooltipState, type tooltipStateType } from ".";
    import { onMount } from "svelte";

    const BuilderData = getContext<tooltipStateType>("TooltipBuilderData");
    let isTop = true; // Initialize as top-aligned

    $: IsOpen = $tooltipState[BuilderData?.key]?.showing || false;
</script>

{#if IsOpen}
    <div transition:flyAndScale={{ y: isTop ? 8 : 0, x: 0, start: 0.9, duration: 150 }} {...$$restProps} class={`${className} text-secondary bg-foreground bg-opacity-90 backdrop-blur-md border p-1 px-2 absolute text-[13px] min-w-[6rem] flex items-center justify-center ${isTop ? 'top-[-36px]' : 'bottom-[-36px]'} rounded-lg`}>
        <slot></slot>
    </div>
{/if}
