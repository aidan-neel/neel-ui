<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'

    let val = ""; // Input value
</script>

<div class="doc-card-parent">
    <DocCard 
    component="input"
    desc="An input component with an optional label"
    header="Input"
    >
        <Input bind:value={val} placeholder="Input" label="Input" class="w-[250px]" />
    </DocCard>
</div>