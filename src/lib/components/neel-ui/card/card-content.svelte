<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class }    
</script>

<div {...$$restProps} class={cn(className, `mt-6`)}>
    <slot></slot>
</div>