<script lang="ts">
    import { PopoverTrigger } from "$ui/popover";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<PopoverTrigger {...$$restProps} class={className} let:data>
    <slot {data} />
</PopoverTrigger>
