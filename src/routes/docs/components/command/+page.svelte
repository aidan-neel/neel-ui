<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
    import * as Command from '$lib/components/neel-ui/command';
    import { Label } from '$lib/components/neel-ui/shortcut';
    import CommandExample from '$lib/components/examples/command-example.svelte';

    function handleClick() {
        console.log('clicked');
    }
</script>

<Seo name="command" />

<div class="doc-card-parent">
    <DocCard 
    component="command"
    desc="Command component for searching and executing commands within a page"
    header="Command"
    >
        <CommandExample />
    </DocCard>
</div>