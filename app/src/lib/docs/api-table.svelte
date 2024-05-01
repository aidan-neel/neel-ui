<script lang="ts">
    export let data;
    import InputType from "./tooltips/InputType.svelte";
    import Placement from "./tooltips/Placement.svelte";

    // Assuming data is structured as mentioned
    const { attributes, types, descriptions, defaults, parents } = data;
</script>

<!-- Table Header -->
<div
    class="w-full bg-preview text-foreground p-4 mt-4 rounded-lg border-default"
>
    <div
        class="grid grid-cols-4 gap-4 md:text-base text-sm font-medium text-foreground-muted"
    >
        <div>Attribute</div>
        <div>Type</div>
        <div>Description</div>
        <div>Parent</div>
    </div>
</div>

<!-- Table Body -->
<div class="w-full flex flex-col text-foreground p-4">
    {#each attributes as attribute, index}
        <div class="grid grid-cols-4 gap-4 py-2 md:text-base text-sm">
            <div class="text-foreground-muted">{attribute}</div>
            {#if types[index] === "PlacementComponent"}
                <div>
                    <Placement />
                </div>
            {:else if types[index] === "InputTypeComponent"}
                <InputType />
            {:else}
                <div class="text-foreground">{types[index]}</div>
            {/if}
            <div class="text-foreground-muted">{descriptions[index]}</div>
            <div class="text-foreground">{parents[index]}</div>
        </div>
    {/each}
</div>
