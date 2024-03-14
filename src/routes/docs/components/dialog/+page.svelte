<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';
    import * as Dialog from '$lib/components/neel-ui/dialog';
    import { Input } from '$lib/components/neel-ui/input'
    import { Button } from '$lib/components/neel-ui/button'
    import DialogExample from '$lib/components/examples/dialog-example.svelte';
</script>

<Seo name="dialog" />

<div class="doc-card-parent">
    <DocCard 
    component="dialog"
    desc="A dialog is a type of modal window that appears to provide critical information or ask for a decision"
    header="Dialog"
    >
        <DialogExample />
    </DocCard>
    <NextDoc />
</div>