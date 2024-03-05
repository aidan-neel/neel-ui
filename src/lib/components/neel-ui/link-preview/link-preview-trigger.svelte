<script lang="ts">
    import type { DataBuilderType } from "../button";
    import type { linkPreviewStateType } from ".";
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    const BuilderData = getContext<linkPreviewStateType>("LinkPreviewBuilderData")
    
    let data: DataBuilderType = {
        type: "link-preview",
        key: BuilderData.key
    }

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className}`}>
    <slot data={data}></slot>
</div>