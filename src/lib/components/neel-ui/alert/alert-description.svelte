<script lang="ts">
    import { getContext } from "svelte";

    let className: string | undefined = undefined;
    export { className as class }

    const typeVariants = {
        "destructive": "text-muted-destructive",
        "default": "text-muted-foreground",
    }

    const type = getContext('alertType');
</script>

<p {...$$restProps} class={`${className} ${typeVariants[type]} text-[14px]`}>
    <slot></slot>
</p>