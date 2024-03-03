<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
</script>

<div class="flex flex-col">
    <DocCard 
    component="button"
    desc="Displays a basic button with various styles and variants"
    header="Button"
    >
        <Button>
            Button
        </Button>
    </DocCard>
</div>