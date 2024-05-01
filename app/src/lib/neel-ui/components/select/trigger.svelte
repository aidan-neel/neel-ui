<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { PopoverTrigger } from "$ui/popover";
    import { getContext } from "svelte";

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: string | undefined = undefined;
    export { className as class };

    const key = getContext<string>("key");

    $: item = $globalStateStore["select"][key].data.selected;
</script>

<PopoverTrigger {...$$restProps} class={className} let:data>
    <slot {data} {item} />
</PopoverTrigger>
