<script lang="ts">
  import { cn } from "$lib/utils";
    import { setContext } from "svelte";

    const alertVariants = {
        "default": "p-3 rounded-lg items-center bg-background flex flex-row border shadow-class",
        "destructive": "p-3 border-destructive text-destructive-foreground rounded-lg items-center bg-background flex flex-row border shadow-class",
        "success": "p-3 border-success text-success-foreground rounded-lg items-center bg-background flex flex-row border shadow-class",
        "warning": "p-3 border-warning text-warning-foreground rounded-lg items-center bg-background flex flex-row border shadow-class",
    }

    let type: 'default' | 'destructive' | 'success' | 'warning' = 'default';
    let className: string | undefined = undefined;
    export { className as class }
    export { type }

    setContext('alertType', type)
</script>

<div 
    aria-label="Alert" role="alert"
    {...$$restProps} class={cn(className, `${alertVariants[type]}`)}>
    <slot></slot>
</div>