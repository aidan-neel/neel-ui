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
    
    // Export
    export {
        className as class,
    }
</script>

<div class="flex flex-row items-center border-b pr-1">
    <MagnifyingGlass class="w-5 h-5 text-muted-foreground mx-3 ml-4" />
    <Input bind:value={searchValue} class="w-full border-none bg-transparent bg-none focus:border-none pl-0 h-12" placeholder="Type a command or search..." />
</div>