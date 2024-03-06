<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }
</script>

<p {...$$restProps} class={`${className} font-medium text-[14px]`}>
    <slot></slot>
</p>