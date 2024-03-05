<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person, Image, Code, Copy, CheckCircled } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import ExampleCard from '$lib/components/example-card.svelte';
    import * as Tabs from '$lib/components/neel-ui/tabs';
    import { codeToHtml } from 'shiki'
    import { onMount } from "svelte";
    import buttonExamples from './button';
    import VariantCard from '$lib/components/variant-card.svelte';

    let primaryHtml;
    let secondaryHtml;
    let linkHtml;
    let ghostHtml;
    let copying = false;
    
    onMount(async() => {
        primaryHtml = await codeToHtml(buttonExamples["primary"], {
            lang: "svelte",
            theme: "vesper"
        })
    })
</script>

<div class="doc-card-parent">
    <DocCard 
    component="button"
    desc="Displays a basic button with various styles and variants"
    header="Button"
    >
        <Button>
            Button
        </Button>
    </DocCard>
    <h1 class="pb-4 mt-8 border-b header_2nd">
        Variants
    </h1>
    
    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Primary
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted relative rounded-lg border mt-4">
        <VariantCard code={buttonExamples["primary"]}>
            <Button variant="primary">
                Primary
            </Button>
        </VariantCard>
    </div>



    <div class="mt-8"></div>
    <h3 class="text-xl font-semibold pt-4 border-t">
        Secondary
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted relative rounded-lg border mt-4">
        <VariantCard code={buttonExamples["secondary"]}>
            <Button variant="secondary">
                Secondary
            </Button>
        </VariantCard>
    </div>



    <div class="mt-8"></div>
    <h3 class="text-xl font-semibold pt-4 border-t">
        Ghost
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted relative rounded-lg border mt-4">
        <VariantCard code={buttonExamples["ghost"]}>
            <Button variant="ghost">
                Ghost
            </Button>
        </VariantCard>
    </div>



    <div class="mt-8"></div>
    <h3 class="text-xl font-semibold pt-4 border-t">
        Link
    </h3>
    <h2 class="description_c">
        Pass an href prop to make the button act as a link
    </h2>
    <div class="w-full flex items-center justify-center bg-secondary-muted relative rounded-lg border mt-4 mb-96">
        <VariantCard code={buttonExamples["link"]}>
            <Button variant="link">
                Link
            </Button>
        </VariantCard>
    </div>
</div>