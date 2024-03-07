<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { Input } from "$lib/components/neel-ui/input";
    import { MagnifyingGlass } from "radix-icons-svelte";
    import { commandState } from ".";
    import Fuse from 'fuse.js'

    // Exported variables
    let className: string | undefined = undefined;

    // Non-exported variables
    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key;
    let searchValue: string = "";
    
    $: items = $commandState[Key].items;
    $: commandState.set(Key, "results", new Fuse(items, {
        keys: ["name"],
        includeScore: true,
        threshold: 0.1
    }).search(searchValue).map((result) => result.item));

    $: commandState.set(Key, "searchPerformed", searchValue.length > 0);
    
    // Export
    export {
        className as class,
    }
</script>

<style>
    .important-bg {
        background-color: transparent !important;
    }
</style>

<div class="flex flex-row items-center border-b pr-1">
    <MagnifyingGlass class="w-5 h-5 text-muted-foreground z-20 left-4 absolute" />
    <Input bind:value={searchValue} class="w-full border-none bg-opacity-0 shadow-none focus:border-none pl-12 h-12 important-bg " placeholder="Type a command or search..." />
</div>