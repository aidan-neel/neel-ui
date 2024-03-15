<script lang="ts">
    import {Breadcrumb} from "$lib/components/neel-ui/breadcrumb";
    import ChevronRight from "svelte-radix/ChevronRight.svelte";
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';
    import { marked } from 'marked';
    import Highlighted from '$lib/components/highlighted.svelte';
</script>

<Seo name="install" />

<main class="w-[45rem] flex flex-col mt-24">
    <div class="flex flex-row items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Installation</span>
    </div>
    <h1 class="header_c">
        Installation
    </h1>
    <p class="description_c">
        Install Neel UI in your SvelteKit app with ease
    </p>

    <h2 class="text-2xl font-semibold mt-5 border-b pb-3">
        Setup your project
    </h2>
    <h3 class='text-xl mt-5 mb-3 font-medium'>
        Create Project
    </h3>
    <p class="my-2">
        Firstly, create a new SvelteKit project using the following command:
    </p>

    <Highlighted class="my-4 py-4 px-4">
        npm create svelte@latest my-app
    </Highlighted>

    <h3 class='text-xl mt-3 mb-3 font-medium'>
        Install TailwindCSS
    </h3>
    <p class="my-2">
        Use the <Highlighted>svelte-add</Highlighted> CLI to install TailwindCSS in your project.
    </p>

    <Highlighted class="my-4 py-4 px-4">
        npx svelte-add@latest tailwindcss
    </Highlighted>

    <h3 class='text-xl mt-3 mb-1 font-medium'>
        Install dependencies
    </h3>

    <Highlighted class="my-4 py-4 px-4">
        npm install
    </Highlighted>

    <h3 class='text-xl mt-3 mb-1 font-medium'>
        Run the CLI
    </h3>

    <Highlighted class="my-4 py-4 px-4">
        npx neel-ui init
    </Highlighted>
    
    <h3 class='text-xl mt-3 mb-3 font-medium'>
        Add components
    </h3>
    <p class="my-2">
        You're done, now you can start using Neel UI components in your SvelteKit app.
    </p>

    <Highlighted class="my-4 py-4 px-4">
        npx neel-ui add button
    </Highlighted>
</main> 
