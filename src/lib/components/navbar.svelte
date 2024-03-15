<script lang="ts">
    import Logo from '$lib/assets/logo.png'
    import { page } from '$app/stores';
    import { Button } from '$lib/components/neel-ui/button';
    import GithubLogo from 'svelte-radix/GithubLogo.svelte';
    import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
    import * as Sheet from '$lib/components/neel-ui/sheet';
    import { sheetStateManagement } from '$lib/components/neel-ui/sheet';
    import { Badge } from '$lib/components/neel-ui/badge';
    import { new_labeled_components } from '$lib/navbar';
    import NavbarCommand from './navbar-command.svelte';
    import { writable } from 'svelte/store';
    import { components, sanitizeComponent } from '$lib/navbar';

    $: pathName = $page.url.pathname
    $: isCurrentPage = (component: string) => pathName.includes(component.toLowerCase())

    function CloseNavbarSheet(key: string) {
        // Check if the sheet is open
        if ($sheetStateManagement[key].open) {
            // Close the sheet
            $sheetStateManagement[key].open = false
        }
    }
</script>

<nav class='w-screen hidden lg:flex h-16 z-20 fixed top-0 items-center text-[14px] justify-center left-0 blurring shadow-class bg-background border-b'>
    <div class="flex flex-row items-center justify-between w-[80rem] gap-6 mr-1 md:px-8 text-[14px]">
        <nav class="flex flex-row gap-6 items-center">
            <a href="/" class="flex flex-row items-center h-full gap-1">
                <img src={Logo} alt="Neel" class="h-6 w-6" />
                <h1 class="text-lg font-bold">Neel/UI</h1>
            </a>
            <a href="/docs" class={`${pathName === "/docs" || "/docs/" ? 'text-white' : ""}  text-zinc-400 text-[14px] hover:text-zinc-500 duration-100`}>
                Docs
            </a>
            <a href="/docs/components" class={`${pathName === "/docs/components" || "/docs/components/" ? 'text-white' : ""}  text-zinc-400 text-[14px] hover:text-zinc-500 duration-100`}>
                Components
            </a>
            <a href="https://github.com/aidan-neel/neel-ui" class={`${pathName === "/https://github.com/aidan-neel/neel-ui" || "/https://github.com/aidan-neel/neel-ui/" ? 'text-white' : ""}  text-zinc-400 text-[14px] hover:text-zinc-500 duration-100`}>
                GitHub
            </a>
        </nav>

        <div class="flex flex-row items-center gap-2">
            <NavbarCommand shortcut="/"  />
        </div>
    </div>
</nav>

<nav class="w-screen flex lg:hidden fixed top-0 h-16 z-20 left-0 items-center px-3 shadow-class bg-background border-b">
    <div class="flex flex-row items-center justify-start w-full">
        <Sheet.Root let:BuilderData side="left">
            <Sheet.Trigger let:data>
                <Button data={data} variant="ghost" class="h-10 w-10">
                    <HamburgerMenu class="w-5 h-5 absolute text-muted-foreground" />
                </Button>
            </Sheet.Trigger>
            <Sheet.Content class="pb-24">
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
                <h1 class="text-foreground mb-1 text-[14px] font-semibold mt-4">
                    Getting Started
                </h1>
                <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs" class={`py-1 ${pathName === "/docs" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                    Introduction
                </Button>
                <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs/installation" class={`py-1 ${pathName === "/docs/installation" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                    Installation
                </Button>
                <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} href="/docs/changelog" class={`py-1 ${pathName === "/docs/changelog" ? 'text-foreground font-medium' : 'text-muted-foreground'}`} variant="link">
                    Changelog
                </Button>
                <h1 class="text-foreground mb-1 text-[14px] font-semibold mt-4">
                    Components
                </h1>
                {#each components as component}
                    <Button on:click={() => {CloseNavbarSheet(BuilderData.key)}} class={`py-1 flex flex-row items-center justify-start ${isCurrentPage(component) ? 'text-foreground font-medium' : 'text-muted-foreground'}`} href={`/docs/components/${component.toLowerCase()}`} variant="link">
                        {sanitizeComponent(component)}
                        {#if new_labeled_components.includes(sanitizeComponent(component))}
                            <Badge variant="primary" class="ml-2 h-4 w-10 text-[10px] flex items-center justify-center">
                                New
                            </Badge>
                        {/if}
                    </Button>
                {/each}
            </Sheet.Content>
        </Sheet.Root>
        <NavbarCommand shortcut={undefined} class="sm:min-w-[18rem] ml-2 mr-2 w-full md:w-[24rem]" />
    </div>
    <Button href="https://github.com/aidan-neel/neel-ui/" class="h-10 w-10 mr-2" variant="ghost">
        <GithubLogo class="w-5 h-5 absolute text-white" />
    </Button>
</nav>