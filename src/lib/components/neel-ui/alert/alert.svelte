<script lang="ts">
    import { setContext } from "svelte";

    const alertVariants = {
        "default": "p-3 w-[600px] rounded-lg items-center flex flex-row border bg-background",
        "destructive": "p-3 w-[600px] border-destructive text-destructive-foreground rounded-lg items-center flex flex-row border bg-background",
        "success": "p-3 w-[600px] border-success text-success-foreground rounded-lg items-center flex flex-row border bg-background",
        "warning": "p-3 w-[600px] border-warning text-warning-foreground rounded-lg items-center flex flex-row border bg-background",
    }

    let type: 'default' | 'destructive' | 'success' | 'warning' = 'default';
    let className: string | undefined = undefined;
    export { className as class }
    export { type }

    setContext('alertType', type)
</script>

<div {...$$restProps} class={`${className} ${alertVariants[type]}`}>
    <slot></slot>
</div>