<script lang="ts">
    import * as Tabs from "./neel-ui/tabs";
    import { Button } from "./neel-ui/button";
    import Code from 'svelte-radix/Code.svelte';
    import Image from 'svelte-radix/Image.svelte';
    import Copy from 'svelte-radix/Copy.svelte';
    import CheckCircled from 'svelte-radix/CheckCircled.svelte';
    import { onMount } from "svelte";
    import { codeToHtml } from 'shiki';
    import { fade } from 'svelte/transition';

    export let code: string;
    export let showTriggers: boolean = true;
    let copying: boolean = false;
    let html: string = "";
    export let defaultValue: string = "preview";

    function getHtmlFromLocalStorage(code: string): string | null {
        const cachedHtml = localStorage.getItem(`codeHtml_${code}`);
        return cachedHtml ? JSON.parse(cachedHtml) : null;
    }

    function setHtmlInLocalStorage(code: string, html: string): void {
        localStorage.setItem(`codeHtml_${code}`, JSON.stringify(html));
    }

    onMount(async () => {
        if (code) {
            const cachedHtml = getHtmlFromLocalStorage(code);
            if (cachedHtml) {
                html = cachedHtml;
            } else {
                html = await codeToHtml(code, {
                    lang: "svelte",
                    theme: "vesper"
                });
                setHtmlInLocalStorage(code, html);
            }
        }
    });
</script>


<Tabs.Root value={defaultValue} class="w-full h-full p-4 fade-up">
    {#if showTriggers}
        <div class='relative'>
            <Tabs.Items class='bg-background shadow-class w-auto z-10 absolute top-0 right-0 p-1'>
                <Tabs.Trigger class='h-7 rounded-md' value="preview"><Image class="w-4 h-4" /></Tabs.Trigger>
                <Tabs.Trigger class="h-7 rounded-md" value="code"><Code class="w-4 h-4" /></Tabs.Trigger>
            </Tabs.Items>
        </div>
    {/if}
    <Tabs.Content value="preview">
        <div class="flex flex-col items-center justify-center h-auto min-h-[20rem] p-8 py-16">
            <slot />
        </div>
    </Tabs.Content>
    <Tabs.Content value="code" class="w-full relative">
        <div class="flex flex-col shadow-class max-w-full relative w-full items-start justify-start p-1 text-[13px] h-auto">
            <div class="w-full overflow-auto {html !== "" || undefined ? "pb-2" : 'pb-0'}">
                {#if html === undefined}
                    <span class="w-full flex items-center justify-center text-muted-foreground text-[13px]">
                        Loading...
                    </span>
                {:else}
                    {@html html}
                {/if}
            </div>
            {#if html !== "" || undefined}
                <Button on:click={() => {
                    navigator.clipboard.writeText(code)
                    copying = true;
                    setTimeout(() => {
                        copying = false;
                    }, 1000);
                }} variant="ghost" class="absolute bg-secondary-muted shadow-class top-0 right-0">
                    {#if copying}
                        <CheckCircled class="w-4 h-4" />
                    {:else}
                        <Copy class="w-4 h-4" />
                    {/if}
                </Button>
            {/if}
        </div>
    </Tabs.Content>
</Tabs.Root>