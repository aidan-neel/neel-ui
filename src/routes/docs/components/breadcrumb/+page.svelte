<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
</script>

<div class="doc-card-parent">
    <DocCard 
    component="breadcrumb"
    desc="Breadcrumb component designed for easy navigation within a page"
    header="Breadcrumb"
    >
        <Breadcrumb hidden={["Components"]} />
    </DocCard>
</div>