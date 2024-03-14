<script lang="ts">
    import { onMount } from "svelte";
    import { codeToHtml, getHighlighter } from 'shiki';

    export let code: string;
    let className: string | undefined = undefined;
    export { className as class }
    let html;

    function getHtmlFromLocalStorage(code: string): string | null {
        const cachedHtml = localStorage.getItem(`codeHtml002_new_${code}`);
        return cachedHtml ? JSON.parse(cachedHtml) : null;
    }
    
    import dark from '$lib/assets/dark.json?raw'
    const darkTheme = JSON.parse(dark);

    function setHtmlInLocalStorage(code: string, html: string): void {
        localStorage.setItem(`codeHtml_new_${code}`, JSON.stringify(html));
    }

    onMount(async () => {
        if (code) {
            const cachedHtml = getHtmlFromLocalStorage(code);
            if (cachedHtml) {
                html = cachedHtml;
            } else {
                const highlighter = await getHighlighter({
                    themes: [darkTheme],
                    langs: ["svelte"]
                });

                html = await highlighter.codeToHtml(code, {
                    lang: "svelte",
                    theme: "Lambda Studio — Blackout"
                });
                setHtmlInLocalStorage(code, html);
            }
        }
    });
</script>

<div class="flex {className} flex-col shadow-class max-w-full relative w-full items-start justify-start text-[13px] h-auto">
    <div class="w-full overflow-auto p-5 bg-background rounded-lg border {html !== "" || undefined ? "" : 'pb-0'}">
        {#if html === undefined}
            <span class="w-full flex items-center justify-center text-muted-foreground text-[13px]">
                Loading...
            </span>
        {:else}
            {@html html}
        {/if}
    </div>
</div>