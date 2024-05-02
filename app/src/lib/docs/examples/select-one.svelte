<script lang="ts">
    import * as Select from "$ui/select";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import Button from "$ui/button";

    let breeds = [
        "Golden Retriever",
        "Labrador Retriever",
        "German Shepherd",
        "French Bulldog",
        "Bulldog",
    ];

    let selected: string;
</script>

<Select.Root>
    <Select.Trigger let:data>
        <Button
            variant="outlined"
            {data}
            class="justify-between px-3 flex flex-row sm:w-[225px] w-[65vw]"
        >
            {selected || "Select a breed"}
            <ChevronDown class="w-4 h-4 ml-2" />
        </Button>
    </Select.Trigger>
    <Select.Content bind:selected class="sm:w-[225px] w-[65vw]">
        {#each breeds as breed}
            <Select.Item item={breed} />
        {/each}
    </Select.Content>
</Select.Root>
