<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class }
</script>

<div class={`${className} flex flex-col pl-2`} {...$$restProps}>
    <slot></slot>
</div>