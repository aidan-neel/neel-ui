<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<h1 class="font-semibold text-[20px] pb-1 tracking-tight" {...$$restProps}>
    <slot></slot>
</h1>