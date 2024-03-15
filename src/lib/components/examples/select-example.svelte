<script lang="ts">
    import * as Select from '$lib/components/neel-ui/select';

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
    ];

    let value;
</script>

<Select.Root bind:value>
    <Select.Trigger class='w-[170px]'>
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