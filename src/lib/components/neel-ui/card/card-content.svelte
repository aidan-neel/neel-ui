<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }    
</script>

<div {...$$restProps} class={`${className} mt-6`}>
    <slot></slot>
</div>