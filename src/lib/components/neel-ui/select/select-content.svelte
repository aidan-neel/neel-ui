<script lang="ts">
    import { clickOutside, flyAndScale } from "$lib/utils";
    import { getContext } from "svelte";
    import { selectState } from ".";
	import { Builder } from "../confirm";
    let className: string | undefined = undefined;
    
    const BuilderData = getContext("SelectBuilderData")
    $: IsOpen = $selectState[BuilderData.key]?.open || false

    export {
        className as class
    }
</script>

{#if IsOpen}
    <div transition:flyAndScale={{ y: -8, x: 0, start: 0.9, duration: 150 }} {...$$restProps} class={`${className} absolute w-full bg-primary-muted_bg rounded-lg border border-primary-muted_border top-12`}>
        <slot></slot>
    </div>
{/if}