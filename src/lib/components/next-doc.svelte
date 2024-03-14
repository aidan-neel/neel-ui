<script lang="ts">
    import { components, sanitizeComponent } from '$lib/navbar';
    import { page } from '$app/stores';
    import { Button } from '$lib/components/neel-ui/button';
    import ChevronRight from 'svelte-radix/ChevronRight.svelte';
    import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';

    $: route = $page.url.pathname.split("/")[3];
    // Alphabetically sort the components
    components.sort((a, b) => a.localeCompare(b));
    $: currIndex = components.indexOf(route);

    let prevIndex;
    let nextIndex;
    
    // If there is a next or previous component, set the prevIndex and nextIndex
    $: if(currIndex > 0) {
        prevIndex = currIndex - 1;
    } else {
        prevIndex = currIndex;
    }

    $: if(currIndex < components.length - 1) {
        nextIndex = currIndex + 1;
    } else {
        nextIndex = currIndex;
    }

    
</script>

<div class="w-full h-[10rem] mt-8 flex flex-row justify-between gap-4">
    <Button href={`/docs/components/${components[prevIndex]}`} variant="secondary">
        <ChevronLeft class="w-4 h-4 mr-2" />
        {sanitizeComponent(components[prevIndex])}
    </Button>
    <Button href={`/docs/components/${components[nextIndex]}`} variant="secondary">
        {sanitizeComponent(components[nextIndex])}
        <ChevronRight class="w-4 h-4 ml-2" />
    </Button>
</div>