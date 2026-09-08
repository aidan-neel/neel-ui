<script lang="ts">
    import Square from '@lucide/svelte/icons/square';
    import { Button } from '@sivir-ui/svelte/components/button';
    import Shortcut from '@sivir-ui/svelte/components/shortcut';
    import { cn } from '@sivir-ui/svelte/utils';
    import type { ComposerSubmitProps } from '.';
    import { getComposerContext } from './context.svelte';

    let {
        label = 'Send',
        queueLabel = 'Queue message',
        stopLabel = 'Stop response',
        loadingLabel = 'Sending',
        children,
        element = $bindable(),
        disabled = false,
        class: className,
        onclick,
        ...rest
    }: ComposerSubmitProps = $props();

    const context = getComposerContext();
    const empty = $derived(context.value.trim() === '');
    const action = $derived.by(() => {
        if (context.pending) {
            return 'pending';
        }
        if (context.generating === undefined && context.status === 'submitting') {
            return 'stop';
        }
        if (context.generating) {
            return empty ? 'stop' : 'queue';
        }
        return 'send';
    });
    const isPending = $derived(action === 'pending');
    const isDisabled = $derived(
        context.disabled || disabled || (action === 'send' && !context.allowEmpty && empty)
    );
    const actionLabel = $derived(
        action === 'stop'
            ? stopLabel
            : action === 'queue'
              ? queueLabel
              : isPending
                ? loadingLabel
                : label
    );

    function handleClick(event: MouseEvent) {
        onclick?.(event);
        if (!event.defaultPrevented && action === 'stop') {
            context.stop();
        }
    }
</script>

<Button
    bind:element
    {...rest}
    type={action === 'stop' || isPending ? 'button' : 'submit'}
    variant="primary"
    data-ui="composer-submit"
    data-state={action}
    disabled={isDisabled}
    loading={isPending}
    {loadingLabel}
    aria-label={actionLabel}
    onclick={handleClick}
    class={cn(className, 'shrink-0 px-3')}
>
    {#if children}
        {@render children({ action, generating: context.generating ?? false, empty })}
    {:else if action === 'stop'}
        <Square size={8} fill="currentColor" aria-hidden="true" />
        Stop
    {:else}
        Send
        <Shortcut shortcut="enter" />
    {/if}
</Button>
