<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<h1
{...$$restProps}
class={`${className} text-[14px] mb-1 border-b w-full pl-3 py-3 font-semibold`}>
    <slot></slot>
</h1>