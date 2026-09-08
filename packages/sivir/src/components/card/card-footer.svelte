<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import type { Snippet } from 'svelte';
    import { untrack } from 'svelte';
    import { type CardFooterSlot, getCardContext } from './context.svelte';

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

    const footerSlot = $state<CardFooterSlot>({
        get children() {
            return children;
        },
        get className() {
            return classProp;
        },
        get rest() {
            return rest;
        }
    });

    if (inInsetChrome && card) {
        card.footerSlot = footerSlot;
    }

    $effect(() => {
        if (!card || !inInsetChrome) {
            return;
        }
        card.footerSlot = footerSlot;
        return () => {
            untrack(() => {
                if (card.footerSlot === footerSlot) {
                    card.footerSlot = undefined;
                }
            });
        };
    });
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
