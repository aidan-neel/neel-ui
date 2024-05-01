<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import CodeBlock from "./code-block.svelte";
    import LoaderCircle from "lucide-svelte/icons/loader-circle";

    export let name: string;

    let RawComponentExample: string;
    let isLoading = true; // Loading state

    import(`$lib/docs/examples/${name}.svelte?raw`)
        .then((module) => {
            RawComponentExample = module.default;
            isLoading = false; // Set loading to false once the code is fetched
        })
        .catch((error) => {
            console.error("Failed to load component example:", error);
            isLoading = false;
        });

    let SelectedTab: "preview" | "code" = "preview";
</script>

<div class="w-full flex flex-row mb-4">
    <button
        on:click={() => {
            SelectedTab = "preview";
        }}
        class="p-3 {SelectedTab === 'preview'
            ? 'p-3 border-b-default border-foreground w-28'
            : 'p-3 w-28'} w-28"
    >
        Preview
    </button>
    {#if isLoading}
        <button
            class="p-3 {SelectedTab === 'code'
                ? 'p-3 border-b-default w-28'
                : 'p-3 w-28'} w-28 flex items-center justify-center"
        >
            <LoaderCircle class="w-4 h-4 animate-spin" />
        </button>
    {:else}
        <button
            on:click={() => {
                SelectedTab = "code";
            }}
            class="p-3 {SelectedTab === 'code'
                ? 'p-3 border-b-default w-28 border-foreground '
                : 'p-3 w-28'} w-28"
        >
            Code
        </button>
    {/if}
</div>
<div
    class="flex flex-row gap-4 flex-wrap w-full items-center justify-center rounded-lg border-default"
>
    <div
        class="{SelectedTab === 'preview'
            ? 'flex'
            : 'hidden'} rounded-md bg-alternate-muted w-full h-full min-h-[15rem] flex items-center justify-center"
    >
        <slot />
    </div>
    <div
        class="{SelectedTab === 'code'
            ? 'flex'
            : 'hidden'} rounded-md h-full bg-[#0f0f10] w-full overflow-auto p-4"
    >
        {#if RawComponentExample}
            <CodeBlock code={RawComponentExample} lang="svelte" />
        {/if}
    </div>
</div>
