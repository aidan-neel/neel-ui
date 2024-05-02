<script lang="ts">
    import { components } from "$lib/components";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    const sanitizeComponent = (name: string) => {
        return name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const blacklistedPages: string[] = ["/"];

    const introductoryPages = [
        { title: "Introduction", href: "/docs/introduction" },
        { title: "Installation", href: "/docs/installation" },
        // { title: "Styling", icon: PaintBucket, href: "/docs/styling" },
        { title: "Changelog", href: "/docs/changelog" },
    ];

    $: pathName = $page.url.pathname;
    $: isCurrentPage = (component: string) =>
        pathName.includes(component.toLowerCase());
</script>

<h1 class="text-foreground-muted/70 pl-3 font-semibold mb-2">
    GETTING STARTED
</h1>
{#each introductoryPages as introPage}
    <a
        href={introPage.href}
        class={`${isCurrentPage(introPage.href) === true ? "bg-ghost-hovered text-white" : "text-foreground-opposite"} p-2 pl-3 text-foreground/80 text-[15px]  hover:text-foreground-opposite hover:bg-ghost-hovered rounded-md w-full text-[16px] duration-150`}
    >
        {introPage.title}
    </a>
{/each}
<h1 class="text-foreground-muted/70 pl-3 font-semibold mt-6 mb-2">
    COMPONENTS
</h1>
{#each components as component}
    <a
        on:click={() => {
            goto(`/docs/components/${component}`);
        }}
        href={`/docs/components/${component}`}
        class={`${isCurrentPage(component) === true ? "bg-ghost-hovered text-white" : "text-foreground-opposite"} flex items-center flex-row gap-2 p-2 pl-3 text-foreground/80 text-[15px] hover:text-foreground-opposite hover:bg-ghost-hovered rounded-md w-full text-[16px] duration-150`}
    >
        {sanitizeComponent(component)}
		{#if component === "combobox"}
			<div class="text-xs text-red-500 bg-red-500/30 px-2 p-1 rounded-sm">
				Disabled
			</div>
		{/if}
    </a>
{/each}
