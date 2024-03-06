<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} border-t mt-1 pb-1`}>
    <slot></slot>
</div>