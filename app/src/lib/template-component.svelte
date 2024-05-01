<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={cn("", className)}>
    <slot />
</div>
