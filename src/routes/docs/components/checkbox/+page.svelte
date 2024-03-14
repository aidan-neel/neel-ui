<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
  import CheckboxExample from '$lib/components/examples/checkbox-example.svelte';
    import { Checkbox } from '$lib/components/neel-ui/checkbox';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';
    let checked = false;
</script>

<Seo name="checkbox" />

<div class="doc-card-parent">
    <DocCard 
    component="checkbox"
    desc="Checkbox which can be used to select or deselect an option"
    header="Checkbox"
    >
        <CheckboxExample />
    </DocCard>
    <NextDoc />
</div>