<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import { setContext } from 'svelte';
    import type { FileDiffContext, FileDiffRootProps } from '.';
    import Content from './file-diff-content.svelte';
    import Row from './file-diff-row.svelte';
    import TopBar from './file-diff-top-bar.svelte';

    let {
        children,
        class: className,
        file = '',
        lang = '',
        additions,
        deletions,
        diff,
        showLineNumbers = true,
        theme = 'sivir',
        ...rest
    }: FileDiffRootProps = $props();

    const resolvedAdditions = $derived(
        additions ?? diff?.filter((line) => line.type === 'add').length ?? 0
    );
    const resolvedDeletions = $derived(
        deletions ?? diff?.filter((line) => line.type === 'remove').length ?? 0
    );
    const isHighLevel = $derived(diff != null);

    const context = $state({
        lang,
        showLineNumbers,
        file,
        additions: resolvedAdditions,
        deletions: resolvedDeletions,
        theme
    } satisfies FileDiffContext);
    setContext('file-diff', context);

    $effect(() => {
        context.lang = lang;
        context.showLineNumbers = showLineNumbers;
        context.file = file;
        context.additions = resolvedAdditions;
        context.deletions = resolvedDeletions;
        context.theme = theme;
    });
</script>

<div
    data-ui="file-diff"
    class={cn(
        className,
        'sivir-inset-frame flex w-full flex-col overflow-hidden text-foreground',
        // token-lint-disable-next-line no-literal-length: file-diff geometry contract
        '[--file-diff-line-height:1.7] [--file-diff-max-height:min(32rem,70vh)]'
    )}
    {...rest}
>
    {#if isHighLevel}
        <TopBar />
        <Content>
            {#each diff as line, index (index)}
                <Row
                    type={line.type}
                    oldLine={line.oldLineNumber}
                    newLine={line.newLineNumber}
                    code={line.content}
                />
            {/each}
        </Content>
    {:else}
        {@render children?.()}
    {/if}
</div>
