<script lang="ts">
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

    const excludedComponents = ['popover', 'typography', 'shortcut'];

    // Search for all the component folders in the $lib/components/neel-ui, but not the .svelte files just the name of the folders containing the .svelte files
    const componentFolders = import.meta.glob('/src/lib/components/neel-ui/**/+(*.svelte)');
    const componentNames = Object.keys(componentFolders).map((component) => {
        const componentName = component.split('/').slice(-2)[0];
        if (!excludedComponents.includes(componentName)) {
            return componentName;
        }
    });

    // Remove duplicates
    const uniqueComponentNames = Array.from(new Set(componentNames)).filter((component) => component !== undefined);
    // Remove excludedComponents
    const filteredComponentNames = uniqueComponentNames.filter((component) => !excludedComponents.includes(component));
    // Capitalize the first letter of each component name
    const capitalizedComponentNames = filteredComponentNames.map((component) => {
        return component.charAt(0).toUpperCase() + component.slice(1);
    });

    const sanitizedComponent = (component: string) => {
        if (component === "Link-preview") {
            return "Link Preview"
        }

        if (component === "Dropdown-menu") {
            return "Dropdown Menu"
        }

        if (component === "Context-menu") {
            return "Context Menu"
        }

        return component
    }

    $: pathName = $page.url.pathname
    $: isCurrentPage = (component: string) => pathName.includes(component.toLowerCase())
</script>

<SiteNavigationBar />
<div transition:fade={{duration:100}} class="fixed opacity-40 z-[-1] top-0 left-0 right-0 bottom-0 overflow-hidden h-screen w-screen shadow-class"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] opacity-50 w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#0a0a0a)]"></div></div>
<main class="flex flex-row items-start px-4 lg:px-0 pb-96 justify-center w-screen h-full dark">
    {#if pathName !== "/"}
    <div class="flex-col hidden lg:flex items-start gap-1 mt-24 w-[15rem] flex-shrink-0 text-foreground text-[14px]">
        <h1 class="text-foreground mb-1 text-[16px] font-semibold">
            Getting Started
        </h1>
        <Button href="/docs" class={`${pathName === "/docs" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
            Introduction
        </Button>
        <Button href="/docs/installation" class={`${pathName === "/docs/installation" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
            Installation
        </Button>
        <Button href="/docs/changelog" class={`${pathName === "/docs/changelog" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
            Changelog
        </Button>
        <h1 class="text-foreground mb-1 text-[16px] font-semibold mt-4">
            Components
        </h1>
        {#each capitalizedComponentNames as component}
            <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} class={`flex flex-row items-center justify-start ${isCurrentPage(component) ? 'text-foreground font-medium' : 'text-muted-foreground'}`} href={`/docs/components/${component.toLowerCase()}`} variant="link">
            {sanitizedComponent(component)}
                {#if new_labeled_components.includes(sanitizedComponent(component))}
                    <Badge variant="secondary" class="ml-1 h-5 w-9 text-[10px] flex items-center justify-center">
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