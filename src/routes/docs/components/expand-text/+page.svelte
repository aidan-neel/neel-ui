<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import ExpandExample from '$lib/components/examples/expand-example.svelte'
</script>

<Seo name="expand text" />

<div class="doc-card-parent">
    <DocCard 
    component="expand-text"
    desc="Expands hidden text on click."
    header="Expand Text"
    >
        <ExpandExample />
    </DocCard>
    <NextDoc />
</div>