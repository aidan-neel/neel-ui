<script lang="ts">
    import { dropdownBuilder, dropdownState, type dropdownStateType } from ".";
    import { setContext, getContext, onDestroy } from "svelte";

    const BuilderData: dropdownStateType = dropdownBuilder();
    setContext("DropdownBuilderData", BuilderData);

    let className: string | undefined = undefined;

    import { cn } from '$lib/utils'    

    export {
        className as class
    }

    onDestroy(() => {
        dropdownState[BuilderData.key] = undefined;
    })
</script>

<div {...$$restProps} class={cn(className, ` relative flex justify-center flex-col items-center`)}>
    <slot></slot>
</div>