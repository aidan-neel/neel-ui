<script lang="ts">
    import { setContext } from "svelte";
    import { tooltipBuilder } from ".";

    const builder = tooltipBuilder();
    setContext("TooltipBuilderData", builder)

    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} relative flex items-center justify-center`}>
    <slot></slot>
</div>