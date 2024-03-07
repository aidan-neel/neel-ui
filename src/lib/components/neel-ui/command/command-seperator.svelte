<script lang="ts">
  import { cn } from "$lib/utils";
    import { getContext, setContext } from "svelte";

    // Exported variables
    let className: string | undefined = undefined;

    // Non-exported variables
    

    // Export
    export {
        className as class,
    }
</script>

<div class={cn(className, ` w-full border-t pt-1`)}>
    <slot></slot>
</div>