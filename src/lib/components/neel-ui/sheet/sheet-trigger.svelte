<script lang="ts">
    let className: string | undefined = undefined;

    import type { DataBuilderType } from "../button";
    import { getContext } from "svelte";
    import { type SheetState } from ".";

    const BuilderData = getContext<SheetState>("SheetBuilderData")

    let data: DataBuilderType = {
        type: "sheet",
        key: BuilderData.key
    }

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className}`}>
    <slot data={data}></slot>
</div>