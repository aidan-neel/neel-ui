<script lang="ts">
    import { cn } from "$library/utils";

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<h1 {...$$restProps} class={cn("text-xl font-medium", className)}>
    <slot />
</h1>
