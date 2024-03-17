<script lang="ts">
    import '../app.css'
    import '../global.css'
    import { TypographyHeading, TypographySubHeading, TypographyParagraph } from '$lib/components/neel-ui/typography';
    import * as Confirm from '$lib/components/neel-ui/confirm';
    import { Button } from '$lib/components/neel-ui/button';
    import { page } from "$app/stores";
    import './docs/components/comps.css'
    import SiteNavigationBar from '$lib/components/navbar.svelte';
    import { fade } from 'svelte/transition';
    import { new_labeled_components } from '$lib/navbar';
    import { Badge } from '$lib/components/neel-ui/badge';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { inject } from '@vercel/analytics'
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';    import { components, sanitizeComponent } from '$lib/navbar';
    import { ToastComponent } from '$lib/components/neel-ui/toast';

    injectSpeedInsights();
    inject();

    $: pathName = $page.url.pathname
    $: isCurrentPage = (component: string) => pathName.includes(component.toLowerCase())
</script>

<SiteNavigationBar />
<ToastComponent />
<link rel="manifest" href="/manifest.json">

<!--
    <div transition:fade={{duration:100}} class="fixed opacity-40 z-[-1] top-0 left-0 right-0 bottom-0 overflow-hidden h-screen w-screen shadow-class"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] opacity-50 w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#0a0a0a)]"></div></div>
-->

<body class="bg-transparent">
    <div class="fixed overflow-hidden inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1a1919_1px,transparent_1px)] [background-size:14px_14px]"></div>
<main class="flex flex-row items-start px-4 lg:px-0 pb-32 justify-center min-h-[101vh] h-[101%] dark">
        {#if pathName !== "/" && pathName !== "/restaurant"}
        <div class="flex-col hidden lg:flex items-start gap-1 mt-24 w-[15rem]   flex-shrink-0 text-foreground text-[14px]">
            <h1 class="text-foreground mb-1 text-[14px] font-semibold">
                Getting Started
            </h1>
            <Button href="/docs" class={`${pathName === "/docs" ? 'text-foreground font-medium' : 'text-muted-foreground py-0.5 text-[14px]'}`} variant="link">
                Introduction
            </Button>
            <Button href="/docs/installation" class={`${pathName === "/docs/installation" ? 'text-foreground font-medium' : 'text-muted-foreground py-0.5 text-[14px]'}`} variant="link">
                Installation
            </Button>
            <Button href="/docs/changelog" class={`${pathName === "/docs/changelog" ? 'text-foreground font-medium' : 'text-muted-foreground py-0.5 text-[14px]'}`} variant="link">
                Changelog
            </Button>
            <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs/upcoming" class={`py-1 ${pathName === "/docs/upcoming" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                Upcoming
            </Button>
            <h1 class="text-foreground mb-1 text-[14px] font-semibold mt-4">
                Components
            </h1>
            {#each components as component}
                <Button class={`flex py-0.5 text-[14px] flex-row items-center justify-start ${isCurrentPage(component) ? 'text-foreground font-medium' : 'text-muted-foreground'}`} href={`/docs/components/${component.toLowerCase()}`} variant="link">
                {sanitizeComponent(component)}
                    {#if new_labeled_components.includes(sanitizeComponent(component))}
                        <Badge variant="primary" class="ml-2 h-4 w-9 text-[10px] flex items-center justify-center">
                            New
                        </Badge>
                    {/if}
                </Button>
            {/each}
        </div>
        {/if}
        <slot></slot>
        <div class="flex flex-col items-start w-[250px] xl:flex hidden text-foreground text-[14px]">
        </div>
    </main>
</body>