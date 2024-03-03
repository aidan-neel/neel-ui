<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }    
</script>

<p {...$$restProps} class={`${className} text-muted-foreground  `}>
    <slot></slot>
</p>