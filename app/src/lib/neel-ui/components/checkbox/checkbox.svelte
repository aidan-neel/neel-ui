<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";
    import Check from "lucide-svelte/icons/check";

    function genId() {
        return (
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
    }

    type $$Props = {
        class?: string;
        id?: string;
        checked?: boolean;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let id: $$Props["id"] = genId();
    export let checked: $$Props["checked"] = false;
    export { className as class };

    // {...$$restProps} class={cn("", className)}
</script>

<input
    name={id}
    bind:checked
    {id}
    class="hidden"
    type="checkbox"
    {...$$restProps}
/>
<label for={id} class="select-none flex items-center flex-row gap-2">
    <div
        class={cn(
            `${checked ? "bg-primary" : "bg-foreground"} w-5 border-default h-5 flex items-center justify-center rounded-sm`,
            className,
        )}
    >
        {#if checked}
            <Check class="w-4 h-4 text-foreground-opposite" />
        {/if}
    </div>
    <slot />
</label>
