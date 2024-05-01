<script lang="ts">
    import { PopoverTrigger } from "$ui/popover";
    import { cn } from "$library/utils";
    import ChevronRight from "lucide-svelte/icons/chevron-right";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<PopoverTrigger
    delayClose={150}
    openType="mouseenter"
    closeType="mouseleave"
    {...$$restProps}
    class={cn(className, "w-full")}
    let:data
>
    <slot {data} />
</PopoverTrigger>
