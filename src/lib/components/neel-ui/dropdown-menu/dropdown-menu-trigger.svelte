<script lang="ts">
    import type { DataBuilderType } from "../button";
    import { getContext } from "svelte";
    import { dropdownBuilder, dropdownState, type dropdownStateType } from ".";

    const BuilderData: dropdownStateType = getContext<dropdownStateType>("DropdownBuilderData")

    let data: DataBuilderType = {
        type: "dropdown",
        key: BuilderData.key
    }

    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className}`}>
    <slot data={data}></slot>
</div>