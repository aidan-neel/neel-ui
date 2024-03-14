<script lang="ts">
    import {Breadcrumb} from "$lib/components/neel-ui/breadcrumb";
    import ChevronRight from "svelte-radix/ChevronRight.svelte";
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="install" />

<main class="w-[45rem] flex flex-col mt-24  ">
    <div class="flex flex-row items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Installation</span>
    </div>
    <h1 class="header_c  ">
        Installation
    </h1>
    <p class="description_c  ">
        Install Neel UI in your SvelteKit app with ease
    </p>

    <p class="text-[18px] mt-8  ">
        Start by initializing a new SvelteKit app
    </p>

    <div class="p-4 w-full   bg-background shadow-class border rounded-lg mt-4 font-mono text-[14px]">
        <span class="text-[#efba8f]">npm</span> create <span class="text-[#70b9a5]">svelte@latest</span>
    </div>

    <p class="mt-4 text-[18px]  ">
        Make sure that you have <b>TailwindCSS</b> installed, as Neel UI is built on top of it. Then, initialize Neel UI with the npx command.
    </p>

    <div class="p-4 w-full   bg-background shadow-class border rounded-lg mt-4 font-mono text-[14px]">
        <span class="text-[#efba8f]">npx</span> neel-ui <span class="text-[#70b9a5]">init</span>
    </div>

    <p class="mt-4 text-[18px]  ">
        This will install Neel UI in your SvelteKit app. You need to import the <b>global css</b> file in your <b>+layout.svelte</b> file. Before you can start
        using components, you will need to selectively insall them.
        <br><br>
        Some components install other components as dependencies, so be sure to read the
        documentation for each component. To install a component, use the following command:
    </p>

    <div class="p-4 w-full   bg-background shadow-class border rounded-lg mt-4 font-mono text-[14px]">
        <span class="text-[#efba8f]">npx</span> neel-ui <span class="text-[#70b9a5]">add button</span>
    </div>

    <p class="mt-4 text-[18px]  ">
        This will install the button component in your app. You can now use it in your Svelte files. The list of all available components can be found below.
    </p>

    <div class="p-4 w-full flex flex-col   gap-1 bg-background shadow-class border rounded-lg mt-4 font-mono text-[14px]">
        <span class="text-[#70b9a5]"> alert </span> - Displays a callout message to the user<br><br>
        <span class="text-[#70b9a5]"> badge </span> - Displays a basic component that looks like a badge<br><br>
        <span class="text-[#70b9a5]"> breadcrumb </span> - Breadcrumb component designed for easy navigation within a page<br><br>
        <span class="text-[#70b9a5]"> button </span> - Displays a basic button with various styles and variants<br><br>
        <span class="text-[#70b9a5]"> card </span> - A card component with header and description sub-components<br><br>
        <span class="text-[#70b9a5]"> confirm </span> - A modal dialog for confirmation of user destructive action<br><br>
        <span class="text-[#70b9a5]"> input </span> - An input component with an optional label<br><br>
        <span class="text-[#70b9a5]"> link-preview </span> - Displays content behind a link in a preview format<br><br>
        <span class="text-[#70b9a5]"> select </span> - Selection component with groups of items to choose from<br><br>
        <span class="text-[#70b9a5]"> sheet </span> - Displays a sheet component that comes out from a direction of your choice<br><br>
        <span class="text-[#70b9a5]"> tabs </span> - Tabs component which allows you to swap between content displays<br><br>
        <span class="text-[#70b9a5]"> tooltip </span> - Display's a tooltip card whenever you hover something for 750ms<br><br>
    </div>
</main> 