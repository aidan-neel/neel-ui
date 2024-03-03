<script lang="ts">
    import * as Tabs from "./neel-ui/tabs";
    import { examples } from "$lib/examples";
    import { codeToHtml } from 'shiki'
	import { onMount } from "svelte";
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    let heightClass: string = "h-[22.5rem]"
    let widthClass: string = "w-[45rem]"
    let className: string | undefined = undefined;
    let component: string;
    let componentDescription: string;
    let componentHeader: string;
    let showHeading: boolean = true;
    let showUsage: boolean = true;

    let html;
    
    onMount(async() => {
        const code = examples[component]
        html = await codeToHtml(code, {
            lang: "svelte",
            theme: "vesper"
        })
    })

    export { className as class, heightClass, widthClass, component, componentDescription as desc, componentHeader as header, showHeading, showUsage }
</script>

<div class='flex flex-col gap-3'>
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
    <div class={`${className} ${widthClass} ${heightClass} flex bg-secondary/20 items-center justify-center border rounded-xl`}>
        <slot></slot>
    </div>
    {#if showUsage}
        <div class='mt-2'>
            <h1 class="header_c border-b pb-4">
                Usage
            </h1>
            <div class={`${className} ${widthClass} ${heightClass} overflow-y-auto mb-24 overflow-x-auto min-h-[20rem] max-h-[25rem] mt-8 flex bg-secondary/20 items-center justify-center border rounded-xl`}>
                <pre class='h-full w-full p-4 items-start flex justify-start'>
                    {@html html}
                </pre>
            </div>
        </div>
    {/if}
</div>
