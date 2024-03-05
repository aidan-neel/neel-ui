<script lang="ts">
    import * as Tabs from "./neel-ui/tabs";
    import { Button } from "./neel-ui/button";

    import { Code, Image, Copy, CheckCircled } from 'radix-icons-svelte';

    import { onMount } from "svelte";
    import { codeToHtml } from 'shiki'

    export let code: string;
    export let showTriggers: boolean = true;
    let copying: boolean = false;
    let html: string
    export let defaultValue: string = "preview"

    onMount(async() => {
        html = await codeToHtml(code, {
            lang: "svelte",
            theme: "vesper",
        })
    })
</script>

<Tabs.Root value={defaultValue} class="w-full h-full p-4 fade-up">
    {#if showTriggers}
        <div class='relative'>
            <Tabs.Items class='bg-secondary-muted w-auto z-10 absolute top-0 right-0 p-1'>
                <Tabs.Trigger class='h-7 rounded-md' value="preview"><Image /></Tabs.Trigger>
                <Tabs.Trigger class="h-7 rounded-md" value="code"><Code /></Tabs.Trigger>
            </Tabs.Items>
        </div>
    {/if}
    <Tabs.Content value="preview">
        <div class="flex flex-col items-center justify-center h-auto min-h-[20rem] p-8 py-16">
            <slot />
        </div>
    </Tabs.Content>
    <Tabs.Content value="code" class="w-full relative">
        <div class="flex flex-col shadow-sm max-w-full relative w-full items-start justify-start p-1 text-[13px] h-auto">
            <div class="w-full overflow-auto pb-2">
                {@html html}
            </div>
            <Button on:click={() => {
                navigator.clipboard.writeText(code)
                copying = true;
                setTimeout(() => {
                    copying = false;
                }, 1000);
            }} variant="ghost" class="absolute bg-secondary-muted top-0 right-0">
                {#if copying}
                    <CheckCircled class="w-4 h-4" />
                {:else}
                    <Copy class="w-4 h-4" />
                {/if}
            </Button>
        </div>
    </Tabs.Content>
</Tabs.Root>