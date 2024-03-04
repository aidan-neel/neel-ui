<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { GithubLogo } from 'radix-icons-svelte';
    import Image1 from '$lib/assets/image.png'
    import Image2 from '$lib/assets/image2.png'

    import * as Card from "$lib/components/neel-ui/card";
    import * as Alert from "$lib/components/neel-ui/alert";
    import * as Confirm from "$lib/components/neel-ui/confirm";
    import * as Select from "$lib/components/neel-ui/select";
    import * as Tabs from "$lib/components/neel-ui/tabs";
    import { Breadcrumb } from "$lib/components/neel-ui/breadcrumb";
    import { Input } from "$lib/components/neel-ui/input";
</script>

<div class="h-screen w-screen flex flex-col items-center pt-48 justify-start absolute">
    <h1 class="text-5xl font-bold text-center tracking-tighter">
        Beautifully crafted components
    </h1>
    <p class="text-xl text-muted-foreground w-[575px] mt-2 text-center">
        Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
    </p>
    <div class="flex flex-row gap-4 mt-4">
        <Button href="/docs/components">
            Get Started
        </Button>
        <Button href="https://github.com/aidan-neel/neel-ui" variant="secondary">
            <GithubLogo class="w-4 h-4 mr-1" /> GitHub
        </Button>
    </div>
</div>