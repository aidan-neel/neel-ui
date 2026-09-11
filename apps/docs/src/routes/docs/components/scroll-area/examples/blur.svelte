<script lang="ts">
    import { ScrollArea } from '@sivir-ui/svelte/components/scroll-area';

    const commits = [
        { hash: '9f2c1ab', message: 'Tighten the panel elevation ramp' },
        { hash: '4d80e73', message: 'Drop the unused motion fallback' },
        { hash: 'b17aa90', message: 'Document the density scale' },
        { hash: '02f5c6e', message: 'Fix toast stacking on mobile' },
        { hash: 'ac9013d', message: 'Add a reduced-motion snapshot' },
        { hash: '76be24f', message: 'Rename the radius tokens' },
        { hash: 'e3c8a15', message: 'Guard the popover outside click' },
        { hash: '5a10f9b', message: 'Split the theme export helpers' },
        { hash: 'd42e607', message: 'Cache the syntax highlighter' },
        { hash: '81fb3c2', message: 'Correct the badge outline width' },
        { hash: '3c67d48', message: 'Trim the changelog compiler' },
        { hash: 'f905b1e', message: 'Restore the focus ring on Safari' }
    ];
</script>

{#snippet commitList()}
    <div class="flex flex-col p-2">
        {#each commits as commit (commit.hash)}
            <div
                class="flex items-baseline gap-3 rounded-[var(--radius-md)] px-3 py-2 text-[0.85rem]"
            >
                <span class="font-mono text-[0.75rem] text-foreground-muted">{commit.hash}</span>
                <span class="truncate text-foreground">{commit.message}</span>
            </div>
        {/each}
    </div>
{/snippet}

<div class="flex flex-wrap items-start justify-center gap-6 p-10">
    <div class="flex flex-col gap-2">
        <span class="text-[0.7rem] font-semibold uppercase tracking-wider text-foreground-muted">
            Default
        </span>
        <ScrollArea
            aria-label="Commits with a blurred edge cue"
            class="h-56 w-72 rounded-[var(--radius-lg)] border border-border bg-panel"
        >
            {@render commitList()}
        </ScrollArea>
    </div>

    <div class="flex flex-col gap-2">
        <span class="text-[0.7rem] font-semibold uppercase tracking-wider text-foreground-muted">
            blur=&#123;false&#125;
        </span>
        <ScrollArea
            blur={false}
            aria-label="Commits without a blurred edge cue"
            class="h-56 w-72 rounded-[var(--radius-lg)] border border-border bg-panel"
        >
            {@render commitList()}
        </ScrollArea>
    </div>
</div>
