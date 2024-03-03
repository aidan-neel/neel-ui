<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
	import * as Select from '$lib/components/neel-ui/select';

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" }
    ];
</script>

<div class="flex flex-col">
    <div class="mb-4">
        <Breadcrumb hidden={["Components"]} />
        <h1 class="header_c">
            Select
        </h1>
        <p class="description_c">
            A selection component displaying a list of items to choose from
        </p>
    </div>
    
    <DocCard>
        <Select.Root>
            <Select.Trigger class='w-[180px]'>
                Select a fruit
            </Select.Trigger>
            <Select.Content class="w-full">
                <Select.Group items={fruits}>
                    <Select.Label>
                        Fruits
                    </Select.Label>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    </DocCard>
</div>