<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { ArrowLeft, ArrowRight, GithubLogo } from 'radix-icons-svelte';
    import * as Confirm from "$lib/components/neel-ui/confirm";
    import { Badge } from "$lib/components/neel-ui/badge";
    import { fade } from 'svelte/transition';

    import DocCard from '$lib/components/doc-card.svelte';
  import Seo from '$lib/components/seo.svelte';
  import NavbarCommand from '$lib/components/navbar-command.svelte';
</script>

<Seo name="home" />

<div transition:fade={{duration:100}} class="h-screen flex flex-col items-center pt-32 lg:pt-48 justify-start absolute">
    <a href="/docs/changelog" class="fade-up">
        <Badge class="py-1 mb-2 flex flex-row items-center justify-center" variant="ghost">
            <span class="mr-2">🎉</span> 3 new components have been added! <ArrowRight class="ml-2 text-muted-foreground" />
        </Badge>
    </a>
    <h1 class="md:text-5xl text-4xl max-w-[40rem] text-5xl font-bold fade-up text-center tracking-tighter">
        Make frontend development a breeze with Neel UI
    </h1>
    <p class="text-xl text-muted-foreground fade-up max-w-[40rem] px-6 mt-2 text-center">
        Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
    </p>
    <div class="flex flex-col mt-4 fade-up gap-2 w-auto items-center justify-center">
        <div class="flex flex-row w-auto gap-2 items-start justify-start fade-up">
            <Button class="flex-shrink-0 w-[12rem]" href="/docs/components">
                Get Started
            </Button>
            <Button class="flex-shrink-0 w-[12rem]" href="https://github.com/aidan-neel/neel-ui" variant="secondary">
                <GithubLogo class="w-4 h-4 mr-1" /> GitHub
            </Button>
        </div>
        <NavbarCommand class="h-full w-full fade-up" />
    </div>
</div>