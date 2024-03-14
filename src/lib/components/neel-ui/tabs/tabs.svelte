<script lang="ts">
    import { setContext, getContext } from "svelte";
    import { type TabStateType, tabBuilder, tabState } from ".";
    import { cn } from "$lib/utils";
    
    let className: string | undefined = undefined;
    export { className as class }
    export let defaultValue: string

    const TabStateBuilderData = tabBuilder(defaultValue);
    setContext("tabBuilderData", TabStateBuilderData)
    
    $: values = $tabState[TabStateBuilderData?.key]?.openTab;
    export {
        values as value
    }
</script>

<div class={cn(className, ``)} {...$$restProps}>
    <slot></slot>
</div>