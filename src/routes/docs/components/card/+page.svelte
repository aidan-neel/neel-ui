<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Card from '$lib/components/neel-ui/card';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';
import CardExample from '$lib/components/examples/card-example.svelte';
</script>

<Seo name="card" />

<div class="doc-card-parent">
    <DocCard 
    component="card"
    desc="A card component with header and description sub-components"
    header="Card"
    heightClass="h-[30rem]"
    >
        <CardExample />
    </DocCard>
    <NextDoc />
</div>