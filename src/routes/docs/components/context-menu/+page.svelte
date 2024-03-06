<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
    import * as ContextMenu from '$lib/components/neel-ui/context-menu';
    import { Label } from '$lib/components/neel-ui/shortcut';
  import ContextMenuExample from '$lib/components/examples/context-menu-example.svelte';

    function click() {
        console.log('Clicked!');
    }
</script>

<Seo name="context menu" />

<div class="doc-card-parent">
    <DocCard 
    component="context-menu"
    desc="Context Menu is a type of menu that appears upon right clicking on an element."
    header="Context Menu"
    >
        <ContextMenuExample />
    </DocCard>
</div>