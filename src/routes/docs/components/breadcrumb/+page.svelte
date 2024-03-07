<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
</script>

<Seo name="breadcrumb" />

<div class="doc-card-parent">
    <DocCard 
    component="breadcrumb"
    desc="Breadcrumb component designed for easy navigation within a page"
    header="Breadcrumb"
    >
        <Breadcrumb hidden={["components"]} />
    </DocCard>
</div>