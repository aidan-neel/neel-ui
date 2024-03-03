<script lang="ts">
    let heightClass: string = "h-[22.5rem]"
    let widthClass: string = "w-[45rem]"
    let className: string | undefined = undefined;
    export { className as class, heightClass, widthClass }
</script>

<div class={`${className} ${widthClass} ${heightClass} flex items-center justify-center border rounded-lg`}>
    <slot></slot>
</div>