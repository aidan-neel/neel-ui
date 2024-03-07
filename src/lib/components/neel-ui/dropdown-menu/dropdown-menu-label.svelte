<script lang="ts">
    import { cn } from "$lib/utils";

    let className: string | undefined = undefined;

export {
        className as class
    }
</script>

<h1
{...$$restProps}
class={cn(className, ` text-[14px] mb-1 border-b w-full pl-3 pt-1 pb-2 font-semibold`)}>
    <slot></slot>
</h1>