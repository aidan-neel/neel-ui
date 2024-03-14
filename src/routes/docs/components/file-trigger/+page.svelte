<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import FileExample from '$lib/components/examples/file-example.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="file trigger" />

<div class="doc-card-parent">
    <DocCard 
    component="file-trigger"
    desc="File Trigger for selecting files."
    header="File Trigger"
    >
        <FileExample />
    </DocCard>
    <NextDoc />
</div>