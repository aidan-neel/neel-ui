<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';
    import * as DropdownMenu from '$lib/components/neel-ui/dropdown-menu';
    import DropdownMenuExample from '$lib/components/examples/dropdown-menu-example.svelte';
    </script>

<Seo name="dropdown menu" />

<div class="doc-card-parent">
    <DocCard
    component="dropdown-menu"
    desc="Dropdown Menu component designed for showing a list of options when a user clicks on a trigger button."
    header="Dropdown Menu"
    >   
        <DropdownMenuExample />
    </DocCard>
    <NextDoc />
</div>