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
    import { page } from "$app/stores";

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
    let builtOnTopOf: builtOnTop | undefined = undefined;
    let selectedTab;
    $: console.log(selectedTab);

    let path = $page.url.pathname;

    interface builtOnTop {
        name: string;
        link: string;
    }
    
    export { className as class, heightClass, widthClass, component, componentDescription as desc, componentHeader as header, showHeading, showUsage, showInstallation, builtOnTopOf }
</script>

{#key path}
<div class='flex flex-col gap-3 {showHeading ? 'lg:mt-24 mt-32' : ''} xl:max-w-[45rem]'>
    {#if showHeading}
        <div class="mb-4  ">
            <Breadcrumb hidden={["components"]} />
            {#key componentHeader}
                <h1 in:fade={{ duration: 2200 }} class="header_c">
                    {componentHeader}
                </h1>
            {/key}
            <p transition:fade={{duration:100}} class="description_c">
                {componentDescription}
            </p>
            <div class="flex flex-col sm:flex-row gap-2 mt-3">
                <a transition:fade={{duration:100}} href={`https://github.com/aidan-neel/neel-ui/tree/main/src/lib/components/neel-ui/${component}`} class="w-auto">
                    <Badge variant="secondary" class="flex flex-row items-center max-w-[10rem] w-auto h-6 justify-center gap-1">
                        <Code class="w-4 h-4" /> Component Source
                    </Badge>
                </a>
                {#if builtOnTopOf}
                    <a href={builtOnTopOf?.link} class="w-auto">
                        <Badge variant="secondary" class="flex flex-row items-center max-w-[10rem] w-auto h-6 justify-center gap-1">
                            <Code class="w-4 h-4" /> {builtOnTopOf?.name}
                        </Badge>
                    </a>
                {/if}
            </div>
        </div>
    {/if}
    <div class="xl:max-w-[45rem]   xl:max-w-[45rem] flex items-center justify-center {selectedTab === "preview" ? 'bg-background' : 'bg-background'} shadow-class rounded-lg border mt-4">
        <VariantCard defaultValue="preview" bind:value={selectedTab} code={examples[component]}>
            <slot />
        </VariantCard>
    </div>
    {#if showInstallation}
        <h1 class="pb-4 mt-8 border-b tracking-tighter header_2nd  ">
            Installation
        </h1>
        <div in:fade={{ duration: 100 }} class="xl:max-w-[45rem] flex items-center   justify-start  font-mono text-[13px] p-4 bg-background shadow-class relative rounded-lg border mt-4">
            <span class="text-[#777879] mr-2">npx</span> neel-ui <span class="text-[#777879] mx-2">add</span> {component}
            <Button on:click={() => {
                navigator.clipboard.writeText(`npx neel-ui add ${component}`)
                copying = true;
                setTimeout(() => {
                    copying = false;
                }, 1000);
            }} variant="ghost" class="absolute bg-background shadow-class rounded-md right-1.5">
                {#if copying}
                    <CheckCircled class="w-4 h-4" />
                {:else}
                    <Copy class="w-4 h-4" />
                {/if}
            </Button>
        </div>
    {/if}
    {#if showUsage}
        <h1 class="pb-4 mt-8 border-b header_2nd  ">
            Usage
        </h1>
        <div class="xl:max-w-[45rem] flex items-center   justify-center bg-background shadow-class relative rounded-lg border mt-4">
            <VariantCard code={examples[component]} defaultValue="code" showTriggers={false}>
                <slot />
            </VariantCard>
        </div>
    {/if}
</div>

{/key}