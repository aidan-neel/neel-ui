<script lang="ts">
    let className: string | undefined = undefined;

    import { cn } from '$lib/utils'    

    export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ` w-full border-t`)}>
    <slot></slot>
</div>