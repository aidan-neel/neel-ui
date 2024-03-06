<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }    
</script>

<div {...$$restProps} class={`${className} bg-popover-bg shadow-class border p-6 rounded-lg`}>
    <slot></slot>
</div>