<script lang="ts">
    import { Popover } from "$ui/popover";
    import { globalStateStore } from "$library/state";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<Popover stateName="tooltip" {...$$restProps} role="menu" class={className}>
    <slot />
</Popover>
