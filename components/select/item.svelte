<script lang="ts">
    import { DropdownMenuItem } from "$ui/dropdown-menu";
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";
    import { getContext } from "svelte";
    import Check from "lucide-svelte/icons/check";

    type $$Props = {
        class?: string;
        item?: string;
        closeOnClick?: boolean;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let item: $$Props["item"] = undefined;
    export let closeOnClick: $$Props["closeOnClick"] = true;
    export { className as class };

    const key = getContext<string>("key");
    $: selected = $globalStateStore["select"][key]?.data.selected;
</script>

<DropdownMenuItem
    onClick={() => {
        if (key && item) {
            $globalStateStore["select"][key].data.selected = item;
            $globalStateStore["select"][key].open = false;
        }
    }}
    id={"select-item-" + item + key}
    {closeOnClick}
    class={cn("w-full flex-row justify-between", className)}
>
    {item}
    {#if item === selected}
        <Check class="w-4 h-4" />
    {/if}
</DropdownMenuItem>
