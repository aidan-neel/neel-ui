<script lang="ts">
    import { cn } from "$library/utils";

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<p {...$$restProps} class={cn("my-1.5 mb-5 text-foreground-muted", className)}>
    <slot />
</p>
