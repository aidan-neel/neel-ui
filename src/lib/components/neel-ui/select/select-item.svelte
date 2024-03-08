<script lang="ts">
    import { selectState, type selectStateType } from ".";
    import { getContext, setContext } from "svelte";
    import Check from 'svelte-radix/Check.svelte'
    import { cn } from "$lib/utils";
    import Shortcut from "../shortcut/shortcut.svelte";

    let className: string | undefined = undefined;
    let value: string
    let label: string;

    const BuilderData = getContext<selectStateType>("SelectBuilderData")
    $: ItemIsSelected = $selectState[BuilderData.key]?.selectedValue === value || false;

    function ChangeSelected() {
        BuilderData.open = false
        BuilderData.selectedValue = value
        BuilderData.selectedLabel = label
        ItemIsSelected = false;
    }
    
    export {
        className as class,
        value, label
    }
</script>

<Shortcut 
key={BuilderData.key}
onclick={ChangeSelected}
state={selectState}
class={cn(className, `pl-[0.5rem] justify-between`)}
>
    <slot></slot>
    {#if ItemIsSelected}
        <Check class="w-4 h-4 {ItemIsSelected ? 'flex' : 'hidden'}" />
    {/if}
</Shortcut>