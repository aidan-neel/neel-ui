<script lang="ts">
    import { cn } from "$library/utils";
    import { Popover } from "$ui/popover";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<Popover {...$$restProps} role="menu" class={cn(className, "w-full")}>
    <slot />
</Popover>
