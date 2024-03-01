<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import type { popoverStateType } from '../popover';
    import { popoverState } from '../popover';

    let className: string | undefined = undefined;
    let BuilderData: popoverStateType;
    export { className as class }
    export { BuilderData as builder }

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