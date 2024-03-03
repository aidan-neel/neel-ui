<script lang="ts">
	import type { DataBuilderType } from "../button";
    import type { tooltipStateType } from ".";
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    const BuilderData = getContext<tooltipStateType>("TooltipBuilderData")

    let data: DataBuilderType = {
        type: "tooltip",
        key: BuilderData.key
    }

    export {
        className as class,
    }
</script>

<div {...$$restProps} class={`${className}`}>
    <slot data={data}></slot>
</div>