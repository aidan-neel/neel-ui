<script lang="ts">
    import { dropdownBuilder, dropdownState, type dropdownStateType } from ".";
    import { setContext, getContext } from "svelte";

    const BuilderData: dropdownStateType = dropdownBuilder();
    setContext("DropdownBuilderData", BuilderData);

    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} relative flex justify-center`}>
    <slot></slot>
</div>