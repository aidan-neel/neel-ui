<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { ArrowLeft, ArrowRight, GithubLogo } from 'radix-icons-svelte';
    import * as Confirm from "$lib/components/neel-ui/confirm";
    import { Badge } from "$lib/components/neel-ui/badge";
    import { fade } from 'svelte/transition';

    import DocCard from '$lib/components/doc-card.svelte';
  import Seo from '$lib/components/seo.svelte';
</script>

<Seo name="home" />

<div transition:fade={{duration:100}} class="h-screen flex flex-col items-center pt-32 lg:pt-48 justify-start absolute">
    <a href="/docs/components" class="fade-up">
        <Badge class="py-1 mb-2 flex flex-row items-center justify-center" variant="ghost">
            <span class="mr-2">🎉</span> Beta 0.0.1 has been released! <ArrowRight class="ml-2 text-muted-foreground" />
        </Badge>
    </a>
    <h1 class="md:text-5xl text-4xl max-w-[40rem] text-5xl font-bold fade-up text-center tracking-tighter">
        Make frontend development a breeze with Neel UI
    </h1>
    <p class="text-xl text-muted-foreground fade-up max-w-[40rem] px-6 mt-2 text-center">
        Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
    </p>
    <div class="flex flex-row gap-4 mt-4 fade-up">
        <Button href="/docs/components">
            Get Started
        </Button>
        <Button href="https://github.com/aidan-neel/neel-ui" variant="secondary">
            <GithubLogo class="w-4 h-4 mr-1" /> GitHub
        </Button>
    </div>

    <div class="w-full text-[14px] mt-8 flex items-start px-4 justify-center flex-col">
        <!--
            <div class="doc-card-parent">
            <DocCard 
            component="confirm"
            desc="A modal dialog for confirmation of user destructive action"
            header="Confirm"
            showHeading={false}
            showUsage={false}
            >
                <Confirm.Root>
                    <Confirm.Trigger>
                        Try it out!
                    </Confirm.Trigger>
                    <Confirm.Content>
                        <Confirm.Heading>
                            <Confirm.Title>
                                Make frontend development a breeze
                            </Confirm.Title>
                            <Confirm.Description>
                                Super accessible and customizable components that you can copy and paste into your SvelteKit apps.
                            </Confirm.Description>
                        </Confirm.Heading>
                        <Confirm.Footer>
                            <Confirm.Action>Continue</Confirm.Action>
                            <Confirm.Cancel>Cancel</Confirm.Cancel>
                        </Confirm.Footer>
                    </Confirm.Content>
                </Confirm.Root>        
            </DocCard>
        </div>
        -->
    </div>
</div>