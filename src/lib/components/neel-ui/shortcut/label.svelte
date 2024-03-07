<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    
    export {
        className as class,
    }
</script>

<div class={cn(`text-[11px] {className} bg-secondary-muted border px-1 rounded-md font-mono text-muted-foreground`)}>
    <slot></slot>
</div>