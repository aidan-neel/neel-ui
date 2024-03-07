<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class }
</script>

<p {...$$restProps} class={cn(className, `font-medium text-[14px]`)}>
    <slot></slot>
</p>