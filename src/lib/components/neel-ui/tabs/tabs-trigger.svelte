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
    $: selectedTab = $tabState[BuilderData.key].openTab

    function ChangeTab() {
        BuilderData.openTab = value;
        tabState.update((state) => {
            return {
                [BuilderData.key]: BuilderData
            }
        })
    }

    $: inV = selectedTab === value
</script>

{#if selectedTab === value}
    <Button useTransition={true} variant="primary" class={`${className} fade-in w-full h-[2rem] rounded-md`}>
        <slot></slot>
    </Button>
{:else}
    <Button useTransition={true} on:click={ChangeTab} variant="ghost" class={`${className} fade-in text-muted-foreground w-full h-[2rem] rounded-md`}>
        <slot></slot>
    </Button>
{/if}
