<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";
    import X from "lucide-svelte/icons/x";
    import Button from "$ui/button";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={cn("mt-4", className)}>
    <slot />
    <Button
        on:click={() => {
            $globalStateStore["sheet"][key].open = false;
        }}
        variant="ghost"
        size="icon"
        class="h-9 w-9 absolute right-4 top-4"
    >
        <X class="text-foreground-muted" />
    </Button>
</div>
