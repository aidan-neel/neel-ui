<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import type { popoverStateType } from '../popover';
    import { getContext } from 'svelte';
    import { popoverState } from '../popover';
    import { type DataBuilderType } from '$lib/components/neel-ui/button';

    let className: string | undefined = undefined;
    export { className as class }

    const BuilderData = getContext<popoverStateType>('popoverStateData');

    const data: DataBuilderType = {
        type: "confirm",
        key: BuilderData.key,
    }
</script>

<div class={`${className}`} {...$$restProps}>
    <slot data={data}></slot>
</div>