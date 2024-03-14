<script lang="ts">
    import {Breadcrumb} from "$lib/components/neel-ui/breadcrumb";
    import ChevronRight from "svelte-radix/ChevronRight.svelte";
    import Seo from "$lib/components/seo.svelte";
</script>

<Seo name="docs" />

<main class="w-[45rem] flex flex-col mt-24">
    <div class="flex flex-row   items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Introduction</span>
    </div>
    <h1 class="header_c  ">
        Introduction
    </h1>
    <p class="description_c  ">
        Read the documentation to understand how to use the components
    </p>

    <p class="text-[18px] mt-8  ">
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
        <br><br>
        <b>Why use Neel/UI and not shadcn-svelte?</b> Well, the only real disadvantage to shadcn-svelte is the fact that it's built on Melt/Bits UI. This is not a bad thing, except
        it's not as easy to customize the core primitives of components. With Neel/UI, you can customize anything you want. Whether it be how it behaves, how it looks, or how it's animated.
        <br><br>
        Everything is built with Tailwind CSS, so you can easily customize the look and feel of the components to match your app's design. You can change the colors, the spacing, the typography, and more.
        It currently uses your tailwind.config.js colors, which come default with the init command. Customize them however you want, and the components will automatically update to match your new colors.
    </p>
</main> 