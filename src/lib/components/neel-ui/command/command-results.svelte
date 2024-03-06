<script lang="ts">
    import { getContext } from "svelte";
    import { commandState } from ".";
    import * as Command from ".";
    import { Label } from "../shortcut";

    let className: string | undefined = undefined;
    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key;
    
    $: results = $commandState[Key].results;

    // Group results by heading
    $: groupedResults = results.reduce((acc, result) => {
        const heading = result.heading || undefined; // Use 'default' or any other fallback for items without a heading
        if (!acc[heading]) {
            acc[heading] = [];
        }
        acc[heading].push(result);
        return acc;
    }, {});

    $: console.log($commandState[Key], Key);

    // Export
    export {
        className as class,
    }
</script>

<div class="{className} w-full">
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
    {#if Object.keys(groupedResults).length === 0}
        <slot />
    {/if}
</div>