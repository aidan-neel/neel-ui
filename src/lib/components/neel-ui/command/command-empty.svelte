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

<div class={cn(className, ` h-[6rem] text-muted-foreground flex items-center justify-center`)}>
    <p>
        No results found
    </p>
</div>