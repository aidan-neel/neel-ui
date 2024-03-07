<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<div {...$$restProps} class={cn(className, ` bg-popover-bg items-center justify-center  border flex flex-row p-1.5 gap-1 rounded-lg`)}>
    <slot></slot>
</div>