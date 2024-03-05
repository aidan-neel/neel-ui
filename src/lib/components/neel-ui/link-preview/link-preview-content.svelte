<script lang="ts">
    import { flyAndScale } from "$lib/utils";
    import { linkPreviewState, type linkPreviewStateType } from ".";
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    let isTop: boolean = false;

    const BuilderData = getContext<linkPreviewStateType>("LinkPreviewBuilderData");
    $: isOpen = $linkPreviewState[BuilderData.key].open;

    function MouseEnter() {
        $linkPreviewState[BuilderData.key].open = true;
    }

    function MouseLeave() {
        $linkPreviewState[BuilderData.key].open = false;
    }

    export {
        className as class
    }
</script>

{#if isOpen}
    <div on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} class="absolute p-2 top-5">
        <div {...$$restProps} transition:flyAndScale={{ y: isTop ? -8 : 0, x: 0, start: 0.9, duration: 150 }} class={`${className} border outline-4 bg-background p-4 rounded-lg min-w-[18rem]`}>
            <slot></slot>
        </div>
    </div>
{/if}
