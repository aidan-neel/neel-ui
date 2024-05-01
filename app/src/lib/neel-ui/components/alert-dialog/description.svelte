<script lang="ts">
    import { cn } from "$library/utils";
    import { getContext } from "svelte";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<p
    id={`alert-dialog-subtitle-${key}`}
    class={cn(
        "text-foreground-muted w-[90%] sm:w-full text-center sm:text-left",
        className,
    )}
>
    <slot />
</p>
