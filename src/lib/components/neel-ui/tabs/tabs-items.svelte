<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={`${className} bg-popover items-center justify-center  border flex flex-row p-1.5 gap-1 rounded-lg`}>
    <slot></slot>
</div>