<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export { className as class };
</script>

<h1 id="alert-title" class={cn(`font-semibold text-[20px] pb-1 tracking-tight`)} {...$$restProps}>
    <slot></slot>
</h1>