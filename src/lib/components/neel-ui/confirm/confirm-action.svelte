<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { getContext, setContext } from 'svelte';
    import { type popoverStateType, popoverState } from '../popover';

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

<Button on:click on:click={ClosePopover} class={`${className} w-full`} variant="primary">
    <slot></slot>
</Button>