<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { type TabStateType, tabState } from ".";
    import { Button } from "../button";
    import { Builder } from "../confirm";
    import Tabs from "./tabs.svelte";
    import { cn } from "$lib/utils";

    export let value: string;
    export let variant: string = "primary";

    const variants = {
        "primary-unchecked": 'rounded-md h-[2rem] flex-grow-0 text-muted-foreground w-full',
        "primary-checked": 'h-[2rem] rounded-md flex-grow-0 w-full',

        "radix-unchecked": 'h-full border-t-transparent border-r-transparent pb-0 border-b border-b-border hover:bg-transparent hover:text-white hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent rounded-none border-l-transparent w-full text-muted',
        "radix-checked": 'h-full rounded-md flex-grow-0 w-full bg-transparent border-t-transparent border-r-transparent hover:bg-transparent hover:text-white hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent hover:border-b-transparent rounded-none border-l-transparent',
    }

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
        <Button useTransition={true} variant={variant === "radix" ? "ghost" : "primary"} class={cn(className, `h-[2rem]  ${variants[variant + '-checked']}`)}>
            <slot></slot>
        </Button>
    {:else}
        <Button useTransition={true} on:click={ChangeTab} variant="ghost" class={cn(className, `h-[2rem] ${variants[variant + '-unchecked']}`)}>
            <slot></slot>
        </Button>
    {/if}
{/key}