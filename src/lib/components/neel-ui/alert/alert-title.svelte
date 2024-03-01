<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }
</script>

<h1 {...$$restProps} class={`${className} font-medium text-[14px]`}>
    <slot></slot>
</h1>