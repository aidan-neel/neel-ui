<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} w-full border-t`}>
    <slot></slot>
</div>