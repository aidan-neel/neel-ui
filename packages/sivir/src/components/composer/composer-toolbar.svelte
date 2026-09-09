<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import type { ComposerToolbarProps } from '.';
    import { getComposerContext } from './context.svelte';

    let {
        children,
        class: className,
        variant = 'chrome',
        'aria-label': ariaLabel = 'Message actions',
        ...rest
    }: ComposerToolbarProps = $props();

    const context = getComposerContext();
    const inset = $derived(variant === 'inset');

    $effect(() => {
        if (inset) {
            context.setInsetToolbar(true);
            return () => {
                context.setInsetToolbar(false);
            };
        }
    });
</script>

<div
    {...rest}
    data-ui="composer-toolbar"
    data-variant={variant}
    data-state={context.status}
    role="toolbar"
    aria-label={ariaLabel}
    class={cn(
        className,
        'flex min-w-0 flex-wrap items-center justify-between gap-2',
        inset
            ? 'sivir-inset-surface -mt-[var(--sivir-modal-inset)] min-h-10 rounded-t-none px-3 py-2'
            : 'min-h-10 px-1 py-1'
    )}
>
    {@render children?.()}
</div>
