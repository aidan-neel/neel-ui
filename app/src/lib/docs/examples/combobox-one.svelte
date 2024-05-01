<script lang="ts">
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import Button from "$ui/button";
    import * as Combobox from "$ui/combobox";

    let breeds = [
        "Golden Retriever",
        "Labrador Retriever",
        "German Shepherd",
        "French Bulldog",
        "Bulldog",
    ];

    let selected;
</script>

<Combobox.Root>
    <Combobox.Trigger let:data let:item class="w-[250px]">
        <Button
            {data}
            variant="outlined"
            class="justify-between px-3 flex flex-row w-full"
        >
            {item || "Select a breed"}
            <ChevronsUpDown class="w-4 h-4 text-foreground-muted" />
        </Button>
    </Combobox.Trigger>
    <Combobox.Content bind:selected class="w-[250px]">
        <Combobox.Search />
        <Combobox.Results>
            <div slot="empty" class="px-4 py-2 w-full text-foreground-muted">
                No breeds found
            </div>
            {#each breeds as breed}
                <Combobox.Item item={breed} />
            {/each}
        </Combobox.Results>
    </Combobox.Content>
</Combobox.Root>
