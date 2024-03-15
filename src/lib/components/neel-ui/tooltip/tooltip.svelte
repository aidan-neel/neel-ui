<script lang="ts">
    import { onDestroy, setContext } from "svelte";
    import { tooltipBuilder, tooltipState } from ".";
    import { cn } from "$lib/utils";

    const builder = tooltipBuilder();
    setContext("TooltipBuilderData", builder)

    let className: string | undefined = undefined;

    export {
        className as class
    }

    onDestroy(() => {
        tooltipState[builder.key] = undefined
    })
</script>

<div id="tooltip" role="tooltip" {...$$restProps} class={cn(className, ` relative flex items-center justify-center`)}>
    <slot></slot>
</div>