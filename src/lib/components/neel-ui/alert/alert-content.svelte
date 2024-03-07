<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class }
</script>

<div class={cn(className, `flex flex-col pl-2`)} {...$$restProps}>
    <slot></slot>
</div>