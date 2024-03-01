<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }    
</script>

<div {...$$restProps} class={`${className} border p-3 rounded-lg`}>
    <slot></slot>
</div>