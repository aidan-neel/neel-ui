<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import { Button } from '$lib/components/neel-ui/button';
    import { ToastAction, Toast } from '$lib/components/neel-ui/toast'
  import ToastExample from '$lib/components/examples/toast-example.svelte';
</script>

<Seo name="toast" />

<div class="doc-card-parent">
    <DocCard 
    component="toast"
    desc=""
    header="Toast"
    >
        <ToastExample />
    </DocCard>
    <NextDoc />
</div>