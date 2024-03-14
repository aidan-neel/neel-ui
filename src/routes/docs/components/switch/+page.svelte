<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import SwitchExample from '$lib/components/examples/switch-example.svelte';
</script>

<Seo name="switch" />

<div class="doc-card-parent">
    <DocCard 
    component="switch"
    desc="Pill switch component for toggling between two states."
    header="Switch"
    >
        <SwitchExample />
    </DocCard>
    <NextDoc />
</div>