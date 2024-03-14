<script lang="ts">
    import { calculateOpenDirection, flyAndScale } from "$lib/utils";
    import { linkPreviewState, type linkPreviewStateType } from ".";
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    let containerClassName: string | undefined = undefined;

    const BuilderData = getContext<linkPreviewStateType>("LinkPreviewBuilderData");
    $: isOpen = $linkPreviewState[BuilderData.key].open;

    let openSide: string = "bottom";
    let padding: number = 1.25
    $: triggerHeight = $linkPreviewState[BuilderData.key].triggerHeight;

    function MouseEnter() {
        $linkPreviewState[BuilderData.key].open = true;
    }

    function MouseLeave() {
        $linkPreviewState[BuilderData.key].open = false;
    }

    import { cn } from '$lib/utils'    

    export {
        className as class,
        containerClassName as containerClass
    }
</script>

{#if isOpen}
    <div role="dialog"  style={openSide === `bottom` ? `top:  calc(${triggerHeight}px + ${padding}rem)` : `bottom: calc(${triggerHeight}px + ${padding}rem)`}
    use:calculateOpenDirection on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} class={cn(containerClassName, `absolute flex items-center justify-center p-2`)}>
        <div {...$$restProps} transition:flyAndScale class={cn(className, `border outline-4 bg-background shadow-class p-4 rounded-lg min-w-[18rem]`)}>
            <slot></slot>
        </div>
    </div>
{/if}
