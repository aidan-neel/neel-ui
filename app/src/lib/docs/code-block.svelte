<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    import { cn } from "$library/utils";
    import { onMount } from "svelte";
    import { codeToHtml, getHighlighter } from "shiki";
    import Spinner from "$ui/spinner/spinner.svelte";
    import Button from "$ui/button";
    import Copy from "lucide-svelte/icons/copy";
    import Check from "lucide-svelte/icons/check";
    import { lightOrDarkMode } from "$lib/stores";

    let copying: boolean = false;

    type $$Props = {
        class?: string;
        code: string;
        lang?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let code: $$Props["code"];
    export let lang: $$Props["lang"];
    export { className as class };

    let htmlShown: string | undefined;

    import RawDarkJSON from "$lib/docs/misc/theme.json?raw";
    import RawLightJson from "$lib/docs/misc/light-theme.json?raw";
    const darkTheme = JSON.parse(RawDarkJSON);
    const lightTheme = JSON.parse(RawLightJson);

    async function getTheme() {
        try {
            const highlighter = await getHighlighter({
                themes: [darkTheme, lightTheme],
                langs: ["svelte", lang],
            });

            if (highlighter && code) {
                const html = await highlighter.codeToHtml(code, {
                    lang: lang ?? "svelte",
                    theme: `neel-ui-dark`,
                });

                htmlShown = html;
            } else {
                console.error("Highlighter or code is not ready");
            }
        } catch (error) {
            console.error("Error loading theme or highlighting code:", error);
        }
    }

    onMount(async () => {
        await getTheme();
    });

    $: getTheme(), $lightOrDarkMode;
</script>

<div
    {...$$restProps}
    class={cn(
        className,
        `relative text-[16px] overflow-auto max-h-[40rem] w-full rounded-lg flex items-start justify-start`,
    )}
>
    {#key htmlShown}
        {#if htmlShown === undefined}
            <div
                class="w-full flex items-center justify-center text-foreground-muted h-full"
            >
                <Spinner class="w-6 h-6 mr-2" />
                Loading...
            </div>
        {:else}
            {@html htmlShown}
        {/if}
    {/key}

    <Button
        on:click={() => {
            copying = true;
            navigator.clipboard
                .writeText(`npx neel-ui add ${name}`)
                .then(() => {
                    setTimeout(() => {
                        copying = false;
                    }, 1000);
                });
        }}
        variant="ghost"
        class="h-10 w-10 absolute hidden md:flex top-2 right-2"
    >
        {#if copying}
            <Check class="w-4 h-4 absolute text-foreground-muted" />
        {:else}
            <Copy class="w-4 h-4 absolute text-foreground-muted" />
        {/if}
    </Button>
</div>
