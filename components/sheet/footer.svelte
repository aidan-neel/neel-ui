<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";

    const key = getContext<string>("key");
    const side = getContext<string>("side");

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div
    {...$$restProps}
    class={cn(
        `flex flex-row mt-4 ${side === "left" ? "justify-end" : "justify-start"} items-center`,
        className,
    )}
>
    <slot />
</div>
