<script lang="ts">
  import { cn } from "$lib/utils";
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    export { className as class }

    const typeVariants = {
        "destructive": "text-muted-destructive",
        "default": "text-muted-foreground",
    }

    const type = getContext('alertType');
</script>

<p {...$$restProps} class={cn(className, `${typeVariants[type]} text-[14px]`)}>
    <slot></slot>
</p>