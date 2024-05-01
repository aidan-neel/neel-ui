<script lang="ts">
    import { page } from "$app/stores";
    $: pathName = $page.url.pathname;
    $: hash = $page.url.hash;

    export let headings = {};

    let titles = [];
    let subtitles = [];

    // for example, "API", "Import", "Usage" are all titles, and "Button Props" is a subtitle
</script>

<div
    class="flex flex-col gap-2 w-full text-base lg:w-[250px] text-foreground-muted fixed"
>
    <p class="text-foreground font-medium">On this page</p>
    <!-- Iterate over headings, depicting a tree -->
    {#each Object.keys(headings) as title}
        <div class="flex flex-col gap-1">
            {#if "#" + title.toLowerCase() === hash}
                <a
                    href={pathName + `#${title.toLowerCase()}`}
                    class="text-foreground hover:text-foreground duration-150"
                    >{title}</a
                >
            {:else}
                <a
                    href={pathName + `#${title.toLowerCase()}`}
                    class="text-foreground-muted/80 hover:text-foreground duration-150 duration-150"
                    >{title}</a
                >
            {/if}
            {#each headings[title] as subtitle}
                {#if "#" + subtitle.toLowerCase() === hash.replace("%20", " ")}
                    <a
                        href={pathName + `#${subtitle.toLowerCase()}`}
                        class="ml-4 text-foreground hover:text-foreground duration-150"
                        >{subtitle}</a
                    >
                {:else}
                    <a
                        href={pathName + `#${subtitle.toLowerCase()}`}
                        class="ml-4 text-foreground-muted/80 hover:text-foreground duration-150 duration-150"
                        >{subtitle}</a
                    >
                {/if}
            {/each}
        </div>
    {/each}
</div>
