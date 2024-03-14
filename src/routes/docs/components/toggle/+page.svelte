<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import { Toggle } from '$lib/components/neel-ui/toggle';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import VariantCard from '$lib/components/variant-card.svelte';
    import { toggleExamples } from './toggle';

    let toggle: boolean = false;
    $: console.log(toggle)
</script>

<Seo name="toggle" />

<div class="doc-card-parent">
    <DocCard 
    component="toggle"
    desc="A toggle component that can be used to switch between two states."
    header="Toggle"
    >
        <Toggle bind:toggled={toggle} aria-label="toggled">
            Toggle
        </Toggle>
    </DocCard>
    <h1 class="pb-4 mt-8 border-b header_2nd">
        Variants
    </h1>

    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Primary
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={toggleExamples["primary"]}>
            <Toggle variant="primary" aria-label="toggled">
                Primary
            </Toggle>
        </VariantCard>
    </div>

    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Secondary
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={toggleExamples["secondary"]}>
            <Toggle variant="secondary" aria-label="toggled">
                Secondary
            </Toggle>
        </VariantCard>
    </div>

    <NextDoc />
</div>