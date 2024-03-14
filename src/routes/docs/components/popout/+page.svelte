<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';
    import * as Popout from '$lib/components/neel-ui/popout'
    import { Button } from '$lib/components/neel-ui/button'
    import { Input } from '$lib/components/neel-ui/input'
  import PopoutExample from '$lib/components/examples/popout-example.svelte';
</script>

<Seo name="popout" />

<div class="doc-card-parent">
    <DocCard 
    component="popout"
    desc="Popout displays a rich content in a popout window."
    header="Popout"
    >
        <PopoutExample />
    </DocCard>
    <NextDoc />
</div>