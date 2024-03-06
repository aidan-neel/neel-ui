<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} border-t pt-2 pb-1`}>
    <slot></slot>
</div>