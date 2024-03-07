<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';

    let val = ""; // Input value
</script>

<Seo name="input" />

<div class="doc-card-parent">
    <DocCard 
    component="input"
    desc="An input component with an optional label"
    header="Input"
    >
        <div class="w-full flex flex-col items-center justify-center">
            <Input bind:value={val} type="text" placeholder="Input" label="Input" class="w-[250px]" />
        </div>
    </DocCard>
</div>