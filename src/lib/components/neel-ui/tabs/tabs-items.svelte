<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={`${className} bg-popover border flex flex-row p-1.5 gap-1.5 rounded-lg w-full`}>
    <slot></slot>
</div>