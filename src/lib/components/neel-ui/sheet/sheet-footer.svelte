<script lang="ts">
    let className: string | undefined = undefined;

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} flex flex-row justify-end items-center w-full mt-4`}>
    <slot></slot>
</div>