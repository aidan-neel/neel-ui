<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Combobox from '$lib/components/neel-ui/combobox';
    import CaretSort from 'svelte-radix/CaretSort.svelte';

    const Companies = [
        { value: "microsoft", label: "Microsoft" },
        { value: "apple", label: "Apple" },
        { value: "google", label: "Google" },
        { value: "facebook", label: "Facebook" },
        { value: "amazon", label: "Amazon" },
        { value: "netflix", label: "Netflix" },
        { value: "tesla", label: "Tesla" },
        { value: "twitter", label: "Twitter" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "uber", label: "Uber" }
    ]
</script>

<Combobox.Root>
    <Combobox.Trigger let:data let:label>
        <Button variant="secondary" data={data} class="w-[200px] justify-between flex">
            {label || "Select a company"}
            <CaretSort class="w-4 h-4 text-muted-foreground" />
        </Button>
    </Combobox.Trigger>
    <Combobox.Content class="w-full h-auto">
        <Combobox.Search placeholder="Search companies..." />
        <Combobox.Empty>
            No results found
        </Combobox.Empty>
        <Combobox.Results>
            {#each Companies as company}
                <Combobox.Item value={company.value} label={company.label} />
            {/each}
        </Combobox.Results>
    </Combobox.Content>
</Combobox.Root>