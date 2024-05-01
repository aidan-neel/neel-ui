<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";

    type $$Props = {
        class?: string;
        placeholder?: string;
        value?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = "";
    export { className as class };
</script>

<textarea
    {placeholder}
    {value}
    {...$$restProps}
    class={cn(
        "w-full p-3 rounded-lg border-default bg-alternate-muted focus:outline-none focus:border-foreground/50 placeholder:text-foreground-muted text-foreground",
        className,
    )}
/>
