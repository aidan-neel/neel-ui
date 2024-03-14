<script lang="ts"> 
    import { Badge } from '$lib/components/neel-ui/badge';
    import DocCard from '$lib/components/doc-card.svelte';
    import VariantCard from '$lib/components/variant-card.svelte';
    import { badgeExamples } from './badge';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="badge" />

<div class="doc-card-parent">
    <DocCard 
    component="badge"
    desc="Displays a basic component that looks like a badge"
    header="Badge"
    >
        <Badge variant="primary">
            Verified
        </Badge>
    </DocCard>
    <h1 class="pb-4 mt-8 border-b header_2nd">
        Variants
    </h1>
    
    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Primary
    </h3>
    <div class="w-full flex items-center justify-center bg-background shadow-class relative rounded-lg border mt-4">
        <VariantCard code={badgeExamples["primary"]}>
            <Badge variant="primary">
                Primary
            </Badge>
        </VariantCard>
    </div>



    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Secondary
    </h3>
    <div class="w-full flex items-center justify-center bg-background shadow-class relative rounded-lg border mt-4">
        <VariantCard code={badgeExamples["secondary"]}>
            <Badge variant="secondary">
                Secondary
            </Badge>
        </VariantCard>
    </div>



    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Ghost
    </h3>
    <div class="w-full flex items-center justify-center bg-background shadow-class relative rounded-lg border mt-4">
        <VariantCard code={badgeExamples["ghost"]}>
            <Badge variant="ghost">
                Ghost
            </Badge>
        </VariantCard>
    </div>

    <NextDoc />
</div>