<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import type { popoverStateType } from '../popover';
    import { getContext } from 'svelte';
    import { popoverState } from '../popover';

    let className: string | undefined = undefined;
    export { className as class }

    const BuilderData = getContext<popoverStateType>('popoverStateData');

    function OpenPopover() {
        console.log(BuilderData);
        BuilderData.open = true;
        popoverState.update((state) => {
            return {
                [BuilderData.key]: BuilderData
            };
        });
    }
</script>

<Button on:click={OpenPopover} class={`${className}`} variant="primary" {...$$restProps}>
    <slot></slot>
</Button>