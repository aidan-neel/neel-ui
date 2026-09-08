<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import type { Snippet } from 'svelte';
    import { untrack } from 'svelte';
    import { getCardContext } from './context.svelte';

    let {
        children,
        class: classProp,
        ...rest
    }: {
        children: Snippet;
        class?: string;
    } = $props();

    function readCardContext() {
        try {
            return getCardContext();
        } catch {
            return undefined;
        }
    }
    const card = readCardContext();
    const inInsetChrome = $derived(card?.variant === 'inset');

    if (inInsetChrome && card) {
        card.footerSlot = untrack(() => ({
            children,
            className: classProp,
            rest
        }));
    }
</script>

{#if !inInsetChrome}
    <div
        {...rest}
        data-ui="card-footer"
        class={cn(classProp, `w-full flex items-center flex-row mt-6 justify-end gap-2`)}
    >
        {@render children?.()}
    </div>
{/if}
