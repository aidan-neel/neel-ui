<script lang="ts">
    import { cn } from "$library/utils";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<div class={cn("border w-full my-1", className)}></div>
