<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }    
</script>

<h1 {...$$restProps} class={`${className} font-medium`}>
    <slot></slot>
</h1>