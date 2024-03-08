<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import * as Select from '$lib/components/neel-ui/select';
    import { selectState } from '$lib/components/neel-ui/select';
    import Seo from '$lib/components/seo.svelte';

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" },
        { value: "strawberry", label: "Strawberry" },
        { value: "watermelon", label: "Watermelon" }
    ];

    let key: string
    $: selectedValue = $selectState[key]?.selectedValue; // Reactive statement to fetch selected value
</script>

<Seo name="select" />

<div class="doc-card-parent">
    <DocCard 
    component="select"
    desc="Selection component with groups of items to choose from"
    header="Select"
    >
        <Select.Root bind:key>
            <Select.Trigger class='w-[250px]'>
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