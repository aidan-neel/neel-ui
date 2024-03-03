<script lang="ts">
    import { setContext, getContext } from "svelte";
    import { type TabStateType, tabBuilder, tabState } from ".";
    export let value: string;

    let className: string | undefined = undefined;
    export { className as class }

    const TabStateBuilderData = tabBuilder(value);
    setContext("tabBuilderData", TabStateBuilderData)
</script>

<div class={`${className}`} {...$$restProps}>
    <slot></slot>
</div>