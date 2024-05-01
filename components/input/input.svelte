<script lang="ts">
    import { cn } from "$library/utils";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";

    type InputType =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";

    type $$Props = {
        class?: string;
        type?: InputType;
        placeholder?: string;
        value?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let type: $$Props["type"] = "text";
    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = "";
    export { className as class };
</script>

<input
    {type}
    {placeholder}
    {value}
    {...$$restProps}
    class={cn(
        "w-full p-3 rounded-lg border-default bg-alternate focus:outline-none focus:border-foreground/30 placeholder:text-foreground-muted text-foreground",
        className,
    )}
/>
