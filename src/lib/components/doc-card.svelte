<script lang="ts">
    import * as Tabs from "./neel-ui/tabs";
    import { examples } from "$lib/examples";
    import { codeToHtml } from 'shiki';
	import { onMount } from "svelte";
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Button } from '$lib/components/neel-ui/button';
    import { Badge } from '$lib/components/neel-ui/badge';
    import Copy from 'svelte-radix/Copy.svelte';
    import Code from 'svelte-radix/Code.svelte';
    import CheckCircled from 'svelte-radix/CheckCircled.svelte';
    import { fade } from "svelte/transition";
    import VariantCard from "./variant-card.svelte";

    let heightClass: string = "h-[22.5rem]";
    let widthClass: string = "lg:w-[45rem] xl:max-w-[45rem]";
    let className: string | undefined = undefined;
    let component: string;
    let componentDescription: string;
    let componentHeader: string;
    let showHeading: boolean = true;
    let showUsage: boolean = true;
    let copying: boolean = false;
    let showInstallation: boolean = true;
    
    export { className as class, heightClass, widthClass, component, componentDescription as desc, componentHeader as header, showHeading, showUsage, showInstallation }
</script>

<div class='flex flex-col gap-3 {showHeading ? 'lg:mt-24 mt-32' : ''} xl:max-w-[45rem]'>
    {#if showHeading}
        <div class="mb-4 fade-up">
            <Breadcrumb hidden={["components"]} />
            <h1 class="header_c">
                {componentHeader}
            </h1>
            <p class="description_c">
                {componentDescription}
            </p>
            <a href={`https://github.com/aidan-neel/neel-ui/tree/main/src/lib/components/neel-ui/${component}`} class="w-auto">
                <Badge variant="secondary" class="flex flex-row items-center max-w-[14rem] w-auto justify-center gap-1 mt-3">
                    <Code class="w-4 h-4" /> Component Source
                </Badge>
            </a>
        </div>
    {/if}
    <div class="xl:max-w-[45rem] fade-up xl:max-w-[45rem] flex items-center justify-center bg-secondary-muted shadow-class rounded-lg border mt-4">
        <VariantCard code={examples[component]}>
            <slot />
        </VariantCard>
    </div>
    {#if showInstallation}
        <h1 class="pb-4 mt-8 border-b tracking-tighter header_2nd fade-up">
            Installation
        </h1>
        <div class="xl:max-w-[45rem] flex items-center fade-up justify-start  font-mono text-[13px] p-4 bg-secondary-muted shadow-class relative rounded-lg border mt-4">
            <span class="text-[#6fb7a4] mr-2">npx</span> neel-ui <span class="text-[#6fb7a4] mx-2">add</span> {component}
            <Button on:click={() => {
                navigator.clipboard.writeText(`npx neel-ui add ${component}`)
                copying = true;
                setTimeout(() => {
                    copying = false;
                }, 1000);
            }} variant="ghost" class="absolute bg-secondary-muted shadow-class rounded-md right-1.5">
                {#if copying}
                    <CheckCircled class="w-4 h-4" />
                {:else}
                    <Copy class="w-4 h-4" />
                {/if}
            </Button>
        </div>
    {/if}
    {#if showUsage}
        <h1 class="pb-4 mt-8 border-b header_2nd fade-up">
            Usage
        </h1>
        <div class="xl:max-w-[45rem] flex items-center fade-up justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
            <VariantCard code={examples[component]} defaultValue="code" showTriggers={false}>
                <slot />
            </VariantCard>
        </div>
    {/if}
</div>
