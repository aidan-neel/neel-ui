<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import DocCard from '$lib/components/doc-card.svelte';
</script>

<div class="flex flex-col">
    <div class="mb-4">
        <h1 class="text-4xl font-bold">
            Button
        </h1>
        <p class="text-lg text-zinc-500">
            Displays a button element with a variety of styles.
        </p>
    </div>

    <DocCard>
        <Button>
            Click Me
        </Button>
    </DocCard>
</div>