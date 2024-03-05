<script lang="ts">
    import Logo from '$lib/assets/logo.png'
    import { page } from '$app/stores';
    import { Button } from '$lib/components/neel-ui/button';
    import { GithubLogo, HamburgerMenu } from 'radix-icons-svelte';
    import * as Sheet from '$lib/components/neel-ui/sheet';
    import { sheetStateManagement } from '$lib/components/neel-ui/sheet';

    const excludedComponents = ['popover', 'typography'];

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

    $: pathName = $page.url.pathname
    $: isCurrentPage = (component: string) => pathName.includes(component.toLowerCase())

    function CloseNavbarSheet(key: string) {
        $sheetStateManagement[key].open = false;
    }
</script>

<nav class='w-screen hidden fade-up md:flex h-16 absolute z-20 top-0 items-center text-[14px] justify-center left-0 bg-background bg-opacity-50 backdrop-blur-md border-b'>
    <div class="flex flex-row items-center justify-center gap-6 mr-1 text-[14px]">
        <a href="/" class="flex flex-row items-center h-full gap-1">
            <img src={Logo} alt="Neel" class="h-6 w-6" />
            <h1 class="text-lg font-bold">Neel/UI</h1>
        </a>
        <a href="/docs" class={`${pathName === "/docs" || "/docs/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
            Docs
        </a>
        <a href="/docs/components" class={`${pathName === "/docs/components" || "/docs/components/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
            Components
        </a>
        <a href="https://github.com/aidan-neel/neel-ui" class={`${pathName === "/https://github.com/aidan-neel/neel-ui" || "/https://github.com/aidan-neel/neel-ui/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
            GitHub
        </a>
        <a class="text-zinc-400 hover:text-zinc-500 duration-100" href="https://ui.shadcn.com/">
            Inspiration
        </a>
    </div>
</nav>

<nav class="w-screen flex md:hidden absolute top-0 h-16 z-20 left-0 items-center justify-between px-3 bg-background bg-opacity-50 backdrop-blur-md border-b">
    <Sheet.Root let:BuilderData side="left">
        <Sheet.Trigger let:data>
            <Button data={data} variant="ghost" class="h-10 w-10">
                <HamburgerMenu class="w-5 h-5 absolute text-muted-foreground" />
            </Button>
        </Sheet.Trigger>
        <Sheet.Content>
            <Sheet.Header>
                <Sheet.Title>
                    <Sheet.Cancel class="bg-transparent hover:bg-transparent text-white border-none px-0 h-8">
                        <a on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/" class="flex flex-row items-center h-full gap-1">
                            <img src={Logo} alt="Neel" class="h-8 w-8" />
                            <h1 class="text-lg font-bold">Neel/UI</h1>
                        </a>
                    </Sheet.Cancel>
                </Sheet.Title>
            </Sheet.Header>
            <h1 class="text-foreground mb-1 text-[16px] font-semibold mt-4">
                Getting Started
            </h1>
            <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs" class={`py-1 ${pathName === "/docs" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                Introduction
            </Button>
            <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs/installation" class={`py-1 ${pathName === "/docs/installation" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                Installation
            </Button>
            <h1 class="text-foreground mb-1 text-[16px] font-semibold mt-4">
                Components
            </h1>
            {#each capitalizedComponentNames as component}
                <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} class={`py-1 ${isCurrentPage(component) ? 'text-foreground font-medium' : 'text-muted-foreground'}`} href={`/docs/components/${component.toLowerCase()}`} variant="link">
                    {component === "Link-preview" ? "Link Preview" : component}
                </Button>
            {/each}
        </Sheet.Content>
    </Sheet.Root>
    <Button href="https://github.com/aidan-neel/neel-ui/" class="h-10 w-10" variant="ghost">
        <GithubLogo class="w-5 h-5 absolute text-white" />
    </Button>
</nav>