<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { comboboxBuilder, comboboxState, type comboboxStateType } from ".";
    import { getContext, setContext } from "svelte";
    import MagnifyingGlass from "svelte-radix/MagnifyingGlass.svelte"
    import { Input } from "$lib/components/neel-ui/input";
    import Fuse from 'fuse.js'

    type $$Props = DefaultProps & {
        placeholder?: string;
    };

    const key = getContext("key");
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let focused;
    export let searchValue: string = "";
    export let placeholder: $$Props["placeholder"] = undefined;
    export { className as class }

    $: items = $comboboxState[key].items;
    $: comboboxState.set(key, "results", new Fuse(items, {
        keys: ["name"],
        includeScore: true,
        threshold: 0.2
    }).search(searchValue).map((result) => result.item));

    $: if (searchValue === "") {
        $comboboxState[key].searchPerformed = false;
    } else {
        $comboboxState[key].searchPerformed = true;
    }

    $: console.log($comboboxState[key].results);
</script>

<div class="w-full flex items-center justify-start flex-shrink-0 relative mb-0.5 border-b h-10">
    <MagnifyingGlass class="w-4 h-4 text-muted-foreground z-[-1] absolute left-2.5" />
    <Input bind:value={searchValue} placeholder={placeholder || "Search..."} class="w-full pl-8 h-full border-none" />
</div>