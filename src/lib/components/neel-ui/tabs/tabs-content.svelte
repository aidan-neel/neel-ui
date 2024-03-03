<script lang="ts">
    import { getContext } from "svelte";
    import { type TabStateType } from ".";
    import { tabState } from ".";
	import Tabs from "./tabs.svelte";

    export let value: string

    let className: string | undefined = undefined;
    export { className as class }
    
    let BuilderData = getContext<TabStateType>("tabBuilderData");
    $: selectedTab = $tabState[BuilderData.key].openTab
</script>

{#if selectedTab === value}
    <slot></slot>
{/if}