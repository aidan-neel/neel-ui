<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class }    
</script>

<div {...$$restProps} class={cn(className, `bg-popover-bg shadow-class border p-6 rounded-lg`)}>
    <slot></slot>
</div>