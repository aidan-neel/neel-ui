<script lang="ts">
    import { components } from "$lib/components";
    import { page } from "$app/stores";
    import Button from "$ui/button";
    import SwatchBook from "lucide-svelte/icons/swatch-book";
    import Wrench from "lucide-svelte/icons/wrench";
    import PaintBucket from "lucide-svelte/icons/paint-bucket";
    import PenLine from "lucide-svelte/icons/pen-line";
    import { onMount } from "svelte";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import { lightOrDarkMode } from "$lib/stores";
    import { goto } from "$app/navigation";
    import Menu from "lucide-svelte/icons/menu";
    import * as Sheet from "$ui/sheet";
    import NavbarItems from "./navbar-items.svelte";

    const sanitizeComponent = (name: string) => {
        return name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    let darkMode;

    $: pathName = $page.url.pathname;
    $: isCurrentPage = (component: string) =>
        pathName.includes(component.toLowerCase());

    const blacklistedPages: string[] = ["/"];

    const introductoryPages = [
        { title: "Introduction", icon: SwatchBook, href: "/docs/introduction" },
        { title: "Installation", icon: Wrench, href: "/docs/installation" },
        // { title: "Styling", icon: PaintBucket, href: "/docs/styling" },
        { title: "Changelog", icon: PenLine, href: "/docs/changelog" },
    ];

    onMount(() => {
        darkMode = localStorage.getItem("theme") === "dark";
    });
</script>

<nav
    class="flex md:hidden h-[5rem] fixed top-0 z-10 bg-background left-0 w-screen px-4 border-b-default items-center justify-between"
>
    <Sheet.Root>
        <Sheet.Trigger let:data>
            <div class="flex flex-row gap-4">
                <Button {data} variant="outlined" size="icon">
                    <Menu class="text-foreground-muted" />
                </Button>
                <a href="/" class="flex flex-row items-center gap-3">
                    <div
                        class="grid grid-rows-2 grid-cols-2 items-center justify-center"
                    >
                        <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                        <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                        <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                        <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                    </div>
                    <h1 class="font-semibold text-xl">Neel UI</h1>
                </a>
            </div>
        </Sheet.Trigger>
        <Sheet.Content>
            <a href="/" class="flex ml-4 flex-row items-center gap-3">
                <div
                    class="grid grid-rows-2 grid-cols-2 items-center justify-center"
                >
                    <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                </div>
                <h1 class="font-semibold text-xl">Neel UI</h1>
            </a>
            <Sheet.Header />
            <div class="flex mt-8 flex-col lg:w-[250px] pr-[25px] gap-1">
                <NavbarItems />
            </div>
        </Sheet.Content>
    </Sheet.Root>
    <div class="flex flex-row gap-4">
        <Button href="https://github.com/aidan-neel/neel-ui" variant="outlined">
            Feedback
        </Button>
        <Button
            on:click={() => {
                document.body.classList.toggle("dark");
                lightOrDarkMode.set(darkMode ? "dark" : "light");
                localStorage.setItem("theme", darkMode ? "light" : "dark");
                darkMode = !darkMode;
            }}
            variant="outlined"
            size="icon"
        >
            {#if darkMode}
                <Moon class="w-5 h-5" />
            {:else}
                <Sun class="w-5 h-5" />
            {/if}
        </Button>
    </div>
</nav>

<nav
    class="fixed top-0 z-10 bg-background hidden md:flex left-0 w-screen px-10 h-[5rem] border-b-default flex items-center justify-center"
>
    <section
        class="w-full px-5 md:px-0 lg:max-w-[82.5rem] flex items-center justify-between h-full"
    >
        <div class="flex flex-row items-center">
            <a href="/" class="flex flex-row items-center gap-3">
                <div
                    class="grid grid-rows-2 grid-cols-2 items-center justify-center"
                >
                    <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-transparent"></div>
                    <div class="h-2 w-2 rounded-[2px] bg-primary"></div>
                </div>
                <h1 class="font-semibold text-xl">Neel UI</h1>
            </a>
            <div class="ml-10 text-foreground-muted space-x-2 flex flex-row">
                <Button
                    variant="link"
                    class="{pathName === '/docs'
                        ? 'text-foreground/90'
                        : 'text-foreground-muted'} duration-200"
                    href="/docs/introduction"
                >
                    Docs
                </Button>
                <Button
                    variant="link"
                    class="{pathName.startsWith('/docs/components')
                        ? 'text-foreground/90'
                        : 'text-foreground-muted'} duration-200"
                    href="/docs/components/alert-dialog"
                >
                    Components
                </Button>
            </div>
        </div>

        <div class="flex flex-row gap-4">
            <Button
                href="https://github.com/aidan-neel/neel-ui"
                variant="outlined"
            >
                Feedback
            </Button>
            <Button
                on:click={() => {
                    document.body.classList.toggle("dark");
                    lightOrDarkMode.set(darkMode ? "dark" : "light");
                    localStorage.setItem("theme", darkMode ? "light" : "dark");
                    darkMode = !darkMode;
                }}
                variant="outlined"
                size="icon"
            >
                {#if darkMode}
                    <Moon class="w-5 h-5" />
                {:else}
                    <Sun class="w-5 h-5" />
                {/if}
            </Button>
        </div>
    </section>
</nav>

{#if !blacklistedPages.includes(pathName)}
    <nav
        class="relative w-full lg:w-[250px] flex-col hidden lg:flex lg:pr-20 text-sm flex-shrink-0"
    >
        <div class="fixed flex flex-col lg:w-[250px] pr-[25px] gap-1">
            <NavbarItems />
        </div>
    </nav>
{/if}
