<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={cn(className, ` bg-background items-center justify-center gap-1 p-1 border flex flex-row  rounded-lg`)}>
    <slot></slot>
</div>