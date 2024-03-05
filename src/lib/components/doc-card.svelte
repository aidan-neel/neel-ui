<script lang="ts">
    import * as Tabs from "./neel-ui/tabs";
    import { examples } from "$lib/examples";
    import { codeToHtml } from 'shiki'
	import { onMount } from "svelte";
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Button } from '$lib/components/neel-ui/button';
    import { Check, Copy, Image, Code } from "radix-icons-svelte";
    import VariantCard from "./variant-card.svelte";
    let heightClass: string = "h-[22.5rem]"
    let widthClass: string = "lg:w-[45rem] lg:max-w-[45rem]"
    let className: string | undefined = undefined;
    let component: string;
    let componentDescription: string;
    let componentHeader: string;
    let showHeading: boolean = true;
    let showUsage: boolean = true;
    let copying: boolean = false;

    let usageCode;
    
    onMount(async() => {
        const code = examples[component]
        usageCode = await codeToHtml(code, {
            lang: "svelte",
            theme: "vesper"
        })
    })

    export { className as class, heightClass, widthClass, component, componentDescription as desc, componentHeader as header, showHeading, showUsage }
</script>

<div class='flex flex-col gap-3 mt-24 lg:max-w-[45rem]'>
    {#if showHeading}
        <div class="mb-4">
            <Breadcrumb hidden={["Components"]} />
            <h1 class="header_c">
                {componentHeader}
            </h1>
            <p class="description_c">
                {componentDescription}
            </p>
        </div>
    {/if}
    <div class="lg:max-w-[45rem] lg:max-w-[45rem] flex items-center justify-center bg-secondary-muted rounded-lg border mt-4">
        <VariantCard code={examples[component]}>
            <slot />
        </VariantCard>
    </div>
    {#if showUsage}
        <h1 class="pb-4 mt-8 border-b header_2nd">
            Usage
        </h1>
        <div class="lg:max-w-[45rem] flex items-center justify-center bg-secondary-muted relative rounded-lg border mt-4">
            <VariantCard code={examples[component]} defaultValue="code" showTriggers={false}>
                <slot />
            </VariantCard>
        </div>
    {/if}
</div>
