<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<p {...$$restProps} class={`${className} text-muted-foreground font-normal mb-4`}>
    <slot></slot>
</p>