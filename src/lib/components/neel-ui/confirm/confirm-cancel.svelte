<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { getContext, setContext } from 'svelte';
    import { popoverState, type popoverStateType } from '../modal';
    import { cn } from '$lib/utils';

    let className: string | undefined = undefined;
    export { className as class }

    const popoverStateData = getContext<popoverStateType>('popoverStateData');

    function ClosePopover() {
        if (popoverStateData) {
            popoverStateData.open = false;
            popoverState.update((state) => {
                return {
                    ...state,
                    [popoverStateData.key]: popoverStateData
                };
            });
        }
    }
</script>

<Button on:click={ClosePopover} class={cn(className, ` w-full`)} variant="secondary" {...$$restProps}>
    <slot></slot>
</Button>