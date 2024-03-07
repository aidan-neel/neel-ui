<script lang="ts">
    import { getContext } from "svelte";
    import { commandState } from ".";
    import * as Command from ".";
    import { Label } from "../shortcut";
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key;
    
    $: results = $commandState[Key].results;
    $: searchPerformed = $commandState[Key].searchPerformed; // Assuming this flag exists and is managed accordingly

    // Group results by heading
    $: groupedResults = results.reduce((acc, result) => {
        const heading = result.heading || 'default'; // Adjust as needed
        if (!acc[heading]) {
            acc[heading] = [];
        }
        acc[heading].push(result);
        return acc;
    }, {});

    $: isEmpty = Object.keys(groupedResults).length === 0 || Object.values(groupedResults).every(group => group.length === 0);

    // Export
    export {
        className as class,
    }
</script>

<div class={cn(className, ` w-full`)}>
    {#if isEmpty}
        {#if searchPerformed}
            <Command.Empty />
        {:else}
            <slot />
        {/if}
    {:else}
        {#each Object.entries(groupedResults) as [heading, items]}
            {#if items.length > 0}
                <Command.Group heading={heading === 'default' ? undefined : heading}>
                    {#each items as item}
                        <Command.Item onclick={() => {
                            item.callback();
                            commandState.set(Key, "open", false);
                        }} icon={item.icon} shortcut={item.shortcut} name={item.name}>
                            <span class="flex flex-row items-center justify-center">
                                {#if item.icon}
                                    <svelte:component this={item.icon} class="mr-2 h-4 w-4" />
                                {/if}
                                {#if item.label !== undefined}
                                    {item.label}
                                {:else}
                                    {item.name.replace(/\b\w/g, (c) => c.toUpperCase())}
                                {/if}
                            </span>
                            {#if item.shortcut}
                                <Label>{item.shortcut}</Label>
                            {/if}
                        </Command.Item>
                    {/each}
                </Command.Group>
            {/if}
        {/each}
    {/if}
</div>
