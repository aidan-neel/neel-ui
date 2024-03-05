<script lang="ts"> 
    import { Badge } from '$lib/components/neel-ui/badge';
    import DocCard from '$lib/components/doc-card.svelte';
</script>

<div class="doc-card-parent">
    <DocCard 
    component="badge"
    desc="Displays a basic component that looks like a badge"
    header="Badge"
    >
        <Badge>
            Verified
        </Badge>
    </DocCard>
</div>