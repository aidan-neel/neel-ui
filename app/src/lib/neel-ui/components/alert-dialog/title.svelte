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

<h1
    id={`alert-dialog-title-${key}`}
    class={cn(
        "pb-1 text-xl font-semibold w-full text-center sm:text-left",
        className,
    )}
>
    <slot />
</h1>
