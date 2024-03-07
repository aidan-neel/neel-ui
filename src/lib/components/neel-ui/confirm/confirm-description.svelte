<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;;
    export { className as class };
</script>

<h3 id="alert-message" class={cn(`text-muted-foreground text-[14px]`)}>
    <slot></slot>
</h3>