<script lang="ts">
    import {Breadcrumb} from "$lib/components/neel-ui/breadcrumb";
    import { ChevronRight } from "radix-icons-svelte";
</script>

<main class="w-[45rem] flex flex-col mt-24">
    <div class="flex flex-row fade-up items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Introduction</span>
    </div>
    <h1 class="header_c fade-up">
        Introduction
    </h1>
    <p class="description_c fade-up">
        Read the documentation to understand how to use the components
    </p>

    <p class="text-[16px] mt-8 fade-up">
        Neel UI is a collection of beautifully crafted components that are super accessible and customizable.
        You can copy and paste these components into your SvelteKit apps.
        <br><br>
        It's heavily inspired by <a href="https://ui.shadcn.com/" class="underline hover:text-muted-foreground duration-100">Shadcn/UI</a> and I give full credit to him for the inspiration.
        <a href="https://ui.shadcn.com/" class="underline hover:text-muted-foreground duration-100">Shadcn/UI</a>'s SvelteKit port by <a class="underline hover:text-muted-foreground duration-100" href="https://twitter.com/huntabyte">Huntabyte</a>
        was also a huge inspiration for me to create Neel UI, and I even
        used some of his components as a base to create my own.
        <br><br>
        Similar to <a href="https://ui.shadcn.com/" class="underline hover:text-muted-foreground duration-100">Shadcn/UI</a>, you do not need to install any dependencies to use Neel UI. 
        You can simply copy and paste the components into your SvelteKit app and they will work out of the box.
    </p>
</main> 