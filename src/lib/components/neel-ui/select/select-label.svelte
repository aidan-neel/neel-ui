<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} text-[14px] w-full pl-3 py-2 font-semibold border-b border-b-primary-border/30`}>
    <slot></slot>
</div>