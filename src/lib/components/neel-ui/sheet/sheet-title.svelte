<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<h1 {...$$restProps} class={`${className} font-semibold text-foreground text-xl`}>
    <slot></slot>
</h1>