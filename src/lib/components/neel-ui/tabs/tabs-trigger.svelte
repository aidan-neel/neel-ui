<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { type TabStateType, tabState } from ".";
    import { Button } from "../button";
    import { Builder } from "../confirm";
    import Tabs from "./tabs.svelte";

    export let value: string;

    let className: string | undefined = undefined;
    export { className as class };

    function findDictByKey(data, key, value) {
        console.log(data)
        for (const item of data) {
            if (item[key] === value) {
            return item;
            }
        }
        return undefined;
    }

    let BuilderData = getContext<TabStateType>("tabBuilderData");
    $: selectedTab = $tabState[BuilderData.key]?.openTab
    
    function ChangeTab() {
        BuilderData.openTab = value;
        tabState.update((state) => {
            return {
                ...state,
                [BuilderData.key]: BuilderData
            }
        })

    }
</script>

{#key selectedTab}
    {#if selectedTab === value}
        <Button useTransition={true} variant="primary" class={`${className} h-[2rem] rounded-md flex-grow-0 w-full`}>
            <slot></slot>
        </Button>
    {:else}
        <Button useTransition={true} on:click={ChangeTab} variant="ghost" class={`${className} rounded-md h-[2rem] flex-grow-0 text-muted-foreground w-full`}>
            <slot></slot>
        </Button>
    {/if}
{/key}