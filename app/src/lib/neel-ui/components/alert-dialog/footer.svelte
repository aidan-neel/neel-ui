<script lang="ts">
    import { cn } from "$library/utils";

    type $$Props = {
        class?: string;
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div
    class="mt-8 w-full flex gap-2 flex-col sm:flex-row items-center justify-end"
>
    <div
        class={cn("flex flex-col w-full gap-3 sm:flex-row sm:w-1/2", className)}
    >
        <slot />
    </div>
</div>
