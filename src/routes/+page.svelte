<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { Input } from '$lib/components/neel-ui/input';
    import ArrowRight from 'svelte-radix/ArrowRight.svelte'
    import GithubLogo from 'svelte-radix/GithubLogo.svelte';
    import * as Confirm from "$lib/components/neel-ui/confirm";
    import { Badge } from "$lib/components/neel-ui/badge";
    import { fade } from 'svelte/transition';
    import CommandExample from '$lib/components/examples/command-example.svelte';
    import DropdownExample from '$lib/components/examples/dropdown-menu-example.svelte';

    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import PopoutExample from '$lib/components/examples/popout-example.svelte';
    import SwitchExample from '$lib/components/examples/switch-example.svelte';
    import ComponentPreview from '$lib/components/component-preview.svelte';
  import ContextMenuExample from '$lib/components/examples/context-menu-example.svelte';
  import FileExample from '$lib/components/examples/file-example.svelte';
    import CheckboxExample from '$lib/components/examples/checkbox-example.svelte';
    import KeycodeExample from '$lib/components/examples/keycode-example.svelte';
</script>

<Seo name="home" />

<div transition:fade={{duration:100}} class="h-screen flex flex-col items-center pt-32 lg:pt-48 justify-start absolute">
    <a href="/docs/changelog" class=" ">
        <Badge class="py-1 mb-2 flex flex-row items-center justify-center" variant="ghost">
            <span class="mr-2">🎉</span> v0.0.2 is out! See what's new <ArrowRight class="ml-2 text-muted-foreground" />
        </Badge>
    </a>
    <h1 class="md:text-5xl text-4xl max-w-[40rem] font-bold   text-center tracking-tighter">
        Make frontend development a breeze with Neel UI
    </h1>
    <p class="text-[14px] md:text-xl text-muted-foreground   w-full max-w-[40rem] px-6 mt-2 text-center">
        Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
    </p>
    <div class="flex flex-row gap-4 mt-4  ">
        <Button href="/docs/components">
            Get Started
        </Button>   
        <Button href="https://github.com/aidan-neel/neel-ui" variant="secondary">
            <GithubLogo class="w-4 h-4 mr-1" /> GitHub
        </Button>
    </div>
    <div class="mt-12"></div>

    <!--
        <div class="md:w-[80rem] mt-10 w-[90%] pb-48 grid sm:grid-cols-3 grid-cols-1 gap-8 place-items-center">
        <ComponentPreview>
            <Button>
                Button
            </Button>
        </ComponentPreview>
        <ComponentPreview>
            <Input placeholder="Enter Username" maxWidth={false} class="w-80" />
        </ComponentPreview>
        <ComponentPreview>
            <CommandExample />
        </ComponentPreview>
        <ComponentPreview>
            <DropdownExample />
        </ComponentPreview>
        <ComponentPreview>
            <PopoutExample />
        </ComponentPreview>
        <ComponentPreview>
            <SwitchExample />
        </ComponentPreview>
        <ComponentPreview>
            <KeycodeExample />
        </ComponentPreview>
        <ComponentPreview>
            <FileExample />
        </ComponentPreview>
        <ComponentPreview>
            <CheckboxExample />
        </ComponentPreview>
    </div>
    -->
</div>