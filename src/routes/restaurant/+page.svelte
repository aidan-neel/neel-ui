<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import GithubLogo from 'svelte-radix/GithubLogo.svelte';
    import { fade } from 'svelte/transition';
    import { flyAndScale } from '$lib/utils'
    import Seo from '$lib/components/seo.svelte';
    import NeelUILogo from '$lib/assets/logo.png'
    import Tweet from '$lib/components/hero/tweet.svelte';
    import CardExample from '$lib/components/examples/card-example.svelte';
    import CommandExample from '$lib/components/examples/command-example.svelte';
    import TabsExample from '$lib/components/examples/tabs-example.svelte';
    import DialogExample from '$lib/components/examples/dialog-example.svelte';
    import DropdownMenuExample from '$lib/components/examples/dropdown-menu-example.svelte';
    import PopoutExample from '$lib/components/examples/popout-example.svelte';
    import Card2 from '$lib/components/hero/card2.svelte';
    import Share from '$lib/components/hero/share.svelte';
  import ExpandExample from '$lib/components/examples/expand-example.svelte';
  import ToastExample from '$lib/components/examples/toast-example.svelte';
  import DropdownMenu from '$lib/components/neel-ui/dropdown-menu/dropdown-menu.svelte';
  import SwitchExample from '$lib/components/examples/switch-example.svelte';
  import CheckboxExample from '$lib/components/examples/checkbox-example.svelte';
    import FileExample from '$lib/components/examples/file-example.svelte';

    import * as Card from '$lib/components/neel-ui/card';
    import { Input } from '$lib/components/neel-ui/input';
    
    let bahamasImage = "https://plus.unsplash.com/premium_photo-1681223399703-3c9cc4e786b8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
</script>

<Seo name="home" />

<div transition:flyAndScale={{ start: 1 }} class="h-screen flex flex-col items-start justify-start absolute">
    <div class="flex flex-col pt-32 lg:pt-48 flex-shrink-0">
        <heading class="text-left">
            <h1 class="md:text-5xl text-4xl max-w-[40rem] font-bold tracking-tighter">
                Make frontend development a breeze with Neel UI
            </h1>
            <p class="text-[14px] md:text-xl text-foreground/80 w-full max-w-[35rem] mt-2 ">
                Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
            </p>
        </heading>
        <div class="mt-3 flex flex-row gap-4">
            <Button href="/docs/components/alert">
                Get Started
            </Button>
            <Button variant="secondary" href="https://github.com/aidan-neel/neel-ui">
                <GithubLogo class="w-4 h-4 mr-2" />
                Star on GitHub
            </Button>
        </div>
    </div>
    <div class="pt-8 hidden md:flex border-t mt-8 items-end justify-center gap-6">
        <div class="flex flex-shrink-0 flex-col h-full w-auto gap-4 items-start justify-center">
            <Tweet />
            <div class="flex flex-row gap-3">
                <CommandExample />
                <PopoutExample />
            </div>
            <Share />
        </div>
        <div class="flex flex-col flex-shrink-0 h-full w-auto gap-4 items-start justify-center">
            <div class="flex flex-row items-center justify-between w-full">
                <DropdownMenuExample />
                <SwitchExample />
            </div>
            <CardExample />
            <Card2 />
            <CheckboxExample />
            <div class="flex flex-row items-center justify-between w-full">
                <ToastExample />
                <DialogExample />
            </div>
        </div>
    </div>
</div>