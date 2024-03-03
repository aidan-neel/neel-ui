<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
</script>

<div class="flex flex-col">
    <div class="mb-4">
        <Breadcrumb hidden={["Components"]} />
        <h1 class="header_c">
            Button
        </h1>
        <p class="description_c">
            Displays a button element with a variety of styles.
        </p>
    </div>
    
    <DocCard>
        <Button>
            Button
        </Button>
    </DocCard>
</div>