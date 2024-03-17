<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import { Shortcut } from "$lib/components/neel-ui/shortcut";
    import Check from 'svelte-radix/Check.svelte'
    import { getContext, setContext } from "svelte";

    const key = getContext("key");

    $: ItemIsSelected = $comboboxState[key].selectedItem.value === value;

    type $$Props = DefaultProps & {
        value: string;
        label: string;
        callback: () => void;
    };

    function ChangeSelected() {
        const selectedItem = {
            name: label,
            label: label,
            value: value,
            callback: callback,
            searchPerformed: false
        }
        comboboxState.set(key, "selectedItem", selectedItem);
    }
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let value: $$Props["value"];
    export let label: $$Props["label"];
    export let callback: $$Props["callback"];
    export { className as class }

    const itemAlreadyAdded = $comboboxState[key].items.find(item => item.name === value);
    
    const itemData = {
        name: label,
        label: label,
        value: value,
        callback: callback,
        searchPerformed: false
    }

    if (!itemAlreadyAdded) {
        $comboboxState[key].items.push(itemData);
    }
</script>

<Shortcut 
key={key}
onclick={ChangeSelected}
state={comboboxState}
class={cn(className, ` py-1 items-center relative ${ItemIsSelected ? 'bg-secondary font-medium' : ''}`)}
>
    {#if ItemIsSelected}
        <Check class="w-4 h-4 {ItemIsSelected ? 'flex' : 'hidden'} absolute left-1.5" />
    {/if}
    {label}
</Shortcut>