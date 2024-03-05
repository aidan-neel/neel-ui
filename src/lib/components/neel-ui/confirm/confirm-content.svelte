<script lang="ts">
    import { Popover, type popoverStateType } from "$lib/components/neel-ui/popover"
    import { getContext } from 'svelte';

    const BuilderData = getContext<popoverStateType>('popoverStateData');

    let className: string | undefined = undefined;
    export { className as class }
</script>

<Popover builder={BuilderData} class={`${className} z-[999]`}>
    <slot></slot>
</Popover>